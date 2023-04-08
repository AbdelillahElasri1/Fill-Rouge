<script setup>
  import {useRouter} from 'vue-router'
  import SellForm from '../components/SellView/sell.vue'

  const router = useRouter()
  const logout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }
</script>
<template>
  <div class="flex justify-center mt-8">
      <SellForm />
  </div>
</template>

<style>
  
</style>
