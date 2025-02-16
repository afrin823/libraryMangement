import axios from "axios";

const axiosPublic = axios.create({
    baseURL: import.meta.env.VITE_URL,
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }


})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;