import axios from 'axios'

const SignUpService=({formData})=>{
    return axios.post("/api/auth/signup",{
       formData
    })

}
export {SignUpService}