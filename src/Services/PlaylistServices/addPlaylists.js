import axios from 'axios'


export const addPlaylists=(token,playlistTitle)=>{
    return axios.post("/api/user/playlists",
        {playlist:{title:playlistTitle}},
        {headers:{authorization:token}}
    )



}