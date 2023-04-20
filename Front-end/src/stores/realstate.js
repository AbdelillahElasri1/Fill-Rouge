import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'

export const useRealstate = defineStore( "useRealstate",{
    state:  () => ({
        // store data properties
        realstates: [],
        realstateShow: [],
        id:''

    }),
    getters: {
        //

    },
    actions: {
        // methods here
         fetchData (){
            axios.get('http://127.0.0.1:8000/api/all')
            .then(response => {
              this.realstates = response.data
              console.log(response)
            })
            .catch((error) => console.log(error))
          },
    }

})