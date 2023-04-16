import { createContext, useState } from "react";
import { axiosInstance } from "../config/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

const loaderUserData = localStorage.getItem("user")
const loadedTokenData = localStorage.getItem("token")

export const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState(loaderUserData ? loaderUserData : null)
    const [token, setToken] = useState(loadedTokenData ? loadedTokenData : null)
    const navigate = useNavigate()

    console.log(user);

    // user registration function
    const userRegister = async (data) =>{
        try{
            const response = await axiosInstance.post('/auth/local/register', data)
            const {jwt, user} = response.data
            setUser(user)
            setToken(jwt)
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', JSON.stringify(jwt))

            navigate('/contact')
            toast.success('Register successfully redirecting...')
        }catch(err){
            toast.error(err.response?.data?.error?.message)
        }
    }


     // user login function
    const userLogin = async (data) =>{
        try{
            const response = await axiosInstance.post('/auth/local/', data)
            const {jwt, user} = response.data
            setUser(user)
            setToken(jwt)
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', JSON.stringify(jwt))

            navigate('/contact')
            toast.success('Login successfully redirecting...')
        }catch(err){
            toast.error(err.response?.data?.error?.message)
        }
    }

    const userLogOut = () =>{
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        toast.success('LogOut Successfull !!')
        navigate('/')
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