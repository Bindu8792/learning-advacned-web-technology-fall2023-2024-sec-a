'use client'
import { redirect, useRouter } from "next/navigation"


const Login = () => {

    const router = useRouter();

    const LoginDashboard = () => {
        router.push("/LoginDashboard");
      }


    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Email"/>
            <br/>
            <input type="password" placeholder="Password"/>
            <br/>
            <button onClick={LoginDashboard}>Login</button>
        </div>
    )
}

export default Login;