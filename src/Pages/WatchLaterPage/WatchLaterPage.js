import { useWatchLater } from "../../Context";
import { SinglePlaylistCard } from "../SinglePlaylist/SinglePlaylistCard";
import { Navbar } from "../../Components/ComponentsExport";
const WatchLaterPage=()=>{
    const {watchLaterVideos}=useWatchLater();

    return(
        <>
        <Navbar />
        <header className="header text-lg">
        <span className="material-icons text-lg">watch_later</span>
        WatchLater Videos
      </header>
      <p className="text-sm">{watchLaterVideos.length} videos</p>
      <div className="cards">
        {watchLaterVideos.map(video => (
          <SinglePlaylistCard
            key={video._id}
            playlistTitle="Watch Later"
            video={video}
          />
        ))}
      </div>
        </>
    )
}
export {WatchLaterPage}