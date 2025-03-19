import axios from "axios";


const axiosInstancePublic = axios.create({
    baseURL: 'https://job-portal-server-delta-two.vercel.app',
    ithCredentials: true
})

const useAxiosPublic = () => {
    return axiosInstancePublic
};

export default useAxiosPublic;