import { axiosInstance } from "./axiosInstance"


axiosInstance.interceptors.response.use((response) => {
    return response
}, (error) => {
    //API requestlerinde meydana gelecek tüm hatalar burada yakalanacak
    return Promise.reject(error)
})


export const baseService = {
 
    getAll: async (url: string) => {
        try {
            const response = await axiosInstance.get(url)
            return response.data

        } catch (error) {
            console.log(`baseService.getAll: ${process.env.REACT_APP_BASE_URL}${url} Error: ${error}`)
            throw error
        }
    }
}