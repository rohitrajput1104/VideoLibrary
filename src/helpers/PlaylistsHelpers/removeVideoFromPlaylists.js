import { removePlaylistsVideo } from "../../Services/ServiceExport";
import { UPDATE_SINGLE_PLAYLISTS } from "../../reducers/constants";
import { toast } from "react-toastify";


export const removeVideoFromPlaylists=async(token,video,playlist,playlistDispatch)=>{
    try{
        const response=await removePlaylistsVideo(token,video,playlist)
        if(response.status===200){
            playlistDispatch({type:UPDATE_SINGLE_PLAYLISTS,payload:response.data.playlist})
           toast(`video removed from ${playlist.title}`)
        }


    }
    catch(err){
        console.log(err)
    }

}
