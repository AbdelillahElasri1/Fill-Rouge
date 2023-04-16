<script setup>
    import navbar from '../components/header.vue'
    import { ref, reactive, onMounted } from 'vue'
    import { useRoute } from 'vue-router';
    // import Foooter from '../footer.vue'
    import axios from 'axios';
    import router from '../router';
    
    

   const realstates = ref([])
   const result = ref('')
    const fetchData = () => {
      axios.get('http://127.0.0.1:8000/api/all')
      .then(response => {
        realstates.value = response.data
        console.log(response)
      })
      .catch((error) => console.log(error))
    }
    const deleteData = (id) => {
      axios.delete('http://127.0.0.1:8000/api/delete/' + id)
      .then(() => {
        fetchData();
      });
    }

    onMounted(() => {
      fetchData()
     
    })
   

    
</script>
<template>
  <navbar />
    <div class="flex gap-6 flex-wrap text-left justify-center bg-gray-100  m-8 p-4  ">
        <!-- card 1 -->
          <div v-for="realstate in realstates" class="w-[250px] h-[360px] bg-blue-300">
            <div>
              <img  :src="`http://localhost:8000/storage/${realstate.image}`" class="w-[250px] h-[200px]" alt="">
            </div>
            <div>
              <strong class="pl-4">${{ realstate.price }}</strong>
            </div>
            <div>
              <p class="pl-4">{{realstate.titre}}</p>
            </div>
            <div>
              <p class="pl-4">{{realstate.street}}</p>
            </div>
            <div class="flex gap-8 justify-center mt-2">
                <button class="bg-green-500 w-24  text-white px-4 py-3 rounded-lg  hover:bg-green-400">edit</button>
                <button @click="deleteData(realstate.id)" class="bg-red-500 w-24  text-white px-4 py-3 rounded-lg  hover:bg-red-400">delete</button>
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