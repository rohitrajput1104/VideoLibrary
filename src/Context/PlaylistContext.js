import {createContext,useReducer,useContext} from 'react'
import {useAuth} from './index'
import {playlistReducer} from '../reducers/constants'

const PlaylistContext=createContext();

const usePlaylist=()=>useContext(playlistContext)

const PlaylistProvider=({children})=>{
    const {
        auth:{isAuthenticated,token}
    }=useAuth();
   const [playlisyState,playlistDispatch]=useReducer(playlistReducer,{
       playlist:[]
   })
    useEffect(()=>{
        if(isAuthenticated){
            (async () => {
                try{
                    const response=await getAllPlaylist(token)

                    if(response.status===200){
                        const playlists=response.data.playlists;
                        playlistDispatch({type:UPDATE_PLAYLISTS ,payload:playlists})
                    }

                }
                catch(err){
                    console.log(error)
                }
            })
        }
        else{
            playlistDispatch({type:UPDATE_PLAYLISTS,payload:[]})
        }
    },[isAuthenticated,token])
    return(
        <PlaylistContext.Provider value={{}}>
            {children}
        </PlaylistContext.Provider>
    )
}

export {PlaylistProvider,usePlaylist}