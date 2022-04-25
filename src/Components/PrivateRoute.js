import {Navigate,Outlet} from 'react-router-dom'
import { useAuth} from '../Context'

const PrivateRoute=()=>{
    const {
        auth:{isAuthenticated}
    }=useAuth();

    return isAuthenticated ? children :<Navigate to ="/login" replace />
}
export {PrivateRoute}