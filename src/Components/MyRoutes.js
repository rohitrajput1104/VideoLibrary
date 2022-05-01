import {Routes,Route} from 'react-router-dom'
import {Home,LoginPage,SignUpPage,Playlists,SinglePlaylist,LikesPage,WatchLaterPage} from '../Pages'
import { PrivateRoute } from './ComponentsExport'




const MyRoutes=()=>{
    return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        <Route path="/" element={<PrivateRoute />}/>
        <Route path="/playlist" element={<Playlists />}/>
        <Route path="/playlist/:playlistID" element={<SinglePlaylist />}/>
        <Route path="/liked" element={<LikesPage />}/>
        <Route path="/watchlater" element={<WatchLaterPage />}/>
    </Routes>
    )
}
export {MyRoutes}