import React, { useState } from 'react'
import { authService } from '../../service/auth'
import { useDispatch } from 'react-redux'
import { setTokenStorage } from '../../util/tokenStorage'

function Login() {

    const [email, setemail] = useState("cagatay@mail.com")
    const [password, setpassword] = useState("")

    const dispatch = useDispatch()

    const login = () => {
        authService.login(email, password)
            .then((res: any) => {
                setTokenStorage(res.token)
                dispatch({type:"auth/login", payload: {email}})
            })
    }

    return <>
        <h1>Login Page</h1>
        <div>
            <label htmlFor="">EMail</label>
            <input type="text" value={email} onChange={(e) => setemail(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Password</label>
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
        </div>
        <div>
            <button onClick={login}>Login</button>
        </div>
    </>
}

export default Login