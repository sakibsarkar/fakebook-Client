import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { context } from "../ContextProvider/ContextProvider";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(context)
    return user ? children : <Navigate to={"/login"}></Navigate>

};

export default PrivateRoute;