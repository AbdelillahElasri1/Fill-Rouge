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
            title: 'YOUR REAL ESTATE IS update SUCCESSFULLY',
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
            // image : data.value.image == '' ? img.value.image : data.value.image,
            // image1 : data.value.image1 == '' ? img.value.image1 : data.value.image1,
            // image2 : data.value.image2 == '' ? img.value.image2 : data.value.image2,
            // image3 : data.value.image3 == '' ? img.value.image3 : data.value.image3,
            image : data.value.image,
            image1 : data.value.image1,
            image2 : data.value.image2,
            image3 :  data.value.image3,
        })
            .then((res) => {
                console.log(res);
                router.push('/listhome')
                // console.log(route.push('/listhome'));
            })
    }


    const getRealstate = async () => {
        let response = await axios.get(`http://127.0.0.1:8000/api/getRealstate/`+ id)
    
        data.value.titre = response.data.titre;
        data.value.price = response.data.price;
        data.value.street = response.data.street;

        img.value = response.data;
        console.log(img.value.image);
        
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
                <h1 class="text-5xl p-4 text-center font-bold from-blue-600 via-blue-400 to-blue-900 bg-gradient-to-r bg-clip-text text-transparent">Update your home</h1>
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
            <div class="flex gap-8">
                <button @click="showAlert()" type="submit" value="addRealstate" class="bg-green-500 w-full font-medium text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-400">Submit</button>
                <div class="mt-4"></div>
                <button @click="cancelAlert" class="w-full font-medium text-green-500 px-4 py-3 rounded-lg border-2 border-green-500 hover:bg-green-400 hover:text-white hover:shadow-xl transition-all duration-500">Cancel</button>
            </div>
            <!-- <Foooter /> -->
        </div>
    </form>
    
</template>