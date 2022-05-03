import axios from 'axios'


export const addHistory=(token,video)=>{
    return axios.post("/api/user/history",
       {video},
      {headers:{authorization:token}
    })
}