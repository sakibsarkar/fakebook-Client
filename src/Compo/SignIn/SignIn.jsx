import "./SigIn.css";
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { sendEmailVerification, updateCurrentUser, updateProfile } from "firebase/auth";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { context } from "../ContextProvider/ContextProvider";

const SignIn = () => {
    const { CreateUser } = useContext(context)
    const [showPass, setShowPas, setWait] = useState(false)

    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const firstName = form.Fname.value
        const lastName = form.Lname.value
        const photoURL = form.photoURL.value
        const userName = firstName.concat(" ", lastName)
        const email = form.email.value
        const password = form.password.value
        const confirmPass = form.confirm.value

        const capital = /[A-Z]/;
        const special = /[\W_]/
        if (password.length < 6) {
            return toast.error("password should more than 6 charaters")
        }
        if (!capital.test(password)) {
            return toast.error("password should conatin atleast one capital latter")
        }

        if (!special.test(password)) {
            return toast.error("password should conatin atleast one special character")
        }

        if (password !== confirmPass) {
            return toast.error("password didn't matched")
        }


        CreateUser(email, password)
            .then(res => {
                console.log(res)
                updateProfile(res.user, {
                    displayName: userName,
                    photoURL: photoURL
                })
                    .then(() => {

                        sendEmailVerification(res.user)
                    })

                navigate("/mailCheck")
                setWait(false)

            })


    }



    return (
        <div className="loginPage">
            <div className="heroLog">
                <form className="logInForm" onSubmit={handleLogin}>
                    <div className="names">
                        <input type="text" name="Fname" placeholder="Your First name" spellCheck="false" required />
                        <input type="text" name="Lname" placeholder="Your Last name" spellCheck="false" required />
                    </div>
                    <input type="text" name="photoURL" placeholder="Your Photo Url" spellCheck="false" required />
                    <input type="email" name="email" placeholder="Your Email" spellCheck="false" required />
                    <input type={showPass ? "text" : "password"} name="password" placeholder="Your Password" spellCheck="false" required />
                    <input type="password" name="confirm" placeholder="Your Password" spellCheck="false" required />

                    <button type="submit">Create Account</button>
                    <div className="signInEye" onClick={() => setShowPas(!showPass)}>
                        {showPass ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}
                    </div>
                </form>

                <div className="gotToSignIn">
                    <Link to={"/"}><button>Have a Account?</button></Link>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default SignIn;