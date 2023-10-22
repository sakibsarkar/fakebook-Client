import Login from "./Login/Login";
import Nav from "./Nav/Nav";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { context } from "./ContextProvider/ContextProvider";

const Layout = () => {
    const { user } = useContext(context)

    if (!user?.emailVerified) {
        return <Login></Login>
    }
    if (user?.emailVerified) {


        return (
            <div>
                <Nav></Nav>
                <Outlet></Outlet>
            </div>
        )

    }
}

export default Layout;