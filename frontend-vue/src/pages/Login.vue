<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl">
      <h2 class="text-2xl font-bold text-center">Login</h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <input v-model="email" type="email" placeholder="Email" class="w-full p-3 border rounded-lg" required />
        <input v-model="password" type="password" placeholder="Password" class="w-full p-3 border rounded-lg" required />
        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
        <p class="text-sm text-center">
          Belum punya akun?
          <router-link to="/register" class="text-blue-600 hover:underline">Daftar sekarang</router-link>
        </p>
        <p class="text-sm text-center">
          <router-link to="/forgot-password" class="text-blue-600 hover:underline">Lupa password?</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

async function handleLogin() {
  try {
    const res = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value })
    })
    const data = await res.json()

    if (res.ok) {
      localStorage.setItem('token', data.token)
      alert('Login berhasil!')
      router.push('/')
    } else {
      alert(data.message || 'Login gagal')
    }
  } catch (err) {
    alert('Gagal menghubungi server login.')
    console.error(err)
  }
}
</script>