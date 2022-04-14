<template>
  <div id="app">
    <div class="mainframe">
      <FriendsList
          v-bind:listName="'FRIEND LIST'"
          v-bind:buttonName="'login in'"
          v-bind:friendsList="friendsList"
          @login = 'loginIn'
      />
      <FriendsList
          v-bind:listName="'SELECTED LIST'"
          v-bind:buttonName="'export to console'"
          v-bind:friendsList="selectedFriendsList"
      />
    </div>
  </div>
</template>

<script>
import FriendsList from "@/components/FriendsList"
import JQuery from 'jquery'
let $ = JQuery
export default {
  name: 'App',
  components: {
    FriendsList
  },
  data() {
    return {
      friendsList: [],
      selectedFriendsList: [{name: "Somebody", photo: null}],

    }
  },
  methods: {
    loginIn() {
      let hash = window.location.hash.substr(1);
      let searchParams = hash.split('&').reduce(function (res, item) {
        let parts = item.split('=');
        res[parts[0]] = parts[1];
        return res;
      }, {});

      if (!searchParams['access_token']) {
        window.location.href = 'https://oauth.vk.com/authorize?client_id=8137408&display=page&redirect_uri=https://kand1.github.io/vue2-friend-list-test-case/&scope=friends,photos&response_type=token&v=5.81'
      } else {
        let access_token = searchParams['access_token']
        $.ajax({
          url: "https://api.vk.com/method/friends.search?fields=photo_50&count=20&access_token=" + access_token + "&v=5.81",
          method: 'GET',
          dataType: 'JSONP',
          success: (data) => {
            this.friendsList = data.response.items.map(el => {return {
              id: el.id,
              name: el.first_name + ' ' + el.last_name,
              photo: el.photo_50
            }})
          }
        })
      }
    }
  },
  mounted() {
    let hash = window.location.hash.substr(1);
    let searchParams = hash.split('&').reduce(function (res, item) {
      let parts = item.split('=');
      res[parts[0]] = parts[1];
      return res;
    }, {});

    if (searchParams['access_token']) {
      let access_token = searchParams['access_token']
      $.ajax({
        url: "https://api.vk.com/method/friends.search?fields=photo_50&count=20&access_token=" + access_token + "&v=5.81",
        method: 'GET',
        dataType: 'JSONP',
        success: (data) => {
          this.friendsList = data.response.items.map(el => {return {
            id: el.id,
            name: el.first_name + ' ' + el.last_name,
            photo: el.photo_50
          }})
        }
      })
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.mainframe {
  display: flex;
  background-color: #f8ebe4;
  height: 60vh;
  min-height: 600px;
  max-width: 900px;
  margin: auto;
  border-radius: 2.5rem;
}
</style>



https://oauth.vk.com/authorize?client_id=8137408&display=page&redirect_uri=&scope=friends,photos&response_type=token&v=5.52


d6c5a30db55c089dd34c73575389d9d12af1ad354cf9a6fa44641531a099620601d7ff11c9b436407343c

https://oauth.vk.com/blank.html#access_token=d6c5a30db55c089dd34c73575389d9d12af1ad354cf9a6fa44641531a099620601d7ff11c9b436407343c&expires_in=86400&user_id=157553896