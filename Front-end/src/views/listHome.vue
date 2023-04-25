<script setup>
    import navbar from '../components/header.vue'
    import { ref, reactive, onMounted } from 'vue'
    import { useRoute } from 'vue-router';
    // import Foooter from '../footer.vue'
    import axios from 'axios';
    import router from '../router';
    import foooter from '@/components/footer.vue'
    
    

   const realstates = ref([])
   const user_id = localStorage.getItem('id')
   console.log(user_id);
   const result = ref('')
    const fetchData = () => {
      axios.get('http://127.0.0.1:8000/api/all')
      .then(response => {
        // if (response.data.user_id === localStorage.getItem('id')) {
          realstates.value = response.data
          console.log(response)

        // }
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
        <!-- <div v-for="realstate in realstates"  >
          <div v-if="realstate.user_id == user_id" class="w-[250px] h-[360px] bg-blue-300">
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
                  <router-link :to="{name: 'updateRealstate', params:{ id: realstate.id} }">
                    <button class="bg-green-500 w-24  text-white px-4 py-3 rounded-lg  hover:bg-green-400">edit</button>
                  </router-link>
                    <button @click="deleteData(realstate.id)" class="bg-red-500 w-24  text-white px-4 py-3 rounded-lg  hover:bg-red-400">delete</button>
                </div>
          </div>
        </div> -->


        <div v-for="realstate in realstates" :key="realstate.id" class=" bg-gray-100 flex items-center">
          <div v-if="realstate.user_id == user_id" class="container h-[388px] w-[322px] mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
            <img class="rounded-xl w-[250px] h-[200px]" :src="`http://localhost:8000/storage/${realstate.image}`" alt="realstate" />
            <div class="flex justify-between items-center">
              <div>
                <h1 class="mt-5 text-2xl font-semibold">{{realstate.titre}}</h1>
                <p class="mt-2">${{ realstate.price }}</p>
                <p class="mt-2">${{ realstate.street }}</p>
              </div>
              <div class="flex flex-col gap-2 gap-3">
                <router-link :to="{name: 'updateRealstate', params:{ id: realstate.id} }">
                  <button class="text-white w-[82px] text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">edit</button>
                </router-link>
                  <button @click="deleteData(realstate.id)" class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">delete</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <foooter />
</template>