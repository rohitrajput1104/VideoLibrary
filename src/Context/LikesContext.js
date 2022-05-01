import toast from 'react-hot-toast'
import {createContext,useState,useEffect,useContext} from 'react'
import {getLikes,addLikes,removeLikes} from '../Services/ServiceExport'
import { useAuth } from './AuthContext'

const LikesContext=createContext();
const  useLikes =()=>useContext(LikesContext)


const LikesProvider=({children})=>{
    const[likedVideos,setLikedVideos]=useState([])

    const {
        auth:{isAuthenticated,token}
    }=useAuth();

    useEffect(()=>{
        if(isAuthenticated){
            (async()=>{
                try{
                    const response=await getLikes(video)
                    if(response.status===200){
                        const likes=response.data.likes
                        setLikedVideos(likes)
                    }

                }
                catch(err){
                   console.log(err)
                }
            })
        }
    },[isAuthenticated,token])
   const addToLikedVideos=async video =>{
       try{
           const response=await addLikes(token,video);
           setLikedVideos(response.data.likes)
           toast.success(`video added to likes`)
       }
       catch (err){
           console.log(err)
       }
   }

   const removeFromLikedVideos=async video=>{
    try{
        const response=await removeLikes(token,video)
        
        setLikedVideos(response.data.likes)
        toast.success("Videos removed from likes")
    }
    catch(err){
        console.log(err)
    }
}
 
    return(
        <LikesContext.Provider value={{likedVideos,setLikedVideos,addToLikedVideos,removeFromLikedVideos}}>
            {children}
        </LikesContext.Provider>
    )
}
export {LikesProvider,useLikes}