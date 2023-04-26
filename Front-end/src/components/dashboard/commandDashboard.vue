<script setup>
	import headerdashboard from '../../components/dashboard/header.vue'
    import sidebardashboard from '../../components/dashboard/sidebar.vue'
    import statistics from '../../components/dashboard/statistics.vue'
    import clientTable from '../../components/dashboard/clientTable.vue'
    import socialtraffic from '../../components/dashboard/socialTraffic.vue'
    import recentactivite from '../../components/dashboard/recentActivite.vue'
    import axios from 'axios'

    import { ref, reactive, onMounted } from 'vue'
    import { useRealstate } from '@/stores/realstate'


    const realstateStore = useRealstate()

    const awesome = ref(true)

    function toggle() {
    awesome.value = !awesome.value
    }

    const deleteData = (id) => {
      axios.delete('http://127.0.0.1:8000/api/suppr/' + id)
      .then(() => {
        realstateStore.fetchCommand();
      });
    }
    
    onMounted(() => {
      realstateStore.fetchCommand()
    })
</script>
  
<template>
	<!-- dashboard start -->
		
<div x-data="setup()" :class="{ 'dark': isDark }">
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      <!-- header start -->
      <headerdashboard />
      <!-- header end -->
      <!-- Sidebar -->
          <sidebardashboard />
      <!-- ./Sidebar -->
    
      <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
    
        <!-- Statistics Cards -->
            <statistics />
        <!-- ./Statistics Cards -->
    
        <div class="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
    
          <!-- Social Traffic -->
            <!-- <socialtraffic /> -->
          <!-- ./Social Traffic -->
    
          <!-- Recent Activities -->
            <!-- <recentactivite /> -->
          <!-- ./Recent Activities -->
        </div>
      
    
        <!-- Client Table -->
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="bg-white border-b">
                      <tr>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          #
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          First Name
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Email
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          created_at
                        </th>
                        <!-- <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            status
                        </th> -->
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Action
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            <button @click="toggle" href="">
                                <svg class="svg-icon w-[30px]" viewBox="0 0 20 20">
                                    <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                                </svg>
                            </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody v-for="commands in realstateStore.command">
                            <tr  class="bg-gray-100 border-b">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ commands.id }}</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {{ commands.firstname }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {{ commands.email }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {{ commands.created_at }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <button @click="deleteData(commands.id)" class="font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">delete</button>
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex gap-2">
                                    <div v-if="awesome">
                                        <p class="text-red-500">pending</p>
                                    </div>
                                    <div v-else>
                                        <p class="text-green-500">valide</p>
                                    </div>
                                </td>
                                
                            </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        <!-- ./Client Table -->
    
            </div>
    </div>
  </div>    

  
	<!-- dashboard end -->
</template>