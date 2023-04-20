<script setup>
    import axios from 'axios'
    import { onMounted, reactive, ref } from 'vue'
    import { useRoute } from 'vue-router'
    import navbar from '@/components/header.vue'
    import Foooter from '../footer.vue'
    import router from '../../router';
    import { useRealstate } from '@/stores/realstate'
    import swal from 'sweetalert2';
    window.Swal = swal;


    const realstateStore = useRealstate()

    const route = useRoute()

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

    
    const id = route.params.id

    const data = ref({
        titre : '',
        price : '',
        street : '',
        image : '',
        image1 : '',
        image2 : '',
        image3 : ''
    });

    const img = ref('');

    let onFileUploadOne =  (event) => {
        data.value.image = event.target.files[0].name
    }
    let onFileUploadTwo =  (event) => {
        data.value.image1 = event.target.files[0].name
    }
    let onFileUploadThree =  (event) => {
        data.value.image2 = event.target.files[0].name
    }
    let onFileUploadFoor =  (event) => {
        data.value.image3 = event.target.files[0].name
    }


    let onSubmit = () => {
        axios.put('http://127.0.0.1:8000/api/edit/'+ id, {
            titre : data.value.titre ,
            price : data.value.price ,
            street : data.value.street ,
            image : data.value.image == '' ? img.value.image : data.value.image,
            image1 : data.value.image1 == '' ? img.value.image1 : data.value.image1,
            image2 : data.value.image2 == '' ? img.value.image2 : data.value.image2,
            image3 : data.value.image3 == '' ? img.value.image3 : data.value.image3,
        })
            .then((res) => {
                console.log(res);
            })
    }


    const getRealstate = async () => {
        let response = await axios.get(`http://127.0.0.1:8000/api/getRealstate/`+ id)
    
        data.value.titre = response.data.titre;
        data.value.price = response.data.price;
        data.value.street = response.data.street;

        img = response.data;
        
        console.log(data.value);
    }


    onMounted (() => {
        realstateStore.fetchData()
        getRealstate();
    });
    
</script>
<template>
        <navbar />
    
        <form @submit.prevent="onSubmit">
        <div class="flex flex-col gap-6 items-center">
            <div>
                <h1 class="text-5xl p-4 text-center font-bold from-blue-600 via-blue-400 to-blue-900 bg-gradient-to-r bg-clip-text text-transparent">Listing your home</h1>
            </div>
            <div c lass="flex gap-8">
                <div class="flex flex-col gap-2">
                    <label for="">Titre</label>
                    <input type="text"  v-model="data.titre" class="flex-auto p-4 block  rounded-lg font-medium outline-none border focus:border-green-500 focus:text-green-500" name="" id="" placeholder="House">
                </div>
                <div class="flex flex-col gap-2">
                    <label for="">Price</label>
                    <input type="number"  v-model="data.price" class="flex-auto p-4 block  rounded-lg font-medium outline-none border focus:border-green-500 focus:text-green-500" name="" id="" placeholder="$">
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <label for="">Street</label>
                <input type="text"  v-model="data.street" class="flex-auto p-4 block  rounded-lg font-medium outline-none border focus:border-green-500 focus:text-green-500" name="" id="" placeholder="600 Silliman St San Francisco, CA 94134">
            </div>
            <div class="flex flex-col gap-2"> 
                <label for="">photo</label>
                <input type="file"  @change="onFileUploadOne" name="image" class="flex-auto p-4 block  rounded-lg font-medium outline-none border focus:border-green-500 focus:text-green-500" id="" placeholder="New york">
            </div>
            <div class="flex flex-col gap-2"> 
                <!-- <label for="">photo</label> -->
                <input type="file"  @change="onFileUploadTwo" name="image1" class="flex-auto p-4 block  rounded-lg font-medium outline-none border focus:border-green-500 focus:text-green-500" id="" placeholder="New york">
            </div>
            <div class="flex flex-col gap-2"> 
                <!-- <label for="">photo</label> -->
                <input type="file"  @change="onFileUploadThree" name="image2" class="flex-auto p-4 block  rounded-lg font-medium outline-none border focus:border-green-500 focus:text-green-500" id="" placeholder="New york">
            </div>
            <div class="flex flex-col gap-2"> 
                <!-- <label for="">photo</label> -->
                <input type="file"  @change="onFileUploadFoor" name="image3" class="flex-auto p-4 block  rounded-lg font-medium outline-none border focus:border-green-500 focus:text-green-500" id="" placeholder="New york">
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
                <button @click="cancelAlert" class="w-full font-medium text-green-500 px-4 py-3 rounded-lg border-2 border-green-500 hover:bg-green-400 hover:text-white hover:shadow-xl transition-all duration-500">Cancel</button>
            </div>
            <!-- <Foooter /> -->
        </div>
    </form>
    
</template>