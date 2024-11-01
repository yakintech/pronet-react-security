import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Login from './pages/auth/Login'
import { checkLogin } from './store/authSlice'
import { AppDispatch } from './store'

import Router from './pages'

function App() {


  // return <UserProfileImage profileImage="javascript:alert('test')" />
  // return <Unsafecomponent content="<img src=x onerror=alert('XSS')>"/>


  const state = useSelector((state: any) => state)
  let dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(checkLogin())
  }, [])


  const logout = () => {
    localStorage.removeItem('token')
    dispatch({ type: 'auth/logout' })
  }

  let name = 3

  return <>
    {
      state.auth.isLoading ? <h1>loading...</h1> :
        state.auth.isLogin ? <>
        <Router/>
        </> : <Login />
    }
  </>
}

export default App

