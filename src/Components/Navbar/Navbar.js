import React,{useState} from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { SEARCH_TERM } from '../../reducers/constants'

const Navbar=({filtersState,filterDispatch})=>{
    const [searchInput,setSearchInput]=useState("")

        return(
            <>
            <div className='navbar-container'>
                <div className='navbar-wrapper'>
                    <div className='navbar-left'>
                        <div className="nav-item">
                        <NavLink to="/home" className="link-tag">
                        <div className='brand-name'>Ornate Videos</div>
                    
                        </NavLink>
                          
                        </div>
                       
                    </div>
                    <div className='navbar-center'>
                      <div className='navbar-search'>
                       <input className='search-input' placeholder='search for videos...'  value={searchInput}  onChange={e => {
                     setSearchInput(e.target.value);
                     filterDispatch({ type: SEARCH_TERM, payload: e.target.value });
                    }}
                         />
                      
                      <button className="search-btn">
                         <span className='material-icons-outlined'>search</span>
                        
                      </button>
                       
                       
                   
                      </div>
                  </div>
                    
                    <div className='navbar-right'>
    
                       
                       
                       <div className="nav-item">
                          
                               <NavLink to="/login">
                               <span className="material-icons-outlined">login</span>
                               </NavLink>
                           
    
                       </div>
                    
                       
                        
                 </div>
                </div>
                </div>
                </>
    
        )
    

}

export {Navbar}