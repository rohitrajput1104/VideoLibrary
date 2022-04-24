const getCategoryFilteredVideos = (videos, newCategory) => {
    if (newCategory === "ALL") return videos;
    else{
      return videos.filter(
      ({ category }) => category.toLowerCase() === newCategory.toLowerCase()
    );
    }
  };
const getSortedFilteredVideos=(videos,sortBy)=>{
    if(sortBy==="LATEST")
        return [...videos].sort(
            (a,b)=>new Date(b.uploaded) - new Date(a.uploaded)
        )
    
    if(sortBy==="OLDEST")
        return [...videos].sort(
            (a,b)=>new Date(a.uploaded) -new Date(b.uploaded)
        )


    
    if(sortBy==="VIEWS")
        return [...videos].sort(
            (a,b)=> b.views -a.views
        )
    return videos
    
}

const getSearchedFilteredVideos=(videos,searchTerm)=>{
   return (videos.filter(
       ({title})=>title.toLowerCase().includes(searchTerm.toLowerCase())
   ))

}

export {getCategoryFilteredVideos,getSearchedFilteredVideos,getSortedFilteredVideos}