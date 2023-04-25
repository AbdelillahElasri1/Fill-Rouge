<script setup>
    import { ref, reactive, onMounted } from 'vue'
    import Foooter from '../footer.vue'
    import axios from 'axios';
    import { useRouter } from 'vue-router'
    import { useRealstate } from '@/stores/realstate'

    const router = useRouter()
    
    const realstateStore = useRealstate()

    
    onMounted(() => {
      realstateStore.fetchData()
    })
    
   

    


    
</script>
<template>
    <div class="flex gap-6 flex-wrap text-left bg-white justify-center m-8 p-4 w-2/3 scrollbar-hide overflow-y-scroll h-[900px]">
      <!-- card 1 -->
        <!-- <div v-for="realstate in realstateStore.realstates" :key="realstate.id" class="w-[250px] h-[300px]">
          <div>
            <img :src="`http://localhost:8000/storage/${realstate.image}`" class="w-[250px] h-[200px]" alt="">
          </div>
          <div>
            <strong class="pl-4">${{ realstate.price }}</strong>
          </div>
          <div>
            <router-link :to="{name: 'show', params:{ id: realstate.id} }">
              <p  class="pl-4">{{realstate.titre}}</p>
            
            </router-link>
          </div>
          <div>
            <p class="pl-4">{{realstate.street}}</p>
          </div>
        </div> -->


        <div v-for="realstate in realstateStore.realstates" :key="realstate.id" class=" bg-gray-100 flex items-center">
          <div class="container h-[388px] w-[322px] mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
            <img class="rounded-xl w-[250px] h-[200px]" :src="`http://localhost:8000/storage/${realstate.image}`" alt="realstate" />
            <div class="flex justify-between items-center">
              <div>
                <h1 class="mt-5 text-2xl font-semibold">{{realstate.titre}}</h1>
                <p class="mt-2">${{ realstate.price }}</p>
                <p class="mt-2">${{ realstate.street }}</p>
              </div>
              <div>
                <router-link :to="{name: 'show', params:{ id: realstate.id} }">
                  <button class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">show</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        
        <!-- pagination start -->

        <!-- <nav aria-label="Page navigation example" class="flex justify-center mb-6" v-if="!(realstate.id).length < 10">
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
        </nav> -->
        <!-- <Foooter /> -->
    </div>
</template>