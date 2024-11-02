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
            const response = await axiosInstance.get(url, {
                withCredentials: true
            })
            return response.data

        } catch (error) {
            console.log(`baseService.getAll: ${process.env.REACT_APP_BASE_URL}${url} Error: ${error}`)
            throw error
        }
    }
}


export const baseServiceWithToken = {
    getAll: async<T>(url: string): Promise<T[]> => {

        try {
            const response = await axiosInstance2.get<T[]>(url, {
                withCredentials: true

            })
            return response.data

        } catch (error: any) {
            //response 401 ise
            if (error.response.status == 401) {

                await axiosInstance2.post('refreshToken', { withCredentials: true })

                const response = await axiosInstance2.get(url, {
                    withCredentials: true,
                })

                return response.data

            }

            console.log(`baseServiceWithToken.getAll: ${process.env.REACT_APP_BASE_URL2}${url} Error: ${error}`)
            throw error
        }
    }
}