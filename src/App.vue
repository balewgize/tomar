<template>
  <div>
    <NavBar />
    <div class="container-fluid main">
      <router-view @toggle-bookmark="toggleBookmark"></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  methods: {
    toggleBookmark(postId) {
      // send AJAX request to toggle bookmark
      // change style of the icon
      console.log("user bookmark from App.vue", postId);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Merriweather, Merriweather-sans;
}
a {
  text-decoration: none;
}
.main {
  padding: 0;
  background: rgb(250, 250, 250);
}
.dot:after {
  content: "·";
  margin-left: 5px;
  margin-right: 5px;
}
</style>
