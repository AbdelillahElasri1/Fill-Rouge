<script setup>
  import {useRouter} from 'vue-router'

  const router = useRouter()
  const logout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }
</script>
<template>
  <div class="">

  </div>
</template>

<style>
  
</style>
