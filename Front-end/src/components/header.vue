<script setup>
    import navbar from '../components/header.vue'
    import { ref, reactive, onMounted } from 'vue'
    import { useRoute } from 'vue-router';
    // import Foooter from '../footer.vue'
    import axios from 'axios';
    import router from '../router';
import { remove } from '@vue/shared';

    const token = ref(localStorage.getItem('token'))

    const logout = () => {
        localStorage.removeItem('token')
        router.push('/login')
    }
</script>
<template>
    <header class="">
        
        <nav class="flex gap-6 items-center justify-between h-[60px] bg-[#5483ef] text-[#fff] align-middle leading-6" >
            <div class="flex gap-10">
                <div class="flex leading-10 pl-[15px] text-base">
                <i class="fas fa-map-pin" style="margin-right: 3px;"></i>
                REAL ESTATE
                </div>
                <div class=" ">
                    <ul class="flex gap-6 align-middle leading-10">
                    <li class=""><a href="/">Buy</a></li>
                    <li class=""><a href="/about">Sell</a></li>
                    <li><a href="/show">Mortgage</a></li>
                    <li>Local Scoop</li>
                    <li>More</li>
                    </ul>
                </div>
            </div>
            <div class="flex gap-10">
                <div class="savedNsearches">
                    <ul class="flex gap-6 leading-10">
                        <li><a href="/savedHome">Saved Homes</a></li>
                        <li><a href="/listhome">List Home</a></li>
                    </ul>
                </div>
                <div v-if="!token" class="mr-8">
                    <router-link to="/login">
                        <button class="flex-1 leading-10 bg-[#fff] text-center rounded-md min-w-[73px] border-black border text-black">Sign In</button>
                    </router-link>
                </div>
                <div v-if="token" class="mr-8">
                        <button @click="logout" class="flex-1 leading-10 bg-[#fff] text-center rounded-md min-w-[73px] border-black border text-black">logout</button>
                </div>
            </div>
        </nav>
        
    </header>
</template>