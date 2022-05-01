import axios from 'axios'


export const addLikes=(token,video)=>{

    return axios.post(`/api/user/likes`,
       {video},
        {headers:{authorization:token}}
    )

}