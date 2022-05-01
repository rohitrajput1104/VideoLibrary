import "../SinglePlaylist/SinglePlaylist.css"
import {SinglePlaylistCard} from "../SinglePlaylist/SinglePlaylistCard";
import { useLikes } from "../../Context";
import { Navbar } from "../../Components/ComponentsExport";
const LikesPage=()=>{
    const {likedVideos}=useLikes();
   
    return(
        <>
        <Navbar />
       <header className="header text-lg">
        <span className="material-icons text-lg">thumb_up</span>
        Liked Videos
      </header>
      <p className="text-sm">{likedVideos.length} videos</p>
      <div className="cards">
        {likedVideos.map(video => (
          <SinglePlaylistCard
            key={video._id}
            playlistTitle="Liked Videos"
            video={video}
          />
        ))}
      </div>
    </>
        
        
    )
}
export {LikesPage}