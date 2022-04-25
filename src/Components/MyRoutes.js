import {Routes,Route} from 'react-router-dom'
import {Home,LoginPage,SignUpPage} from '../Pages'
import { PrivateRoute } from './ComponentsExport'




const MyRoutes=()=>{
    return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        <Route path="/" element={<PrivateRoute />}/>
    </Routes>
    )
}
export {MyRoutes}