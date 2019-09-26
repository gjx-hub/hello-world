import http from './api'

function getCityList(){
    return http.get('/api/cityList')
}
export{
    getCityList
}