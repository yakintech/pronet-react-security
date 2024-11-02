import { authService } from '../../service/auth'
import { useDispatch } from 'react-redux'
import { setTokenStorage } from '../../util/tokenStorage'
import { useForm } from 'react-hook-form';
import { Inputs } from './inputs';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


const loginFormSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
})

function Login() {

    const { register, handleSubmit, formState: { errors, submitCount } } = useForm<Inputs>({
        resolver: yupResolver(loginFormSchema)
    });


    const dispatch = useDispatch()

    const login = (values: any) => {
        if (submitCount < 10) {
            authService.login(values.email, values.password)
                .then((res: any) => {
                    setTokenStorage(res.token)
                    localStorage.setItem("refreshToken", res.refreshToken)
                    dispatch({ type: "auth/login", payload: { email: values.email, roles: res.user.roles, pageRoles: res.user.pageRoles } })
                })
        }
    }

    return <>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit(login)}>
            <div>
                <label htmlFor="">EMail</label>
                <input type="text"  {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" {...register("password")} />
            </div>
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
    </>
}

export default Login