<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl">
      <h2 class="text-2xl font-bold text-center">Register</h2>
      <form @submit.prevent="handleRegister" class="space-y-4">
        <input v-model="name" type="text" placeholder="Nama Lengkap" class="w-full p-3 border rounded-lg" required />
        <input v-model="email" type="email" placeholder="Email" class="w-full p-3 border rounded-lg" required />
        <input v-model="password" type="password" placeholder="Password" class="w-full p-3 border rounded-lg" required />
        <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
          Daftar
        </button>
        <p class="text-sm text-center">
          Sudah punya akun?
          <router-link to="/login" class="text-green-600 hover:underline">Login di sini</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
await fetch('http://localhost:4001/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: name.value,
    email: email.value,
    password: password.value
  })
})
.then(res => res.json())
.then(data => {
  alert(data.message || 'Pendaftaran berhasil')
  router.push('/login')
})
</script>