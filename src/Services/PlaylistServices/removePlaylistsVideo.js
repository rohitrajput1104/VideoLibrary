import axios from 'axios'

export const removePlaylistsVideo=(token,video,playlist)=>{
    return axios.delete(`/api/user/playlists/${playlist._id}/${video._id}`,{

        headers:{authorization:token}
    })
}