<template>
  <div class="regis-page">
    <h1>If You Are Not A User Please Register ...</h1>
    <div class="container">
      <form @submit.prevent="register">
        <input
          class="register-form-name"
          type="text"
          v-model="FullName"
          placeholder="Full Name"
        />
        <input
          class="register-form-email"
          type="text"
          v-model="email"
          placeholder="Email"
        />
        <input
          class="register-form-password"
          type="text"
          v-model="password"
          placeholder="Password"
        />
        <div>
          <button id="register-btn" type="submit">Register</button>
        </div>
      </form>
    </div>
    <div v-if="users">Welcome {{ users.FullName }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      FullName: "",
      email: "",
      password: "",
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    register() {
      return this.$store.dispatch("register", {
        FullName: this.FullName,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
<style scoped>
h1 {
  display: flex;
  justify-content: center;
  padding-top: 100px;
}
.regis-page {
  height: 80vh;
}

.container {
  margin: auto;
  padding: auto;
  width: 350px;
  height: 390px;
  background-color: rgba(167, 165, 196, 0.3);
  backdrop-filter: blur(3px);
  border: 2px solid white;
  border-radius: 10px;
  background-clip: padding-box;
}

.register-form-email {
  margin: 35px;
  border: 0;
  outline: 0;
  border-bottom: 2px solid white;
  width: 50%;
  font-size: 20px;
  background: transparent;
  color: white;
}

.register-form-password {
  margin: 35px;
  border: 0;
  outline: 0;
  border-bottom: 2px solid white;
  width: 50%;
  font-size: 20px;
  background: transparent;
  color: white;
}

.register-form-name {
  margin: 35px;
  border: 0;
  outline: 0;
  border-bottom: 2px solid white;
  width: 50%;
  font-size: 20px;
  background: transparent;
  color: white;
}

#register-btn {
  margin: 35px;
  background: transparent;
  border: none;
  font-weight: bolder;
  font-size: 20px;
}
</style>
