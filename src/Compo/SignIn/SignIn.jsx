import "./SigIn.css";
import React, { useContext, useState } from "react";
import UseAxios from "../../Hooks/UseAxios";
import toast, { Toaster } from "react-hot-toast";
import { sendEmailVerification, updateCurrentUser, updateProfile } from "firebase/auth";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { addTokenToLS } from "../../Hooks&Functions/LocalStorage";
import { uploadIMG } from "../../Hooks/uploadIMG";
import { context } from "../ContextProvider/ContextProvider";

const SignIn = async () => {
    const { CreateUser, setWait } = useContext(context)
    const [showPass, setShowPas] = useState(false)

    const navigate = useNavigate()
    const axios = UseAxios()
    const handleLogin = async (e) => {
        e.preventDefault()
        const form = e.target
        const firstName = form.Fname.value
        const lastName = form.Lname.value
        const photoURL = form.photo.files[0]
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

        const { data } = await uploadIMG(photoURL)

        const res = await CreateUser(email, password)
        const { data: tokenData } = await axios.post(`/user/token`, { email })
        addTokenToLS(tokenData.token)
        await updateProfile(res.user, {
            displayName: userName,
            photoURL: data.display_url
        })

        navigate("/mailCheck")




    }



    return (
        <div className="loginPage">
            <div className="heroLog">
                <form className="logInForm" onSubmit={handleLogin}>
                    <div className="names">
                        <input type="text" name="Fname" placeholder="Your First name" spellCheck="false" required />
                        <input type="text" name="Lname" placeholder="Your Last name" spellCheck="false" required />
                    </div>
                    <input type="file" accept="image/*" name="photo" spellCheck="false" required />
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