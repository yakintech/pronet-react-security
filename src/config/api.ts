import { getTokenStorage, setTokenStorage } from "../util/tokenStorage"
import { axiosInstance, axiosInstance2 } from "./axiosInstance"


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


export const baseServiceWithToken = {
    getAll: async<T> (url: string) : Promise<T[]> => {

        let token = getTokenStorage()
        try {
            const response = await axiosInstance2.get<T[]>(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data

        } catch (error: any) {
            //response 401 ise
            if (error.response.status == 401) {
                //eğer 401 hatasıysa refresh token ile yeni token almayı DENE!
                let refreshToken = localStorage.getItem("refreshToken")
                const refreshTokenResponse = await axiosInstance2.post('refreshToken', { refreshToken })

                setTokenStorage(refreshTokenResponse.data.token)
            
                const response = await axiosInstance2.get(url, {
                    headers: {
                        Authorization: `Bearer ${refreshTokenResponse.data.token}`
                    }
                })

                return response.data

            }

            console.log(`baseServiceWithToken.getAll: ${process.env.REACT_APP_BASE_URL2}${url} Error: ${error}`)
            throw error
        }
    }
}