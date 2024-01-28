import Loader from "./Loader/Loader";
import Login from "./Login/Login";
import Nav from "./Nav/Nav";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { getTokenFromLS } from "../Hooks&Functions/LocalStorage";
import { context } from "./ContextProvider/ContextProvider";

const Layout = () => {
    const { user, loading } = useContext(context)
    const token = getTokenFromLS()

    if (loading) {
        return <Loader />
    }

    if (!user) {
        return <Login></Login>
    }
    if (user && token) {


        return (
            <div>
                <Nav></Nav>
                <Outlet></Outlet>
            </div>
        )

    }
}

export default Layout;