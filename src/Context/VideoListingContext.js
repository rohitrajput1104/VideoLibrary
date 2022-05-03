import {createContext,useState,useEffect,useContext}  from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
const VideoListingContext=createContext();

const useVideo=()=>useContext(VideoListingContext);


const VideoListingProvider=({children})=>{
    const [videos,setVideos]=useState([])


    useEffect(()=>{
        (async()=>{
            
            try{
                const response=await axios.get("/api/videos");
                if(response.status===200){
                    const data=response.data.videos;
                    
                    setVideos(data)
                    
                    console.log(data)
                
                }
                
            }
            catch(error){
                console.log(error)
            }
        })()

    },[])

    return(
        <VideoListingContext.Provider value={{videos,setVideos}}>
            {children}
        </VideoListingContext.Provider>
    )

}
export {VideoListingProvider,useVideo}