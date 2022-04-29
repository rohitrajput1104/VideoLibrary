import { removePlaylists } from "../../Services/ServiceExport";
import { UPDATE_PLAYLISTS } from "../../reducers/constants";
import { toast } from "react-toastify";


export const deletePlaylists=async(token,playlist,playlistDispatch)=>{
    try{
          const response =await removePlaylists(token,playlist)
          if(response.status===200){
              playlistDispatch({type:UPDATE_PLAYLISTS,payload:response.data.playlists})
             
            }
            toast(`${playlist.title}playlists is deleted`)
          
    }
    catch(err){
        console.log(err)
    }

}