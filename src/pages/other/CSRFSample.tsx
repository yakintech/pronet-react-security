import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CSRFSample() {

    const [csrfToken, setcsrfToken] = useState("")
    const [formData, setformData] = useState({ username: "", password: "" })
    const [response, setresponse] = useState("")


    useEffect(() => {
      
        const getCSRFToken = async () => {
            const response = await fetch("http://localhost:3002/csrf-token")
            const data = await response.json()
            setcsrfToken(data.csrfToken)
        }


        axios.get("http://localhost:3002/api/employees-2")
        .then(response => {
            console.log(response.data)
        })

        getCSRFToken()

    }, [])
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const response = await axios.post("http://localhost:3002/api/login-with-csrf", formData, {
            headers: {
                "csrf-token": csrfToken
            }
        })

        setresponse(response.data.csrfToken)


    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setformData({ ...formData, [e.target.name]: e.target.value })
    }

    return <>
    <span>{response}</span>
    <h1>CSRF Sample</h1>
    <hr />
    <form onSubmit={handleSubmit}>
        <div>
            <label>Username:</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
    </form>
    </>
}

export default CSRFSample