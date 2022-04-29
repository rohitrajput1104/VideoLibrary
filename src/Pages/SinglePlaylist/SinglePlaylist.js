import "./SinglePlaylist.css"
import { useParams } from "react-router-dom"
import { usePlaylist } from "../../Context"
import {SinglePlaylistCard} from './SinglePlaylistCard'

const SinglePlaylist=()=>{
    const {playlistState:{playlists}}=usePlaylist()
    const {playlistID}=useParams();
    const playlist=playlists.find(playlist=>playlist._id===playlistID)
    const {title,videos}=playlist

    return(
        <>
         <div className="single-playlist">
             <header className="playlist-header">
                 <span className="material-icons text-lg">playlist_play</span>
                  {title}
             </header>
             <p >{videos.length}</p>
             <div className="playlist-video-container">
                 {videos.map(video=>(
                     <SinglePlaylistCard playlistTitle={title} playlist={playlist} key={playlistId} video={video} />
                 ))}

             </div>

         </div>
        </>
    )
   


}
export {SinglePlaylist}