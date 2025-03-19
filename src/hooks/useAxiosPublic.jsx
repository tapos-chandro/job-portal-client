import axios from "axios";


const axiosInstancePublic = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosPublic = () => {
    return axiosInstancePublic
};

export default useAxiosPublic;