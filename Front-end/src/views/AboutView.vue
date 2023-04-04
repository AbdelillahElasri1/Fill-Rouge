<script setup>
  import {useRouter} from 'vue-router'

  const router = useRouter()
  const logout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }
</script>
<template>
  <div class="bg-red-500">
    <h1>This is an about page</h1>
    <button @click="logout">
      Logout
    </button>
  </div>
</template>

<style>
  
</style>
