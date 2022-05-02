import {Link} from 'react-router-dom'
import {useAuth,usePlaylist,useLikes,useWatchLater} from '../../Context/index'
import {removeVideoFromPlaylists} from '../../helpers/PlaylistsHelpers'
import {useHistory} from '../../Context/HistoryContext'

const SinglePlaylistCard=({playlistTitle,video,playlist})=>{
    const {_id,title,creator}=video;
    const {auth:{token}}=useAuth();
    const {playlistDispatch}=usePlaylist();
    const {removeFromLikedVideos}=useLikes();
    const {removeFromWatchLaterVideos}=useWatchLater()
    const {removeFromHistoryVideos}=useHistory()

    const removeVideoHandler=video=>{
        switch(playlistTitle){
            case "Liked Videos":
                return removeFromLikedVideos(video)
            case "Watch Later":
                return removeFromWatchLaterVideos(video)
            
            case "History Videos":
                return removeFromHistoryVideos(video)
            
            default:
            return removeVideoFromPlaylists(token,video,playlist,playlistDispatch)
    
        }
    }
    return(
       <>
      
       <div className='single-playlist-card'>
           <div className='horizontal-playlist-card'>
           <Link to={`/video/${_id}`} className="link-tag">
               <div className='image-content'>
               <img src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`} ></img>
               </div>
               </Link>
               <Link to={`/video/${_id}`} className="link-tag">
               
               <div className='card-content'>
                   <div className='card-title'>{title}</div>
                   <div className='card-para'> by {creator}</div>
               </div>
               </Link>
               <div className='card-remove-item'>
               <button className='btn-card-icon material-icons' onClick={()=>removeVideoHandler(video)}>delete</button>
               </div>
           </div>

       </div>
       </>
    )
}
export {SinglePlaylistCard}