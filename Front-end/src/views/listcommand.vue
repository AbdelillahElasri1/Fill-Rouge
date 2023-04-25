<script setup>
    import headerr from '@/components/header.vue'
    import foooter from '@/components/footer.vue'
    import { ref, reactive, onMounted } from 'vue'
    import { useRealstate } from '@/stores/realstate'
    import axios from 'axios'


    const realstateStore = useRealstate()
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
    <headerr />
    <div>
        <h1 class="text-5xl p-4 text-center font-bold from-blue-600 via-blue-400 to-blue-900 bg-gradient-to-r bg-clip-text text-transparent">List of command</h1>
    </div>
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
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Action
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
                        </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    <foooter />
</template>