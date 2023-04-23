<script setup>
    import axios from 'axios'
    import { onMounted, reactive, ref } from 'vue'
    import { useRoute } from 'vue-router'
    import Foooter from '../footer.vue'
    import router from '../../router';
    import { useRealstate } from '@/stores/realstate'
    import swal from 'sweetalert2';
    window.Swal = swal;

    const realstateStore = useRealstate()


    
    
    let FILE = ref('')
    let titre = ''
    let price = ''
    let street = ''
     const showAlert = () => {
      // Use sweetalert2
      // Use sweetalert2
        swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'YOUR REAL ESTATE IS ADDED SUCCESSFULLY',
            showConfirmButton: false,
            timer: 1500
        })
    }
    const cancelAlert = () => {
        swal.fire({
        icon: 'error',
        title: 'Cancel',
        text: 'Something went wrong!',
        // footer: '<a href="">Why do I have this issue?</a>'
    })
    }
    const backToHome = () => {
        swal.fire({
        icon: 'error',
        title: 'Cancel',
        text: 'Something went wrong!',
        })
        setTimeout(() =>router.push('/'), '1000' )
        
    }
   
   


    let onFileUpload =  (event) => {
          FILE = event.target.files[0]
        }
    let onSubmit = () => {
        // upload file
        const formData = new FormData()
        formData.append('image', FILE, FILE.name)
        formData.append('image1', FILE, FILE.name)
        formData.append('image2', FILE, FILE.name)
        formData.append('image3', FILE, FILE.name)
        formData.append('titre', titre)
        formData.append('price', price)
        formData.append('street', street)
        console.log(formData);
        axios.post('http://127.0.0.1:8000/api/add', formData, {
        }).then((res) => {
            console.log(res)
            router.push('/')
        })
        }  
    
    // onMounted(() => {
    //     showAlert();
    // });
</script>
<template>
    <div class=" flex items-center justify-center relative">
        <form @submit.prevent="onSubmit">
        <div class="flex flex-col gap-6 ">
            <div>
                <h1 class="text-5xl p-4 text-center font-bold from-blue-600 via-blue-400 to-blue-900 bg-gradient-to-r bg-clip-text text-transparent">Listing your home</h1>
            </div>
            <div class="flex gap-8">
                <div class="flex flex-col gap-2">
                    <label for="">Titre</label>
                    <input type="text" required v-model="titre" class="flex-auto p-4 block  rounded-lg font-medium outline-none border focus:border-green-500 focus:text-green-500" name="" id="" placeholder="House">
                </div>
                <div class="flex flex-col gap-2">
                    <label for="">Price</label>
                    <input type="number" required v-model="price" class="flex-auto p-4 block  rounded-lg font-medium outline-none border focus:border-green-500 focus:text-green-500" name="" id="" placeholder="$">
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <label for="">Street</label>
                <input type="text" required v-model="street" class="flex-auto p-4 block  rounded-lg font-medium outline-none border focus:border-green-500 focus:text-green-500" name="" id="" placeholder="600 Silliman St San Francisco, CA 94134">
            </div>
            <div class="flex flex-col gap-2"> 
                <label for="">photo</label>
                <input type="file" required @change="onFileUpload" class="flex-auto p-4 block  rounded-lg font-medium outline-none border focus:border-green-500 focus:text-green-500" name="" id="" placeholder="New york">
            </div>
            <div class="flex flex-col gap-2"> 
                <!-- <label for="">photo</label> -->
                <input type="file"  @change="onFileUpload" class="flex-auto p-4 block  rounded-lg font-medium outline-none border focus:border-green-500 focus:text-green-500" name="" id="" placeholder="New york">
            </div>
            <div class="flex flex-col gap-2"> 
                <!-- <label for="">photo</label> -->
                <input type="file"  @change="onFileUpload" class="flex-auto p-4 block  rounded-lg font-medium outline-none border focus:border-green-500 focus:text-green-500" name="" id="" placeholder="New york">
            </div>
            <div class="flex flex-col gap-2"> 
                <!-- <label for="">photo</label> -->
                <input type="file"  @change="onFileUpload" class="flex-auto p-4 block  rounded-lg font-medium outline-none border focus:border-green-500 focus:text-green-500" name="" id="" placeholder="New york">
            </div>
            
            <!-- <div class="extraOutline p-4 bg-white w-max bg-whtie m-auto rounded-lg">
                <div class="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg" style="width: 450px">
                    <svg class="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                    <div class="input_field flex flex-col w-max mx-auto text-center">
                        <label>
                          <input required  class="text-sm cursor-pointer w-36 hidden" type="file" @change="onFileUpload" multiple />
                            <div class="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Select</div>
                        </label>
    
                        <div class="title text-indigo-500 uppercase">or drop files here</div>
                    </div>
                </div>
            </div> -->
            <div class="flex gap-8">
                <button @click="showAlert()" type="submit" value="addRealstate" class="bg-green-500 w-full font-medium text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-400">Submit</button>
                <div class="mt-4"></div>
                <button @click="backToHome" class="w-full font-medium text-green-500 px-4 py-3 rounded-lg border-2 border-green-500 hover:bg-green-400 hover:text-white hover:shadow-xl transition-all duration-500">Cancel</button>
            </div>
            <!-- <Foooter /> -->
        </div>
    </form>
</div>
    
</template>