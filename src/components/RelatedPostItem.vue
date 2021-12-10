<template>
  <div class="d-flex flex-lg-row flex-column">
    <div class="more d-flex flex-column flex-md-row">
      <!-- Begin one related post item -->
      <div class="d-flex m-post m-2">
        <div class="d-flex flex-column flex-grow-1 me-2">
          <a href="#" class="post-title mb-2">Short title</a>
          <router-link :to="{ name: 'profile' }" class="author-link"
            >Jhon Doe</router-link
          >
        </div>
        <div class="flex-shrink-0 m-image">
          <a href="#">
            <img src="http://placehold.jp/150x150.png" alt="" />
          </a>
        </div>
      </div>
      <!-- End related post list item -->
      <div class="d-flex m-post m-2">
        <div class="d-flex flex-column flex-grow-1 me-2">
          <a href="#" class="post-title mb-2"
            >Another related post title post title
          </a>
          <router-link :to="{ name: 'profile' }" class="author-link"
            >Jhon Doe</router-link
          >
        </div>
        <div class="flex-shrink-0 m-image">
          <a href="#">
            <img src="http://placehold.jp/150x150.png" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div class="more d-flex flex-column flex-md-row">
      <!-- Begin one related post item -->
      <div class="d-flex m-post m-2">
        <div class="d-flex flex-column flex-grow-1 me-2">
          <a href="#" class="post-title mb-2">Another related post</a>
          <router-link :to="{ name: 'profile' }" class="author-link"
            >Jhon Doe</router-link
          >
        </div>
        <div class="flex-shrink-0 m-image">
          <a href="#">
            <img src="http://placehold.jp/150x150.png" alt="" />
          </a>
        </div>
      </div>
      <!-- End related post list item -->
      <div class="d-flex m-post m-2">
        <div class="d-flex flex-column flex-grow-1 me-2">
          <a href="#" class="post-title mb-2"
            >Another related post title post title</a
          >
          <router-link :to="{ name: 'profile' }" class="author-link"
            >Jhon Doe</router-link
          >
        </div>
        <div class="flex-shrink-0 m-image">
          <a href="#">
            <img src="http://placehold.jp/150x150.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RelatedPostItem",
};
</script>

<style scoped>
a {
  color: #333;
}
.author-link {
  width: fit-content;
}
.author-link:hover {
  text-decoration: underline;
}
.m-image {
  width: 90px;
  height: 90px;
}
.m-image img {
  width: 100%;
  height: 100%;
}
.post-title {
  font-size: 1.1rem;
  line-height: 1.2;
}
.post-title:hover {
  color: #222;
}
@media only screen and (min-width: 768px) {
  .post-title {
    font-size: 1.2rem;
  }
  .m-post {
    width: 50%;
  }
  .m-image {
    width: 100px;
    height: 100px;
  }
}
@media only screen and (min-width: 992px) {
  .post-title {
    font-size: 1.3rem;
  }
  .m-image {
    width: 110px;
    height: 110px;
  }
}
</style>