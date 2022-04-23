import { SORT_BY,CATEGORY_NAME,SEARCH_TERM } from "./constants"

const filterReducer=(state,action)=>{
    switch(action.type){
        case "SORT_BY":
            return {...state,sortBy:action.payload}

        case "CATEGORY_NAME":
            return {...state,category:action.payload}
        
        case "SEARCH_TERM":
            return {...state,searchTerm:action.payload}

        default:
            return state;


    }


}

export {filterReducer}