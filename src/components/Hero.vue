<template>
  <div class="container-fluid hero">
    <div class="container px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-5 mx-auto">
          <img
            src="../assets/hero-image.png"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-7">
          <h1 class="display-4 fw-bold lh-1 mb-3">
            Tomar is a platform to read, write and connect with others
          </h1>
          <p class="lead">
            Read stories and turorials, help others by sharing your ideas and
            build a community that grow together.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <router-link
              :to="{ name: 'register' }"
              class="btn btn-outline-primary btn-lg px-4 me-md-2"
              id="signup"
              >Get Started</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
.hero {
  margin: 0;
  background: #eae7dc;
}
</style>