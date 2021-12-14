<template>
  <div class="d-flex flex-column-reverse flex-md-row align-items-md-end">
    <div class="flex-grow-1 me-md-3 g-0 h-md-250">
      <div class="pt-3 d-flex flex-column">
        <div class="d-inline-block mb-1">
          <router-link :to="{ name: 'profile' }"
            ><img
              src="https://randomuser.me/api/portraits/women/29.jpg"
              class="rounded-circle me-2 avatar"
              alt="@"
          /></router-link>
          <router-link :to="{ name: 'profile' }" class="author-link">{{
            post.user.username
          }}</router-link>
        </div>
        <router-link :to="{ name: 'post-detail' }" class="mb-1 lh-sm post-title"
          >{{ post.title }}
        </router-link>
        <router-link
          :to="{ name: 'post-detail' }"
          class="card-text mb-2 lh-base post-summary"
        >
          In this post we will see how can we validate a form data and show
          error messages ot the user.
        </router-link>
        <div
          class="
            mb-0
            text-muted
            d-flex
            align-items-end align-items-md-center
            justify-content-between
          "
        >
          <div>
            <span>Nov 12</span><span class="dot"></span><span>5 min read</span>
            <span class="d-none d-md-inline dot"></span>
            <a class="d-none d-md-inline category-btn" href="#">{{
              post.category
            }}</a>
          </div>
          <div class="action">
            <button title="Bookmark story">
              <img
                src="/assets/bookmark-plus.svg"
                @click="this.$emit('toggle-bookmark', post.id)"
                class="icon"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-shrink-0 mx-auto p-image">
      <router-link :to="{ name: 'post-detail' }">
        <img :src="post.image" alt="" />
      </router-link>
    </div>
  </div>
  <hr class="my-4" />
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    post: Object,
  },
  emits: ["toggle-bookmark"],
};
</script>

<style scoped>
a {
  color: #111;
  text-decoration: none;
}
.avatar {
  width: 20px;
  height: 20px;
}
.post-title {
  font-weight: bold;
  color: #333;
  font-size: 1.3rem;
  font-family: Arial, Helvetica, sans-serif;
}
.post-summary {
  color: #555;
  font-size: 1.1rem;
}
.p-image a img {
  width: 100%;
  height: 100%;
}
.category-btn {
  background: rgb(238, 238, 238);
  color: #444;
  border-radius: 10px;
  padding: 5px 8px;
  text-align: center;
  margin-right: 10px;
}
.icon {
  width: 20px;
  height: 20px;
}
.action button {
  all: unset;
  padding: 5px;
  border-radius: 50%;
}
.action button:hover {
  cursor: pointer;
}
@media only screen and (min-width: 768px) {
  .p-image {
    width: 200px;
    height: 200px;
  }
}
</style>