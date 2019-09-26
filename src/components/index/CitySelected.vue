<template>
    <div>城市</div>
</template>

<script>
// import http from '../../services/api'
import {getCityList} from "@/services/city"
export default {
    data(){
        return {
            cities:[]
        }
    },
    created(){
        // http.get('/api/cityList').then(res=>{
        //     console.log(res)
        // })

        getCityList().then(res=>{
            
        })
        
    }
}
</script>