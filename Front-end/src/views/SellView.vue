<script setup>
  import {useRouter} from 'vue-router'
  import SellForm from '../components/SellView/sell.vue'
  import navbar from '../components/header.vue'
  import foooter from '@/components/footer.vue'

  const router = useRouter()
  const logout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }
</script>
<template>
  <navbar />
  <div class="flex justify-center mt-8">
      <SellForm />
  </div>
  <foooter />
</template>

<style>
  
</style>
