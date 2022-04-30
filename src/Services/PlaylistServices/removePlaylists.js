import axios from 'axios'

export const removePlaylists = (token, playlist) => {
    return axios.delete(`/api/user/playlists/${playlist._id}`, {
      headers: { authorization: token },
    });
  };
  


  