import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { context } from "../ContextProvider/ContextProvider";

const CheckMail = () => {
    const { user } = useContext(context)
    const navigate = useNavigate()
    if (user?.emailVerified) {
        navigate("/")
    }
    return (
        <div>
            
        </div>
    );
};

export default CheckMail;