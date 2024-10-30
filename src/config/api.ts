import { axiosInstance } from "./axiosInstance"


export const baseService = {
    getAll: async (url: string) => {
        try {
            const response = await axiosInstance.get(url)
            return response.data

        } catch (error) {

        }
    }
}