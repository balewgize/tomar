<template>
  <div>
    <div class="container-fluid a-hero">
      <div class="row">
        <div class="container py-5">
          <div class="d-flex flex-column flex-md-row col-12 col-lg-8 mx-auto">
            <div class="flex-shrink-0 mx-auto a-image">
              <img
                src="https://randomuser.me/api/portraits/women/29.jpg"
                class="rounded-circle"
                alt="..."
              />
            </div>
            <div class="flex-grow-1 pt-2 ms-3">
              <div
                class="
                  d-flex
                  align-items-center
                  justify-content-center justify-content-md-start
                  mb-0
                "
              >
                <span class="me-2 fs-4">Alemnew Marie</span>
                <button class="btn btn-sm btn-secondary follow">Follow</button>
              </div>
              <p class="text-md-start text-center">
                Fullstack Django developer
              </p>
              <div class="text-muted mt-2 mx-auto">
                <span>26k Followers</span><span class="dot"></span>
                <span>163 Following</span> <span class="dot"></span>
                <a href="#" class="ms-1 text-secondary">About</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-3 my-4">
      <!-- Author posts -->
      <div class="col-12 col-lg-7 mx-auto">
        <div class="p-image">
          <img src="http://placehold.jp/1200x630.png" alt="" />
        </div>
        <div class="pt-4 mb-3">
          <div class="d-flex flex-column">
            <router-link
              :to="{ name: 'post-detail' }"
              class="mb-2 lh-sm post-title"
              >How to validate forms on client side using Vue.js and show errors
              to the user
            </router-link>
            <router-link
              :to="{ name: 'post-detail' }"
              class="card-text mb-2 lh-base post-summary"
            >
              In this post we will see how can we validate a form data and show
              error messages ot the user.
            </router-link>
          </div>
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
              <span>Nov 12</span><span class="dot"></span
              ><span>5 min read</span>
              <span class="d-none d-md-inline dot"></span>
              <a class="d-none d-md-inline category-btn" href="#"
                >Programming</a
              >
            </div>
            <div class="action">
              <button title="Bookmark story">
                <img src="/assets/bookmark-plus.svg" class="icon" alt="" />
              </button>
            </div>
          </div>
        </div>
        <!-- End author post -->
        <hr class="my-4" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style scoped>
.a-hero {
  background: #eae7dc;
}
.a-image {
  width: 100px;
  height: 100px;
}
img {
  width: 100%;
  height: 100%;
}
.follow {
  padding: 2px 10px;
  border-radius: 15px;
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
  .a-image {
    width: 150px;
    height: 150px;
  }
  .p-image {
    height: 350px;
  }
}
</style>