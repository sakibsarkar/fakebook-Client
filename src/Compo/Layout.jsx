import Nav from "./Nav/Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;