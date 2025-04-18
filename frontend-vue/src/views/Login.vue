<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input type="text" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p v-if="error" style="color: red">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        const res = await axios.post('http://localhost:4000/login', {
          email: this.email,
          password: this.password
        });
        alert('Login berhasil: ' + res.data.message);
        this.$router.push('/');
      } catch (err) {
        this.error = err.response?.data?.message || 'Login gagal';
      }
    }
  }
};
</script>
