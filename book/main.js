//Vue transition effect for displaying discount when clicked
new Vue({
  el: "#trans",
  data: {
    show: false
  }
});

// Vue component for displaying different car images according to color-box hovered over, and displaying availibilty
Vue.component("car", {
    props: {          //props for finding out if customer is premium
      premium: {
        type: Boolean,
        required: true,
      },
    },
    
    template: `
         <div class="car">
              
            <div class="car-image">
              <img :src="image" />
            </div>
      
            <div class="car-info">
                <h1>{{ car }}</h1>
                <p v-if="available">Available Now!</p>
                <p v-else>Sold Out!</p>
                <p>Inspection: {{ inspection }}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac mi egestas, eleifend leo sit amet, euismod sapien. Fusce tempor aliquam quam sed vestibulum. Suspendisse tincidunt urna a nulla auctor commodo. Sed volutpat nisi vel mi rutrum, ac feugiat mauris sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam at nulla ex. Nunc arcu sapien, porttitor in sodales non, ullamcorper eget arcu. Ut magna lorem, vehicula sit amet quam non, fringilla lobortis felis. Fusce consequat lectus et velit scelerisque, sit amet varius libero consequat. Etiam eleifend facilisis ultricies. Sed feugiat tempus libero non dignissim. Sed blandit lobortis ex. Vestibulum porttitor magna ac lacus rhoncus tempor. Aenean enim mauris, scelerisque a tincidunt in, posuere quis enim.</p>
                <p>Key Features:</p>
                <ul>
                  <li v-for="detail in details">{{ detail }}</li>
                  <br>
                </ul>
                
                <div class="color-box"
                     v-for="(view, index) in view" 
                     :key="view.viewId"
                     :style="{ backgroundColor: view.viewColor }"
                     @mouseover="updatecar(index)"              
                     >
                </div> 
                
              

                <button v-on:click="addTowatchlist" 
                  :disabled="!available"
                  :class="{ disabledButton: !available }"
                  >
                Add to Watchlist
                </button>
      
             </div> 
    
              <div>
                  <p v-if="!reviews.length">There are no reviews yet.</p>
                  <ul v-else>
                      <li v-for="(review, index) in reviews" :key="index">
                        <p>{{ review.name }}</p>
                        <p>Rating:{{ review.rating }}</p>
                        <p>{{ review.review }}</p>
                      </li>
                  </ul>
              </div>
             
             <car-review @review-submitted="addReview"></car-review>
          
          </div>
         `,
    data() {
      return {
        car: "Ferrari F-40",
        agent: "Ace Agents",
        selectedView: 0,
        details: ["Top Speed-180 mph", "300-hp supercharged 3.0-liter V-6", "2,936 cc"],
        view: [
          {
            viewId: 001,                                                          //if user hovers over color red, red car is displayed
            viewColor: "red",
            viewImage:
              "https://robbreport.com.au/application/assets/2021/12/f4001.jpeg",
            viewQuantity: 2,
          },
  
          {
          viewId: 002,                                                            //if user hovers over color gold, gold car is displayed                                          
            viewColor: "gold",
            viewImage:
              "https://cdnb.artstation.com/p/assets/images/images/046/425/295/large/flavien-negrel-final-render-04.jpg?1645087770",
            viewQuantity: 0,
          },
          {
            viewId: 003,
            viewColor: "black",                                                   //if user hovers over color black, black car is displayed
            viewImage:
              "https://performancedrive.com.au/wp-content/uploads/2012/02/1991-Ferrari-F40-black-1-630x419.jpg",
            viewQuantity: 2,
          },
        ],
  
        reviews: [],                                                              //empty list of reviews
      };
    },
    methods: {
      addTowatchlist() {                                                          //Custom event for adding item to watchlist
        this.$emit("add-to-watchlist", this.view[this.selectedView].viewId);
      },
      updatecar(index) {                                                          //Method for updating var according to color-box user hovers over
        this.selectedView = index;
      },
      addReview(carReview) {                                                      //Method for adding new review to list of reviews
        this.reviews.push(carReview);               
      },
    },
    // Computed Properties
    computed: {
      title() {
        return this.agent + " " + this.car;
      },
      image() {
        return this.view[this.selectedView].viewImage;
      },
      available() {
        return this.view[this.selectedView].viewQuantity;
      },
      inspection() {
        if (this.premium) {
          return "At Your Doorstep!";
        }
        return "On Site";
      },
    },
  });
  
  //Vue component for review form
  Vue.component("car-review", {
    template: `
          <form class="review-form" @submit.prevent="onSubmit">
          
            <p class="error" v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>
            </p>
    
            <p>
              <label for="name">Name:</label>
              <input id="name" v-model="name">
            </p>
            
            <p>
              <label for="review">Review:</label>      
              <textarea id="review" v-model="review"></textarea>
            </p>
            
            <p>
              <label for="rating">Rating:</label>
              <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select>
            </p>
    
            <p>Would you recommend this car for rent/buying?</p>
            <label>
              Yes
              <input type="radio" value="Yes" v-model="recommend"/>
            </label>
            <label>
              No
              <input type="radio" value="No" v-model="recommend"/>
            </label>
                
            <p>
              <input type="submit" value="Submit">  
            </p>    
          
        </form>
        `,
    data() {
      return {
        name: null,
        review: null,
        rating: null,
        recommend: null,
        errors: [],
      };
    },
    methods: {
      onSubmit() {                                                                
        this.errors = [];                                                         //list of errors
        if (this.name && this.review && this.rating && this.recommend) {
          let carReview = {
            name: this.name,
            review: this.review,
            rating: this.rating,
            recommend: this.recommend,
          };
          //Vue custom events
          this.$emit("review-submitted", carReview);
          this.name = null;
          this.review = null;
          this.rating = null;
          this.recommend = null;
        } else {                                                      //If name, review, rating, recommendation not given message will be displayed
          if (!this.name) this.errors.push("Name required.");     
          if (!this.review) this.errors.push("Review required.");
          if (!this.rating) this.errors.push("Rating required.");
          if (!this.recommend) this.errors.push("Recommendation required.");
        }
      },
    },
  });
  
  //Vue app for watchlist 
  var app = new Vue({ 
    el: "#app",
    data: {
      premium: true,
      watchlist: [],
    },
  
    methods: {
      updatewatchlist(id) {
        this.watchlist.push(id);
      },
    },
  });

  //Mixin for showAlert function 
  Vue.mixin({
    created: function showAlert()
    {
        // alerts when a input is clicked
  
        alert("Booking Done! We shall contact you soon! Thank you")
        var heading3 = document.getElementById("heading3");
    }
  })

