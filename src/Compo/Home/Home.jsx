import HomePageContenct from "../HomePageContenct/HomePageContenct";
import SideBar_left from "../Sidebar_left/Sidebar_left";
import SideBar_right from "../SideBar_right/SideBar_right";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useContext, useState } from "react";
import { context } from "../ContextProvider/ContextProvider";

const Home = () => {

    const axiosPublic = UseAxiosPublic()
    const [tokenLoading, setTokenLading] = useState(true)

    const { user } = useContext(context)

    axiosPublic.post("/user/token", { email: user?.email })
        .then(res => setTokenLading(false))


    return (
        <>
            <SideBar_left></SideBar_left>
            <HomePageContenct loading={tokenLoading}></HomePageContenct>
            <SideBar_right></SideBar_right>
        </>
    );
};

export default Home;