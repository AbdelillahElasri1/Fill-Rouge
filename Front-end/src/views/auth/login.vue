
<script setup>
    import { reactive, ref } from 'vue'
    import axios from 'axios'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    
    let form = reactive({
        email: '',
        password: '',
        error: '',
    })
    
    const login = async() =>{
        await axios.post('http://127.0.0.1:8000/api/login', form)
        .then(response =>{
            console.log(response);
            
            if (response.data.success) {
                localStorage.setItem('token', response.data.data.token)
                if((response.data.user.role) == 0){
                    router.push('/')
                } else {
                    router.push('/about')
                }
            } else {
                error.value = response.data.message;
            }
        })
    } 
</script>

<template>
    <div class="bg-blue-400 h-screen w-screen">
        <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
            <div class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style="height: 500px">
                <div class="flex flex-col w-full md:w-1/2 p-4">
                    <div class="flex flex-col flex-1 justify-center mb-8">
                        <h1 class="text-4xl text-center font-thin">Welcome Back</h1>
                        <div class="w-full mt-4">
                            <form @submit.prevent="login" class="form-horizontal w-3/4 mx-auto" >
                                <div class="flex flex-col mt-4">
                                    <input id="email" required v-model="form.email" type="text" class="flex-grow h-8 px-2 border rounded border-grey-400" name="email" placeholder="Email">
                                    
                                </div>
                                <div class="flex flex-col mt-4">
                                    <input id="password" required v-model="form.password" type="password" class="flex-grow h-8 px-2 rounded border border-grey-400" name="password"  placeholder="Password">
                                </div>
                                <div class="flex items-center mt-4">
                                    <input type="checkbox" required name="remember" id="remember" class="mr-2"> <label for="remember" class="text-sm text-grey-dark">Remember Me</label>
                                </div>
                                <div class="flex flex-col mt-8">
                                    <button type="submit" value="login" class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                        Login
                                    </button>
                                </div>
                                <div class="text-center mt-4">
                                    don't have a account
                                    <a class="no-underline hover:underline text-blue-dark text-xs" href="/register">
                                        Create one
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block md:w-1/2 rounded-r-lg" style="background-image: url('https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80'); background-size: cover; background-position: center center;"></div>
            </div>
        </div>
    </div>

</template>