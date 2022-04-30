import {Link} from 'react-router-dom'
import {useAuth,usePlaylist} from '../../Context/index'
import {removeVideoFromPlaylists} from '../../helpers/PlaylistsHelpers'


const SinglePlaylistCard=({playlistTitle,video,playlist})=>{
    const {_id,title,thumbnail,creator}=video;
    const {auth:{token}}=useAuth();
    const {playlistDispatch}=usePlaylist();

    const removeVideoHandler=(video)=>{
        switch(playlistTitle){
            default:
            return removeVideoFromPlaylists(token,video,playlist,playlistDispatch)
    
        }
    }
    return(
        <>
        <div className='single-playlist-card'>
            <div className='horizontal-playlist-card'>
                <Link to={`/watch/${_id}`} className="img-link">
                    <img className='single-playlist-card-img' src={thumbnail} />
                </Link>
                <button className='single-playlist-card-btn material-icons' onClick={()=>removeVideoHandler(video)}>
                  cancel
                </button>
                <Link className='single-playlist-card-content' to={`/watch/${_id}`}>
                   <div className='single-playlist-card-title'>{title}</div>
                   <div className='single-playlist-card-subtitle'>by {creator}</div>
                
                 </Link>

            </div>

        </div>
        </>

    )
}
export {SinglePlaylistCard}