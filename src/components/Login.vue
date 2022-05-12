<template>
  <main class="form-signin">
    <form>
      <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      <div v-if="errorMsg" class="text-danger">{{errorMsg}}</div>
      <div class="form-floating">
        <input type="text" class="form-control" v-model="user.username" id="floatingInput" placeholder="username">
        <label for="floatingInput">Username</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" v-model="user.password" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="button" @click="signIn()" :disabled="loading">
        Sign in
        <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      </button>
      <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
    </form>
  </main>
</template>

<script>
import api from "../services/api";

export default {
  name: 'Login',
  data: function () {
    return {
      user: {
        username: '',
        password: ''
      },
      errorMsg: '',
      loading: false
    }
  },
  methods: {
    signIn() {
      this.loading = true
      let vue_context = this
      this.axios.post(api.sign_in, this.user).then((response) => {
        this.errorMsg = ''
        this.setAxiosToken(response)
        this.successRedirect()
      }).catch(function (error) {
        vue_context.errorMsg = error.response.statusText
      }).then(() => this.loading = false)
    },
    setAxiosToken(response) {
      let token = response.data.access
      this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
      this.$store.commit('setToken', token)
    },
    successRedirect() {
      let redirect = decodeURIComponent(this.$route.query.redirect || '/');
      this.$router.push({
        path: redirect
      })
    }
  }
}
</script>

<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>