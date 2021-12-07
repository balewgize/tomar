<template>
  <div>
    <NavBar />
    <div class="container-fluid main">
      <router-view></router-view>
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
};
</script>

<style>
.main {
  background: rgb(250, 250, 250);
}
</style>
