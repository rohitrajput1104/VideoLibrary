import { addPlaylistsVideo } from "../../Services/ServiceExport";
import {UPDATE_SINGLE_PLAYLISTS} from '../../reducers/constants'
import { toast } from "react-toastify";


export const addVideoToPlaylists=async(token,video,playlist,playlistDispatch)=>{
    try{
        const response=await addPlaylistsVideo(token,video,playlist)
        if(response.status===201){
            playlistDispatch({type:UPDATE_SINGLE_PLAYLISTS,payload:response.data.playlist})
        }
        toast.success(`video added to ${playlist.title}`)
    }
    catch(err){
        console.log(err)
    }
}