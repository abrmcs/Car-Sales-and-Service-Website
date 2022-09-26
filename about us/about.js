//Vue component for the buying tab.
        //It has 3 sections, each with a description
        Vue.component("tab-buying", {
          data: function () {
              return {
                  buying: [
                      {
                          id: 1,
                          title: "Discounts and Subcharges",
                          content:
                              "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci turpis, posuere tempus nisl et, ultricies consectetur felis. Fusce malesuada tincidunt magna eget tincidunt. Phasellus condimentum ligula nulla, pharetra facilisis leo egestas eu. Donec in posuere ligula. Ut aliquet, justo vel malesuada pharetra, eros ante tristique libero, eu condimentum nulla mi ac ex. Donec dignissim consectetur lectus eu suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vitae lacus eget enim elementum hendrerit nec facilisis mauris. Duis faucibus augue nec dui accumsan luctus. Phasellus eget felis porta, congue elit et, commodo est. Aenean massa tellus, mollis ut sapien eget, feugiat vestibulum nisl.</p>"
                      },
                      {
                          id: 2,
                          title: "Car Servicing",
                          content:
                              "<p>Nullam erat felis, pellentesque id dui vitae, convallis ultricies risus. Praesent interdum ligula facilisis, tristique lacus non, congue dolor. Proin imperdiet nisl ut vulputate aliquet. Aenean pulvinar elit non odio mattis, sed fermentum neque feugiat. Integer quis lacus sit amet mi sagittis condimentum. Nullam vel neque elementum ligula consectetur facilisis. Curabitur blandit massa at nunc cursus, at tincidunt purus convallis. Cras tempus imperdiet luctus. Curabitur malesuada arcu a ultrices dapibus. Mauris quis consequat dolor. Sed hendrerit aliquet leo, ut tincidunt est ullamcorper in.</p>"
                      },
                      {
                          id: 3,
                          title: "Reservation Policy",
                          content:
                              "<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.</p>"
                      }
                  ],
                  selectedPost: null
              };
          },
          template: `
  <div class="posts-tab">
    <ul class="posts-sidebar">
      <li
        v-for="post in buying"
        v-bind:key="post.id"
        v-bind:class="{ selected: post === selectedPost }"
        v-on:click="selectedPost = post"
      >
        {{ post.title }}
      </li>
    </ul>
    <div class="selected-post-container">
      <div
        v-if="selectedPost"
        class="selected-post"
      >
        <h3>{{ selectedPost.title }}</h3>
        <div v-html="selectedPost.content"></div>
      </div>
      <strong v-else>
        Click on a title to view 
      </strong>
    </div>
  </div>
`
      });

      //Vue component for the service tab.
      //It has 3 sections, each with a description
      Vue.component("tab-service", {
          data: function () {
              return {
                  service: [
                      {
                          id: 1,
                          title: "Paint Jobs",
                          content:
                              "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci turpis, posuere tempus nisl et, ultricies consectetur felis. Fusce malesuada tincidunt magna eget tincidunt. Phasellus condimentum ligula nulla, pharetra facilisis leo egestas eu. Donec in posuere ligula. Ut aliquet, justo vel malesuada pharetra, eros ante tristique libero, eu condimentum nulla mi ac ex. Donec dignissim consectetur lectus eu suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vitae lacus eget enim elementum hendrerit nec facilisis mauris. Duis faucibus augue nec dui accumsan luctus. Phasellus eget felis porta, congue elit et, commodo est. Aenean massa tellus, mollis ut sapien eget, feugiat vestibulum nisl.</p>"
                      },
                      {
                          id: 2,
                          title: "Car Modifications",
                          content:
                              "<p>Nullam erat felis, pellentesque id dui vitae, convallis ultricies risus. Praesent interdum ligula facilisis, tristique lacus non, congue dolor. Proin imperdiet nisl ut vulputate aliquet. Aenean pulvinar elit non odio mattis, sed fermentum neque feugiat. Integer quis lacus sit amet mi sagittis condimentum. Nullam vel neque elementum ligula consectetur facilisis. Curabitur blandit massa at nunc cursus, at tincidunt purus convallis. Cras tempus imperdiet luctus. Curabitur malesuada arcu a ultrices dapibus. Mauris quis consequat dolor. Sed hendrerit aliquet leo, ut tincidunt est ullamcorper in.</p>"
                      },
                      {
                          id: 3,
                          title: "Rim Jobs",
                          content:
                              "<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.</p>"
                      }
                  ],
                  selectedPost: null
              };
          },
          template: `
  <div class="posts-tab">
    <ul class="posts-sidebar">
      <li
        v-for="post in service"
        v-bind:key="post.id"
        v-bind:class="{ selected: post === selectedPost }"
        v-on:click="selectedPost = post"
      >
        {{ post.title }}
      </li>
    </ul>
    <div class="selected-post-container">
      <div
        v-if="selectedPost"
        class="selected-post"
      >
        <h3>{{ selectedPost.title }}</h3>
        <div v-html="selectedPost.content"></div>
      </div>
      <strong v-else>
        Click on a title to view 
      </strong>
    </div>
  </div>
`
      });

      //Vue component for the rent tab.
      //It has 3 sections, each with a description
      Vue.component("tab-rent", {
          data: function () {
              return {
                  rent: [
                      {
                          id: 1,
                          title: "$ per km",
                          content:
                              "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci turpis, posuere tempus nisl et, ultricies consectetur felis. Fusce malesuada tincidunt magna eget tincidunt. Phasellus condimentum ligula nulla, pharetra facilisis leo egestas eu. Donec in posuere ligula. Ut aliquet, justo vel malesuada pharetra, eros ante tristique libero, eu condimentum nulla mi ac ex. Donec dignissim consectetur lectus eu suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vitae lacus eget enim elementum hendrerit nec facilisis mauris. Duis faucibus augue nec dui accumsan luctus. Phasellus eget felis porta, congue elit et, commodo est. Aenean massa tellus, mollis ut sapien eget, feugiat vestibulum nisl.</p>"
                      },
                      {
                          id: 2,
                          title: "Insurance Policy",
                          content:
                              "<p>Nullam erat felis, pellentesque id dui vitae, convallis ultricies risus. Praesent interdum ligula facilisis, tristique lacus non, congue dolor. Proin imperdiet nisl ut vulputate aliquet. Aenean pulvinar elit non odio mattis, sed fermentum neque feugiat. Integer quis lacus sit amet mi sagittis condimentum. Nullam vel neque elementum ligula consectetur facilisis. Curabitur blandit massa at nunc cursus, at tincidunt purus convallis. Cras tempus imperdiet luctus. Curabitur malesuada arcu a ultrices dapibus. Mauris quis consequat dolor. Sed hendrerit aliquet leo, ut tincidunt est ullamcorper in.</p>"
                      },
                      {
                          id: 3,
                          title: "24/7 Breakdown Service",
                          content:
                              "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci turpis, posuere tempus nisl et, ultricies consectetur felis. Fusce malesuada tincidunt magna eget tincidunt. Phasellus condimentum ligula nulla, pharetra facilisis leo egestas eu. Donec in posuere ligula. Ut aliquet, justo vel malesuada pharetra, eros ante tristique libero, eu condimentum nulla mi ac ex. Donec dignissim consectetur lectus eu suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vitae lacus eget enim elementum hendrerit nec facilisis mauris. Duis faucibus augue nec dui accumsan luctus. Phasellus eget felis porta, congue elit et, commodo est. Aenean massa tellus, mollis ut sapien eget, feugiat vestibulum nisl.</p>"
                      }
                  ],
                  selectedPost: null
              };
          },
          template: `
  <div class="posts-tab">
    <ul class="posts-sidebar">
      <li
        v-for="post in rent"
        v-bind:key="post.id"
        v-bind:class="{ selected: post === selectedPost }"
        v-on:click="selectedPost = post"
      >
        {{ post.title }}
      </li>
    </ul>
    <div class="selected-post-container">
      <div
        v-if="selectedPost"
        class="selected-post"
      >
        <h3>{{ selectedPost.title }}</h3>
        <div v-html="selectedPost.content"></div>
      </div>
      <strong v-else>
        Click on a title to view 
      </strong>
    </div>
  </div>
`
      });
      // Vue app for the dynamic components of tabs 
      //Keep alive the section selected 
      new Vue({
          el: "#dyncomp",
          data: {
              currentTab: "Buying",
              tabs: ["Buying", "Rent", "Service"]
          },
          computed: {
              currentTabComponent: function () {
                  return "tab-" + this.currentTab.toLowerCase();
              }
          }
      });


new Vue({
    el: "#dyncomp",
    data: {
        currentTab: "Buying",
        tabs: ["Buying", "Archive"],
    },
    computed: {
        currentTabComponent: function () {
            return "tab-" + this.currentTab.toLowerCase();
        },
    },
});

Vue.mixin({
    created: function showAlert() {
        // alerts when a input is clicked

        alert("Message Sent. Thank you!");
        var heading3 = document.getElementById("heading3");
    },
});

//Vue filter to return current date
Vue.filter("localeString", function (value) {
    if (value instanceof Date) {
        return value.toLocaleDateString();
    }
    return value;
});
//Vue app for the date
new Vue({
    el: "#date",
});
