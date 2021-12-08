<template>
  <div>
    <Hero />
    <PostList />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import PostList from "../components/PostList.vue";

export default {
  name: "Home",
  components: {
    Hero,
    PostList,
  },
};
</script>
<style scoped>
</style>