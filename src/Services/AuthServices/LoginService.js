import axios from 'axios'

const LoginService=({email,password})=>{
   return axios.post("/api/auth/login",{
       email,
       password,
   })

}
export {LoginService}