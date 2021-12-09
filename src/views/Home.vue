<template>
  <div>
    <Hero v-if="showHero" />
    <div class="container pt-5">
      <div class="row">
        <div class="col-lg-7">
          <PostListItem />
          <PostListItem />
          <PostListItem />
          <PostListItem />
          <PostListItem />
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-4 d-none d-lg-block">
          <div class="position-sticky" style="top: 2rem">
            <div class="p-4 mb-3 bg-light rounded">
              <h4>Authors to follow</h4>
              <p class="mb-0">
                Customize this section to tell your visitors a little bit about
                your publication, writers, content, or something else entirely.
                Totally up to you.
              </p>
            </div>

            <div class="p-4">
              <h4>Explore categories</h4>
              <ol class="list-unstyled mb-0">
                <li><a href="#">March 2021</a></li>
                <li><a href="#">February 2021</a></li>
                <li><a href="#">January 2021</a></li>
                <li><a href="#">December 2020</a></li>
                <li><a href="#">November 2020</a></li>
                <li><a href="#">October 2020</a></li>
                <li><a href="#">September 2020</a></li>
                <li><a href="#">August 2020</a></li>
                <li><a href="#">July 2020</a></li>
                <li><a href="#">June 2020</a></li>
                <li><a href="#">May 2020</a></li>
                <li><a href="#">April 2020</a></li>
              </ol>
            </div>

            <div class="p-4">
              <h4>Elsewhere</h4>
              <ol class="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ol>
            </div>
          </div>
        </div>
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