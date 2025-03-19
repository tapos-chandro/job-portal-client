import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";


const axiosInstance = axios.create({
    baseURL: 'https://job-portal-server-delta-two.vercel.app',
    withCredentials: true
})

const usePrivetAxios = () => {

    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()


    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, async (error) => {
            if(error.status === 401 || error.status === 403){
                await logOut()
                .then(() => {
                    console.log('logged out user')
                    navigate('/login')
                })
            }
            return Promise.reject(error);
        })
    },[])


    return axiosInstance
};

export default usePrivetAxios;