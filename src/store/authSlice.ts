import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const checkLogin = createAsyncThunk(
    'auth/checkLogin',
    async () => {
        return axios.get('http://localhost:3002/check', {
            withCredentials: true
        })
    }
)

const initalState = {
    user: {},
    isLogin: false,
    isLoading: true,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initalState,
    reducers: {
        login: (state, action) => {
            state.isLoading = false
            state.isLogin = true
            state.user = action.payload
        },
        logout: (state, action) => {
            state.isLoading = false
            state.isLogin = false
            state.user = {}
        }
    },
    extraReducers: (builder: any) => {
        builder.addCase(checkLogin.pending, (state: any, action: any) => {
            state.isLoading = true
        })

        builder.addCase(checkLogin.fulfilled, (state: any, action: any) => {
           
            const { email, roles, pageRoles } = action.payload.data
            state.isLoading = false
            state.isLogin = true
            state.user = { email, roles, pageRoles }
        })

        builder.addCase(checkLogin.rejected, (state: any, action: any) => {
            state.isLoading = false
            state.isLogin = false
        })
    }
})

export default authSlice.reducer