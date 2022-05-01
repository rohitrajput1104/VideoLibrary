import React from 'react'
import './Sidebar.css'
import {useState} from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar=()=>{
    const [isSidebar,setIsSidebar]=useState(false)

    return(
        <>
        <div className={isSidebar ? 'sidebar-container hide':"sidebar-container "}>
            <div className='sidebar-list'>

            <div className='sidebar-arrow'>
            <span onClick={()=>setIsSidebar(isSidebar =>!isSidebar)} className="material-icons-outlined">menu</span>
            </div>

            <NavLink to ="/" className="sidebar-list-items active">
            <span className="material-icons">home</span>
            <span className="sidebar-list-items span">Home</span>
           </NavLink>
           <NavLink to="/playlist" className="sidebar-list-items active">
           <span className="material-icons">create_new_folder</span>
           <span className='sidebar-list-items span'>Playlist</span>
          </NavLink>
          <NavLink to="/liked" className="sidebar-list-items active">
          <span className="material-icons">thumb_up</span>
          <span className="sidebar-list-items span">Liked</span>

          </NavLink>
          <NavLink to="/history" className="sidebar-list-items active"> 
          <span className="material-icons">bookmark</span>
          <span className='sidebar-list-items span'>History</span>
         </NavLink>
         <NavLink to="/watchlater" className="sidebar-list-items active"> 
          <span className="material-icons">watch_later</span>
          <span className='sidebar-list-items span'>WatchLater</span>
         </NavLink>
       
      
      
      
       </div>
    
      </div>
        
        </>
    )


}
export {Sidebar}