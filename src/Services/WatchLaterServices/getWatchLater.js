import axios from 'axios'

export const getWatchLater=token=>{
    return axios.get("/api/user/watchlater",{
        headers:{authorization:token},
    })

}