import axios from "axios";



export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 4000,
})


export const axiosInstance2 = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL2,
    timeout: 4000,
})