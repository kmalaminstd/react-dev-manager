import {useContext} from 'react'
import { AuthContext } from '../context/Auth.Context'
import { Navigate, useLocation } from 'react-router-dom'


function PublicRoute({children}) {
  const location = useLocation()
  const {user} = useContext(AuthContext)
  const loadComp = user ? (
    <Navigate to={location?.state?.from ? location.state.from : '/contact'} />
  ) : children
  return (
    <div>{loadComp}</div>
  )
}

export default PublicRoute