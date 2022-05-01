import axios from 'axios'

export const getLikes=token=>{
    return axios.get('/api/user/likes',{
        headers:{authorization:token},
    })
}