import {createContext,useContext,useState,useEffect} from 'react'
import toast from 'react-hot-toast'
import {getHistory,addHistory,removeHistory,clearHistory} from '../Services/ServiceExport'
import { useAuth } from './AuthContext';

const HistoryContext=createContext();

const useHistory =()=>useContext(HistoryContext);

const HistoryProvider=({children})=>{
    const[historyVideos,setHistoryVideos]=useState([])

    const {auth:{isAuthenticated,token}}=useAuth();

    useEffect(()=>{
        if(isAuthenticated){
        (async()=>{
            try{
                const response=await getHistory(token);
               
                if(response.status===200){
                    const  history=response.data.history
                    setHistoryVideos(history)
                }
            }
            catch(err){
                console.log(err)
            }
            
        })()
    }else{
        setHistoryVideos([])
    }
    },[isAuthenticated,token])

const addToHistoryVideos=async video=>{
    try{
        const response=await addHistory(token,video)
        setHistoryVideos(response.data.history)
    }
    catch(err){
        console.log(err)
    }
}
const removeFromHistoryVideos=async video=>{
    try{
        const response=await removeHistory(token,video)
        setHistoryVideos(response.data.history)
        toast("video removed fro history")
    }
    catch(err){
        console.log(err)
    }

}

const clearHistoryVideos=async()=>{
    try{
        const response=await clearHistory(token)
        setHistoryVideos(response.data.history)
        toast("cleared history")
    }
    catch(err){
        console.log(err)
    }

}



  
    return(
        <HistoryContext.Provider value={{historyVideos,setHistoryVideos,addToHistoryVideos,clearHistoryVideos,removeFromHistoryVideos}}>
            {children}
        </HistoryContext.Provider>
    )
}
export {HistoryProvider,useHistory}