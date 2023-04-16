<script setup>
    import { ref, reactive, onMounted } from 'vue'
    import Foooter from '../footer.vue'
    import axios from 'axios';
    import { useRouter } from 'vue-router'
    const router = useRouter()
   const realstates = ref([])
   const keyword = ref(null)
    const fetchData = () => {
      axios.get('http://127.0.0.1:8000/api/all')
      .then(response => {
        realstates.value = response.data
        console.log(response)
      })
      .catch((error) => console.log(error))
    }
    const getResults = () => {
            axios.get('http://127.0.0.1:8000/api/search', { params: { keyword: this.keyword } })
                .then(response => this.realstates = response.data)
                .catch(error => {});
        }
    onMounted(() => {
      fetchData()
    })
    function show(id){
        router.push('/show/'+id+'')
    }
   

    


    
</script>
<template>
    <div class="flex gap-6 flex-wrap text-left bg-white justify-center m-8 p-4 w-2/3 scrollbar-hide overflow-y-scroll h-[900px]">
      <!-- card 1 -->
        <div v-for="realstate in realstates" class="w-[250px] h-[300px]">
          <div>
            <img :src="`http://localhost:8000/storage/${realstate.image}`" class="w-[250px] h-[200px]" alt="">
          </div>
          <div>
            <strong class="pl-4">{{ realstate.price }}</strong>
          </div>
          <div>
            <!-- <router-link :to="{name: 'show', params:{ id: realstate.id} }"> -->
              
              <p @click="show(realstate.id)" class="pl-4">{{realstate.titre}}</p>
            
            <!-- </router-link> -->
          </div>
          <div>
            <p class="pl-4">{{realstate.street}}</p>
          </div>
        </div>
        
        <!-- pagination start -->

        <nav aria-label="Page navigation example" class="flex justify-center mb-6">
          <ul class="inline-flex -space-x-px">
            <li>
              <a href="#" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
              <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
              <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
              <a href="#" aria-current="page" class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
              <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
              <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
              <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
          </ul>
        </nav>
        <!-- <Foooter /> -->
    </div>
</template>