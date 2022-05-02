import axios from 'axios'


export const clearHistory=token=>{
    return axios.delete("/api/user/history/all",
       
      {headers:{authorization:token}
    })
}