
import {createContext,useContext,useEffect,useState} from 'react'
import { useAuth } from './AuthContext'
import toast from 'react-hot-toast'
import{addWatchLater,getWatchLater,removeWatchLater} from'../Services/ServiceExport'
const WatchLaterContext=createContext()

const useWatchLater=()=>useContext(WatchLaterContext)


const WatchLaterProvider=({children})=>{
    const [watchLaterVideos,setWatchLaterVideos]=useState([])
   
    const {auth:{isAuthenticated,token}}=useAuth();

    useEffect(()=>{
        if(isAuthenticated){
        (async()=>{
            try{
               const response=await getWatchLater(token)
               const watchlater=response.data.watchlater
               setWatchLaterVideos(watchlater)
               
            }
        
            catch(err){
                console.log(err)
            }
        })
    }
        else{
              setWatchLaterVideos([])
            }

       
    },[isAuthenticated,token])
 
   const addToWatchLaterVideos=async video=>{
       try{
           const response=await addWatchLater(token,video)
           
           setWatchLaterVideos(response.data.watchlater)
           toast.success("videos added to watch later")
       }
       catch(err){
           console.log(err)
       }
   }
   const removeFromWatchLaterVideos=async video=>{
       try{
           const response=await removeWatchLater(token,video)
           
           setWatchLaterVideos(response.data.watchlater)
           toast.success("Videos removed from watch later")
       }
       catch(err){
           console.log(err)
       }
   }
    
    return(
       <WatchLaterContext.Provider value={{watchLaterVideos,setWatchLaterVideos,addToWatchLaterVideos,removeFromWatchLaterVideos}}>
           {children}
       </WatchLaterContext.Provider>
    )
}

export {WatchLaterProvider,useWatchLater}