'use client'
import { redirect, useRouter } from "next/navigation"



export default function Home() {
  const router = useRouter();

  const Login = () => {
    router.push("/Login");
  }

  const Signup = () => {
    router.push("/Signup");
  }

  return (
    <>
      <button onClick={Login}>Login</button>
      <button onClick={Signup}>Signup</button>
    </>
  )
}
