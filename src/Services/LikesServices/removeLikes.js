import axios from 'axios'

export const removeLikes=(token,video)=>{
    return axios.delete(`/api/user/likes/${video._id}`,
    {headers:{authorization:token}},
    )
 }