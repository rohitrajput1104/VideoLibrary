import {createContext,useState,useEffect,useContext}  from 'react';
import axios from 'axios';
const VideoListingContext=createContext();

const useVideo=()=>useContext(VideoListingContext);


const VideoListingProvider=({children})=>{
    const [videos,setVideos]=useState([])
    const[loader,setLoader]=useState(false)

    useEffect(()=>{
        (async()=>{
            setLoader(true)
            try{
                const response=await axios.get("/api/videos");
                if(response.status===200){
                    const data=response.data.videos;
                    
                    setVideos(data)
                    setLoader(false)
                    console.log(data)
                }
                
            }
            catch(error){
                console.log(error)
            }
        })()

    },[])

    return(
        <VideoListingContext.Provider value={{videos,setVideos,loader}}>
            {children}
        </VideoListingContext.Provider>
    )

}
export {VideoListingProvider,useVideo}