import React,{useState} from 'react'
import "./filters.css"
import { SORT_BY,CATEGORY_NAME,} from '../../../reducers/constants'

const Filters=({filtersState,filterDispatch})=>{


   
     
    return(
        <>
          <div className="filters-container">
              <div className="filter-by-category">
                  <button 
                  className="category-btn"
                  onClick={()=>filterDispatch({type:CATEGORY_NAME ,payload:"ALL"})}
                  >
                      All</button>
                  <button className="category-btn"
                  onClick={()=>filterDispatch({type:CATEGORY_NAME,payload:"YOGA"})}
                  >Yoga</button>
                  <button className="category-btn"
                    onClick={()=>filterDispatch({type:CATEGORY_NAME,payload:"EXERCISE"})}
                  
                  >
                      Exercise</button>
                  <button className="category-btn"
                    onClick={()=>filterDispatch({type:CATEGORY_NAME,payload:"PILATES"})}
                  >Pilates</button>
                  <button className="category-btn"
                    onClick={()=>filterDispatch({type:CATEGORY_NAME,payload:"ZUMBA"})}
                  >Zumba</button>

              </div>
              <div className='filter-by-sort'>
                  <select className="sort-filter" name="sortBy" id="sortBy" onChange={(e)=>filterDispatch({type:SORT_BY ,payload:e.target.value})}>
                  <option classname="sort-option"value="VIEWS">Most Viewed</option>
                  <option  className="sort-option"value="LATEST">Latest</option>
                      <option className='sort-option' value="OLDEST">Oldest</option>
                    
                     


                  </select>
              </div>

          </div>
        </>
    )
}

export {Filters}