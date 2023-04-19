<script setup>
    import navbar from '../header.vue'
    import axios from 'axios'
    import { ref, reactive, onMounted, computed } from 'vue'
    import { useRoute } from 'vue-router'
    import { useRealstate } from '@/stores/realstate'

    const realstateStore = useRealstate() 

    const route = useRoute();

    // const id = ref('');

    const realstate = ref([])
    const getRealstate = async () => {
        const id = route.params.id
        let response = await axios.get(`http://127.0.0.1:8000/api/getRealstate/`+ id)
        console.log(response);
        realstateStore.realstateShow = response.data
        console.log(realstateStore.realstateShow.image)
    }

    

    onMounted(() => {
      getRealstate();
      realstateStore.fetchData()
    })

</script>
<template>
    <navbar />
    <div class="flex gap-12 mt-4 justify-evenly">
        <!-- photos -->
            <div class="carousel rounded-box w-[53%] h-96 ">
              <div class="carousel-item">
                <img class="w-[100%]" :src="`http://localhost:8000/storage/${realstateStore.realstateShow.image}`" alt="Burger" />
              </div> 
              <div class="carousel-item">
                <img class="w-[100%]" :src="`http://localhost:8000/storage/${realstateStore.realstateShow.image1}`" alt="Burger" />
              </div> 
              <div class="carousel-item">
                <img class="w-[100%]" :src="`http://localhost:8000/storage/${realstateStore.realstateShow.image2}`" alt="Burger" />
              </div> 
              <div class="carousel-item">
                <img class="w-[100%]" :src="`http://localhost:8000/storage/${realstateStore.realstateShow.image3}`" alt="Burger" />
              </div> 
              <div class="carousel-item">
                <img class="w-[100%]" src="https://github.com/kenvantruong/real-estate/blob/master/img-houses/7.png?raw=true" alt="Burger" />
              </div> 
              <div class="carousel-item">
                <img class="w-[100%]" src="https://github.com/kenvantruong/real-estate/blob/master/img-houses/8.png?raw=true" alt="Burger" />
              </div> 
              <div class="carousel-item">
                <img class="w-[100%]" src="https://github.com/kenvantruong/real-estate/blob/master/img-houses/5.png?raw=true" alt="Burger" />
              </div>
            </div>
        <!-- text button -->
        <div class="flex flex-col scrollbar-hide overflow-y-scroll  h-96">
            <div class="flex gap-4">
                <div class="flex gap-1 text-blue-500">
                    <span class="material-symbols-outlined text-4xl">
                        villa
                    </span>
                    <strong class="text-4xl text-blue-500 text-center">Realstate</strong>
                </div>
                <div>
                    <ul class="flex gap-4 text-blue-500">
                            <div class="flex gap-1">
                                <span class="material-symbols-outlined">
                                    bookmark
                                </span>
                                <li>Save</li>
                            </div>
                            <div class="flex gap-1">
                                <span class="material-symbols-outlined">
                                share
                                </span>
                                <li>Share</li>
                            </div>
                             <div class="flex gap-1">
                                <span class="material-symbols-outlined">
                                    do_not_disturb_on
                                </span>
                                 <li>Hide</li>
                             </div>
                             <div class="flex gap-1">
                                 <span class="material-symbols-outlined">
                                    expand_circle_down
                                </span>
                                 <li>more</li>
                             </div>
                            
                        
                    </ul>
                </div>
            </div>
            <div class="flex flex-col gap-4 mt-4 ">
                <div>
                    <p><strong class="text-2xl text-black">$269,0003</strong> bd2 | ba1 | 342 , {{ realstateStore.realstateShow.titre }}</p>
                </div>
                <div>
                    <p><strong class="text-xl">Street :</strong> <span class="text-base">{{realstateStore.realstateShow.street}}</span></p>
                </div>
                <div>
                    <p><strong class="text-xl">Est. payment :</strong> <span class="text-base">{{ realstateStore.realstateShow.price }}</span> </p>
                </div>
            </div>
            <div class=" mt-6">
                <ul class="flex gap-4 justify-between">
                    <li>
                        <button class="bg-blue-500 w-[300px] h-[60px] rounded hover:bg-blue-700">
                            <div>
                                <p class="text-xl text-white">Request a tour</p>
                                    <span class="text-white">as early as today at 11:00 am</span>
                            </div>
                            
                        </button>
                    </li>
                    <li>
                        <button class="bg-white text-blue-500 border-solid border border-blue-500 w-[152px] h-[60px] rounded hover:bg-blue-500 hover:text-white">
                            Contact Agence
                        </button>
                    </li>
                </ul>
            </div>
            <div class="overview mt-4">
                <div>
                    <hr>
                    <p class="text-2xl my-3">Overview :</p>
                    <hr>
                </div>
                <div class="w-[500px]">
                    <p class="">JUST LISTED! Updated 3 bed, 2 bath home in NW OKC's Northridge addition. Updates include fresh interior & exterior paint, refinished hardwood floors, new kitchen tile floors, new stainless steel appliances, granite kitchen countertops, LED lighting, new bedroom carpet, quartz top bathroom vanities & remodeled master shower w/ rain showerhead & sliding glass doors, new fixtures & hardware, 2" white fauxwood blinds, & more! Features include TWO fireplaces: one in living room & one in master suite, large wet bar area w/ sink & quartz counter tops, 2x separate closets in master bath, built-in desk & bookshelves in secondary bedroom, covered backyard deck w/ fans & prewired electric outlets, & privacy wood fence all around. This home is conveniently located just south of NW Expressway by N Council Rd & has quick access to the John Kilpatrick Turnpike. Schedule your showing today before this beautiful home is sold!</p>
                </div>
            </div>
        </div>
    </div>
</template>