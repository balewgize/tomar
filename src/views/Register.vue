<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-11 col-md-8 col-lg-6 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">
              Sign up to Tomar
            </h5>
            <form @submit.prevent="onSubmit">
              <div class="full-name">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    v-model="v$.form.firstName.$model"
                  />
                  <label for="floatingInput">First Name</label>
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.firstName.$errors"
                    :key="index"
                  >
                    <p class="error-msg">{{ error.$message }}</p>
                  </div>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    v-model="v$.form.lastName.$model"
                  />
                  <label for="floatingInput">Last Name</label>
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.lastName.$errors"
                    :key="index"
                  >
                    <p class="error-msg">{{ error.$message }}</p>
                  </div>
                </div>
              </div>
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
                  <p class="error-msg">{{ error.$message }}</p>
                </div>
              </div>

              <div class="form-check mb-3"></div>
              <div class="d-grid">
                <button
                  class="btn btn-primary btn-login fw-bold"
                  type="submit"
                  :disabled="v$.form.$invalid"
                >
                  Sign up
                </button>
              </div>
              <hr class="my-4" />
              <div>
                Already have an account? &nbsp;
                <router-link :to="{ name: 'login' }"> Sign in</router-link>
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
import { required, email, minLength, maxLength } from "@vuelidate/validators";

export function validName(name) {
  // Custom validator to validate names
  const validNamePattern = new RegExp(/^[a-zA-Z]+$/);
  return validNamePattern.test(name);
}

export default {
  name: "SignupForm",
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async onSubmit() {
      const isFormValid = await this.v$.$validate();
      if (!isFormValid) return;
      // ask the backend to authenticate the user
    },
  },

  validations() {
    return {
      form: {
        firstName: {
          required,
          min: minLength(3),
          max: maxLength(50),
          nameValidation: {
            $validator: validName,
            $message:
              "Please provide a valid name. It can only contain letters.",
          },
        },
        lastName: {
          required,
          min: minLength(3),
          max: maxLength(50),
          name_validation: {
            $validator: validName,
            $message:
              "Please provide a valid name. It can only contain letters.",
          },
        },
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
.error-msg {
  color: red;
}
.full-name {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
