import axios from 'axios'

export const getAllPlaylists=(token)=>{
    return axios.get("/api/user/playlists",{
        headers:{authorization:token}
    })
}