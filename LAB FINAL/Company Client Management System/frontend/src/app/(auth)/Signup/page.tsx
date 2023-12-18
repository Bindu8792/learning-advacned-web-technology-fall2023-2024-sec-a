'use client'
import { redirect, useRouter } from "next/navigation"

const Signup = () => {

    const router = useRouter();

    const Login = () => {
        router.push("/Login");
      }

    return(
        <div>
            <label>Full Name:</label>
            <input type="text" id="fullName" name="fullName" />
            <br/>

            <label>User Name:</label>
            <input type="text" id="userName" name="userName"  />
            <br/>

            <label>Email:</label>
            <input type="email" id="email" name="email"  />
            <br/>

            <label>Password:</label>
            <input type="password" id="password" name="password"  />
            <br/>

            <label>Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword"  />
            <br/>

            <label>Address:</label>
            <input type="text" id="address" name="address"  />
            <br/>

            <label>Company Name:</label>
            <input type="text" id="companyName" name="companyName"  />
            <br/>

            <label>Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber"  />
            <br/>

            <label>City:</label>
            <input type="text" id="city" name="city"  />
            <br/>

            <label>Country:</label>
            <input type="text" id="country" name="country" />
            <br/>

            <button onClick={Login}>Signup</button>

        </div>
    )


}

export default Signup;