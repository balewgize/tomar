<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <form @submit.prevent="onSubmit">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  v-model="v$.form.email.$model"
                />
                <label for="floatingInput">Email address</label>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.email.$errors"
                  :key="index"
                >
                  <p class="error-msg">{{ error.$message }}</p>
                </div>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  v-model="v$.form.password.$model"
                />
                <label for="floatingPassword">Password</label>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.password.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
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
                  class="btn btn-primary btn-login fw-bold"
                  type="submit"
                  :disabled="v$.form.$invalid"
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
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
  name: "LoginForm",
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async onSubmit() {
      const isFormValid = await this.v$.$validate();
      if (!isFormValid) return;
      // tell the backend to authenticate the user
    },
  },

  validations() {
    return {
      form: {
        email: { required, email },
        password: { required, min: minLength(6) },
      },
    };
  },
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
.error-msg {
  color: red;
}
</style>
