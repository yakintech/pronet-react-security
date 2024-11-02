import axios from "axios"


export const authService = {
    login: async (email: string, password: string) => {

        try {
            var response = await axios.post('http://localhost:3002/api/login', {
                email,
                password
            },
            {
                withCredentials: true
            }
        )

            return response.data
        } catch (error) {
            console.log(error)
        }

    }
}