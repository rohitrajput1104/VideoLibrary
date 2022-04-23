
import React from 'react'
import "./VideoCard.css"

const VideoCard=({video})=>{
    return(
        <>
        <div className="video-card-container">
    <div className="video-info">
      <div className="video-thumbnail">
        <img src={`https://i.ytimg.com/vi/${video.id}/hq720.jpg`} alt="thumbnail" ></img>
      </div>
      
        <div className="video-flex">
                <div className="creator-profile-avatar">
                    <img src={` https://yt3.ggpht.com/ytc/${video.creatorProfile}`}alt="avatar" class="avatar"/>
            </div>
                <div className="video-title">
                    <span>{video.title}</span>
                </div>
                <div className='nav-to-items'>
                <span className="material-icons">more_vert</span>

                </div>
        </div>
        <div className="video-creator-name"> 
              <span>{video.creator}</span>
            </div>
          <div className="video-date-and-views">
            <div className="video-views">
                    <span>{video.views}  views</span>
                    <span> •</span>
              </div>
              <div className="video-date">
                <span> {new Date(video.uploaded).toDateString().slice(4)} </span>
                
              </div>
              
            </div>
            
        
     </div>

      
    </div>
      
    
  
        </>

    )
}
export {VideoCard}