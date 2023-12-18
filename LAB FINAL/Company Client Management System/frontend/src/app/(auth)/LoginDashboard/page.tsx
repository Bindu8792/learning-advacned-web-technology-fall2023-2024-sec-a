import Link from "next/link";

const LoginDashboard = () => {
    return(
        <div>
            <ul>
                <li><Link href='/login'>Admin</Link></li>
                <li><Link href='/register'>Customer</Link></li>
                <li><Link href='/'>Accountant</Link></li>
                <li><Link href='/'>Sales and Marketing</Link></li>
            </ul>

        </div>
    )
}

export default LoginDashboard;