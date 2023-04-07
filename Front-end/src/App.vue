<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/header.vue'
import navbarbuttom from './components/footer.vue'



</script>


<template>
   <!-- <div>
    <router-link to="/login">Login</router-link>
  </div> -->
  <navbar />
 
  
  
  <RouterView />
  <!-- <navbarbuttom /> -->
</template>

