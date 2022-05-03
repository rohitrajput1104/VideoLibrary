import React,{useReducer} from 'react'
import { useVideo } from '../../Context'
import { VideoCard } from './Components/VideoCard'
import { Filters } from './Components/filters'
import {filterReducer} from '../../reducers/filterReducer'
import { Navbar } from '../../Components/Navbar/Navbar'

import { getCategoryFilteredVideos,getSortedFilteredVideos,getSearchedFilteredVideos } from '../../utils/filterFunctions'
const Home=()=>{
    const {videos}=useVideo()

    const [filtersState,filterDispatch]=useReducer(filterReducer,{
        sortBy:"VIEWS",
        category:"ALL",
        searchTerm:"",
    })
    const {sortBy,category,searchTerm}=filtersState
    const categoryFilteredVideos=getCategoryFilteredVideos(videos,category)
    const sortedVideos=getSortedFilteredVideos(categoryFilteredVideos,sortBy)
    const searchedVideos=getSearchedFilteredVideos(sortedVideos,searchTerm)
    return(
        <>
        <Navbar filterDispatch={filterDispatch}/>
        <Filters filtersState={filtersState} filterDispatch={filterDispatch}/>
       
        
        <div>
            <div className='video-grid-container'>
        {searchedVideos.map((video)=>(
            <VideoCard key={video.id} video={video} />

        ))}
        </div>
        </div>
        </>

    )
}
export {Home}