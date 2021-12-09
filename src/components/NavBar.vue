<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white fixed-top mynav"
    aria-label="My nav bar"
  >
    <div class="container">
      <router-link :to="{ name: 'home' }" class="navbar-brand"
        >Tomar</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navLinks"
        aria-controls="navLinks"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navLinks">
        <ul class="navbar-nav ms-auto mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Write</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Authors</a>
          </li>
          <!-- If not authenticated -->
          <li class="nav-item">
            <router-link :to="{ name: 'login' }" class="nav-link"
              >Sign in</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'register' }" class="nav-link" id="signup"
              >Get Started</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
.mynav {
  box-shadow: 0 2px 2px -1px rgba(22, 16, 16, 0.2);
  padding: 12px;
}
.navbar-brand {
  font-weight: 500;
}
#navLinks ul {
  display: flex;
  align-items: center;
}
#navLinks ul li {
  margin-left: 15px;
  font-size: 1.1rem;
}
#signup {
  border-radius: 30px;
  padding: 8px 20px;
  color: #fff;
  background-color: #0078f0;
}
</style>
