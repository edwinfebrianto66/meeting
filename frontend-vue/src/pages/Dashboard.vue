<template>
  <div class="min-h-screen flex items-center justify-center bg-green-100">
    <div class="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full text-center">
      <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
      <p class="mb-2 text-xl font-semibold">Halo, {{ name }}</p>
      <p class="mb-4 text-sm text-gray-500">Token:</p>
      <textarea class="w-full p-3 border rounded-lg mb-4 text-xs" rows="5" readonly>{{ token }}</textarea>
      <button @click="logout" class="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { jwtDecode } from 'jwt-decode'

const router = useRouter()
const token = ref('')
const name = ref('')

onMounted(() => {
  token.value = localStorage.getItem('token') || ''
  if (!token.value) {
    router.push('/login')
  } else {
    try {
      const decoded = jwtDecode(token.value)
      name.value = decoded.email || 'User'
    } catch (err) {
      console.error('Invalid token', err)
      name.value = 'User'
    }
  }
})

function logout() {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>