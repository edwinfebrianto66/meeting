<template>
  <div class="min-h-screen flex items-center justify-center bg-yellow-100">
    <div class="bg-white p-6 rounded-xl shadow-xl w-full max-w-md space-y-4">
      <h2 class="text-2xl font-bold text-center mb-4">Lupa Password</h2>

      <div v-if="!resetForm">
        <input v-model="email" type="email" placeholder="Email" class="w-full p-3 border rounded-lg" />
        <button @click="handleForgot" class="bg-yellow-500 w-full text-white py-2 rounded-lg mt-3 hover:bg-yellow-600">
          Kirim Link Reset
        </button>
      </div>

      <div v-if="resetForm" class="space-y-3">
        <p class="text-center text-green-600 font-medium">Email ditemukan, silakan ganti password</p>
        <input v-model="newPassword" type="password" placeholder="Password Baru" class="w-full p-3 border rounded-lg" />
        <button @click="handleReset" class="bg-green-600 w-full text-white py-2 rounded-lg hover:bg-green-700">
          Simpan Password Baru
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const newPassword = ref('')
const resetForm = ref(false)

async function handleForgot() {
  try {
    const res = await fetch('http://localhost:4002/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value })
    })

    const data = await res.json()
    if (res.ok && data.found) {
      resetForm.value = true
    } else {
      alert(data.message || 'Email tidak ditemukan')
    }
  } catch (err) {
    alert('Gagal menghubungi server')
    console.error(err)
  }
}

async function handleReset() {
  try {
    const res = await fetch('http://localhost:4002/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: newPassword.value
      })
    })

    const data = await res.json()
    if (res.ok) {
      alert(data.message)
      location.href = '/login'
    } else {
      alert(data.message || 'Gagal reset password')
    }
  } catch (err) {
    alert('Gagal menghubungi server')
    console.error(err)
  }
}
</script>