<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <form>
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

              <div class="form-check mb-3" id="forgot">
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberPasswordCheck"
                  />
                  <label class="form-check-label" for="rememberPasswordCheck">
                    Remember password
                  </label>
                </div>
                <a href="#">Forgot password?</a>
              </div>
              <div class="d-grid">
                <button
                  class="btn btn-primary btn-login  fw-bold"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
              <hr class="my-4" />
              <div>
                Don't have an account? &nbsp;
                <router-link to="/register"> Register</router-link>
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
  name: "LoginForm",
};
</script>

<style scoped>
.btn-login {
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}
#forgot {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#forgot a {
    text-decoration: none;
}
#forgot a:hover {
    text-decoration: underline;
}
</style>
