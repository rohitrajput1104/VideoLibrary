import axios from 'axios'

export const addWatchLater=(token,video)=>{
    return axios.post("/api/user/watchlater",
    {video},
    {headers:{authorization:token}}
    )
}
