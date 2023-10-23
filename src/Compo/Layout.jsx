import Loader from "./Loader/Loader";
import Login from "./Login/Login";
import Nav from "./Nav/Nav";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { context } from "./ContextProvider/ContextProvider";

const Layout = () => {
    const { user, loading } = useContext(context)

    if (loading) {
        return <Loader />
    }

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