import React from 'react'
import './Sidebar.css'
import {useState} from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar=()=>{
    const [isSidebar,setIsSidebar]=useState(false)

    return(
        <>
        <div className={isSidebar ? 'sidebar-container':"sidebar-container hide"}>
            <div className='sidebar-list'>

            <div className='sidebar-arrow'>
            <span onClick={()=>setIsSidebar(isSidebar =>!isSidebar)} className="material-icons-outlined">{isSidebar ? "close":"menu"}</span>
            </div>

            <NavLink to ="/home" className="sidebar-list-items active">
            <span className="material-icons">home</span>
            <span className="sidebar-list-items">Home</span>
           </NavLink>
           <NavLink to="/playlist" className="sidebar-list-items active">
           <span className="material-icons">create_new_folder</span>
           <span className='sidebar-list-items'>Playlist</span>
          </NavLink>
          <NavLink to="/liked" className="sidebar-list-items active">
          <span className="material-icons">thumb_up</span>
          <span className="sidebar-list-items">Liked</span>

          </NavLink>
          <NavLink to="/watchlater" className="sidebar-list-items active"> 
          <span className="material-icons">bookmark</span>
          <span className='sidebar-list-items'>History</span>
         </NavLink>
       
      
      
      
       </div>
    
      </div>
        
        </>
    )


}
export {Sidebar}