import { useHistory } from "../../Context/HistoryContext";
import { SinglePlaylistCard } from "../SinglePlaylist/SinglePlaylistCard";
import { Navbar } from "../../Components/ComponentsExport";

const HistoryPage=()=>{
    const {historyVideos,clearHistoryVideos}=useHistory();
   
    return(
        <>
        <Navbar />
       <header className="header text-lg">
       <span className="material-icons text-lg">history</span>
        Your History
      </header>
      {history.length >0 &&  (
      <button onClick={clearHistoryVideos} className="clear-history-btn">
          Clear History
      </button>
      )}
      <p className="text-sm">{historyVideos.length} videos</p>
      <div className="cards">
        {historyVideos.map(video => (
          <SinglePlaylistCard
            key={video._id}
            playlistTitle="History Videos"
            video={video}
          />
        ))}
      </div>
    </>
    )
}
export {HistoryPage}