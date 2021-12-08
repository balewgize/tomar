<template>
  <div>
    <Hero v-if="showHero" />
    <div class="container pt-5">
      <div class="row">
        <div class="col-lg-7">
          <PostListItem />
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-4 d-none d-lg-block">Right side content</div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import PostListItem from "../components/PostListItem.vue";

export default {
  name: "Home",
  components: {
    Hero,
    PostListItem,
  },
  data() {
    return {
      showHero: false,
    };
  },
};
</script>
<style scoped>
</style>