import axios from 'axios'


export const removeHistory=(token,video)=>{
    return axios.delete(`/api/user/history/${video._id}`,
    
      {headers:{authorization:token}
    })
}