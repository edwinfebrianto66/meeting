<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl">
      <h2 class="text-2xl font-bold text-center text-gray-800">Lupa Password</h2>
      <form @submit.prevent="handleForgotPassword" class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Masukkan email kamu"
          class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Kirim Link Reset
        </button>
        <p class="text-sm text-center">
          <router-link to="/login" class="text-indigo-600 hover:underline">
            Kembali ke Login
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

async function handleForgotPassword() {
  try {
    const response = await fetch('http://localhost:4002/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value })
    })

    const result = await response.json()

    if (response.ok) {
      alert(result.message || 'Jika email terdaftar, link reset telah dikirim.')
    } else {
      alert(result.message || 'Terjadi kesalahan.')
    }
  } catch (error) {
    console.error(error)
    alert('Gagal menghubungi server. Pastikan backend Python aktif di port 4002.')
  }
}
</script>
