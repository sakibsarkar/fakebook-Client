import "./Login.css";
import UseAxios from "../../Hooks/UseAxios";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { addTokenToLS } from "../../Hooks&Functions/LocalStorage";
import { context } from "../ContextProvider/ContextProvider";

const Login = () => {

    const { CreateUser, LogInUser, setLoading } = useContext(context)
    const [showPass, setShowPas] = useState(false)
    const axios = UseAxios()

    const handleCreateUser = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        try {
            const res = await LogInUser(email, password)
            const { data } = await axios.post(`/user/token`, { email })
            console.log(data.token);
            addTokenToLS(data.token)
        }

        catch (err) {
            toast.error("invalid email or password")
            setLoading(false)
        }


    }

    return (
        <div className="loginPage">
            <div className="heroLog">
                <form className="logInForm" onSubmit={handleCreateUser}>
                    <input type="email" name="email" placeholder="Your Email" spellCheck="false" required />
                    <input type={showPass ? "text" : "password"} name="password" placeholder="Your Password" spellCheck="false" required />
                    <p>Forgot Password</p>
                    <button type="submit">Log In</button>
                    <div className="eye" onClick={() => setShowPas(!showPass)}>
                        {showPass ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}
                    </div>
                </form>

                <div className="gotToSignIn">
                    <Link to={"signin"}><button>Create new Account</button></Link>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;