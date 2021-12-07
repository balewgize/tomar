<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-11 col-md-8 col-lg-6 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">
              Sign up to Tomar
            </h5>
            <form>
              <div class="d-flex">
                <div class="form-floating mb-3 me-2">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">First Name</label>
                </div>
                <div class="form-floating mb-3 ms-2">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Last Name</label>
                </div>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-check mb-3"></div>
              <div class="d-grid">
                <button class="btn btn-primary btn-login fw-bold" type="submit">
                  Sign up
                </button>
              </div>
              <hr class="my-4" />
              <div>
                Already have an account? &nbsp;
                <router-link to="/login"> Sign in</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupForm",
};
</script>

<style scoped>
.btn-login {
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}
</style>
