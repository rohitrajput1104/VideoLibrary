import axios from 'axios'


export const getHistory=(token)=>{
    return axios.get("/api/user/history",
       
      {headers:{authorization:token}
    })
}