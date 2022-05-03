import {createContext,useReducer,useContext,useEffect} from 'react'
import {useAuth} from './index'
import {PlaylistReducer} from '../reducers/PlaylistReducer'
import { getAllPlaylists } from '../Services/ServiceExport'
import { UPDATE_PLAYLISTS } from '../reducers/constants'

const PlaylistContext=createContext()

const usePlaylist=()=>useContext(PlaylistContext)


const PlaylistProvider=({children})=>{
    const {
        auth:{isAuthenticated,token}
    }=useAuth();

    const [playlistState,playlistDispatch]=useReducer(PlaylistReducer,{
        playlists:[]
    })
    useEffect(()=>{
        if(isAuthenticated){
        (async()=>{
            try{
                const response=await getAllPlaylists(token)
                if(response.status===200){

                    const playlists=response.data.playlists;
                   
                    playlistDispatch({type:UPDATE_PLAYLISTS ,payload:playlists})
                }
                
            }
            catch(err){
                  console.log(err)
            }
           
        })()
    }else{
        playlistDispatch({type:UPDATE_PLAYLISTS,payload:[]})
    }
        
       
    },[isAuthenticated,token])

    return(
        <PlaylistContext.Provider value={{playlistState,playlistDispatch}}>
            {children}
        </PlaylistContext.Provider>
    )

}

export {PlaylistProvider,usePlaylist}