<template>
  <div>
    <Hero v-if="showHero" />
    <div class="container pt-5">
      <div class="row">
        <div class="col-lg-7">
          <PostListItem
            v-for="post in posts"
            :post="post"
            :key="post.id"
            @toggle-bookmark="toggleBookmark"
          />
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
  emits: ["toggle-bookmark"],
  data() {
    return {
      showHero: true,
      posts: [
        {
          id: 1,
          title: "this is post title",
          content: "this is post content",
          image: "http://placehold.jp/150x150.png",
          user: {
            id: 23,
            username: "alex",
          },
          category: "Programming",
        },
        {
          id: 2,
          title: "this is post title 2",
          content: "this is post content 2",
          image: "http://placehold.jp/150x150.png",
          user: {
            id: 26,
            username: "admin",
          },
          category: "Web Development",
        },
      ],
    };
  },
  methods: {
    toggleBookmark(postId) {
      this.$emit("toggle-bookmark", postId);
      console.log("toggle bookmark at Home.vue ", postId);
    },
  },
  // async created() {
  //   const response = await fetch("http://127.0.0.1:8000/blog/posts/");
  //   this.posts = await response.json();
  // },
};
</script>
<style scoped>
</style>