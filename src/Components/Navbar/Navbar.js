import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar=()=>{


        return(
            <>
            <div className='navbar-container'>
                <div className='navbar-wrapper'>
                    <div className='navbar-left'>
                        <div className="nav-item">
                        <NavLink to="/home" className="link-tag">
                        <div className='brand-name'>Ornate Keep</div>
                    
                        </NavLink>
                          
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