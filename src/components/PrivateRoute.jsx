import {Navigate, Outlet} from 'react-router-dom'
import { useAuthStatus } from '../hook/useAuthStatus'
import Spinner from './Spinner'

const PrivateRoute = () => {
    const {loggedIn, checkingStatus} = useAuthStatus()

    if (checkingStatus===true) {
        return <Spinner/>
    }
    return (
        loggedIn ? <Outlet/> : <Navigate to='/sign-in' />
    )
}

export default PrivateRoute