import { addPlaylists } from "../../Services/ServiceExport";
import { UPDATE_PLAYLISTS } from "../../reducers/constants";
import toast from "react-hot-toast";

export const createNewPlaylists = async (token, playlist, playlistDispatch) => {
  
  try {
    const response = await addPlaylists(token, playlist);
    if (response.status === 201) {
      playlistDispatch({
        type: UPDATE_PLAYLISTS,
        payload: response.data.playlists,
      });
      toast.success(`${playlist} playlist created`);
    }
  } catch (error) {
    console.error("ERROR", error);
    toast.error("Error");
    return error;
  }
};


