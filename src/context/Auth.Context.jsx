import { createContext, useState } from "react";
import { axiosPublicInstance } from "../config/config";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

export const AuthContext = createContext()

const loaderUserData = JSON.parse(localStorage.getItem("user"))
const loadedTokenData = JSON.parse(localStorage.getItem("token"))

export const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState(loaderUserData ? loaderUserData : null)
    const [token, setToken] = useState(loadedTokenData ? loadedTokenData : null)
    const location = useLocation()
    const navigate = useNavigate()

    // console.log(user);
    
    // user registration function
    const userRegister = async (data) =>{
        try{
            const response = await axiosPublicInstance.post('/auth/local/register', data)
            const {jwt, user} = response.data
            setUser(user)
            setToken(jwt)
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', JSON.stringify(jwt))

            navigate('/contact')
            toast.success('Register successfully redirecting...')
        }catch(err){
            toast.error(err.response?.data?.error?.message)
            console.log(err.response);
        }
    }


     // user login function
    const userLogin = async (data) =>{
        try{
            const response = await axiosPublicInstance.post('/auth/local', data)
            const {jwt, user} = response.data
            setUser(user)
            setToken(jwt)
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', JSON.stringify(jwt))

            navigate(location?.state?.from ? location.state.from : '/contact')
            toast.success('Login successfully redirecting...')
        }catch(err){
            toast.error(err.response?.data?.error?.message)
            console.log(err.response)
        }
    }

    const userLogOut = () =>{
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setUser(null)
        setToken(null)
        toast.success('LogOut Successfull !!')
        navigate('/')
        // console.log(user);
    }

    const value = {
        userRegister,
        userLogin,
        userLogOut,
        user, 
        token,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}