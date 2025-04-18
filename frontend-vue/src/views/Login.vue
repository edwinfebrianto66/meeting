<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const res = await axios.post('http://localhost:4000/login', {
          email: this.email,
          password: this.password
        });
        alert('Login success: ' + res.data.message);
        this.$router.push('/');
      } catch (e) {
        alert('Login failed');
      }
    }
  }
};
</script>
