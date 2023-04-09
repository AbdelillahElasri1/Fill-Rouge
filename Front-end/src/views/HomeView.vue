<script setup>
    import { reactive, ref, warn } from 'vue'
    import axios from 'axios'
    import { useRouter } from 'vue-router'
    import search from '../components/HomeViews/filter.vue'
    import realStateCard from '../components/HomeViews/realStateCard.vue'
    const router = useRouter()
    let nom = reactive({
      info: ''
    })
    const all = async () => {
      let result = await axios.get('http://127.0.0.1:8000/api/all')
      console.log(result)
    }
</script>


<template>
  <main>
    <!-- components search bar start -->
    <search />
    <!-- components search end -->
    
  <!-- list home bar -->
  <div class="flex justify-between h-[900px] ">     
    <div class="relative w-1/2   ">
      <iframe class="absolute top-0 left-0 w-full h-full "
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
          frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
      </iframe>
  </div>
    <realStateCard />
</div>









 
  </main>
  
</template>
