import HomePageContenct from "../HomePageContenct/HomePageContenct";
import SideBar_left from "../Sidebar_left/Sidebar_left";
import SideBar_right from "../SideBar_right/SideBar_right";
import { useContext, useState } from "react";
import { context } from "../ContextProvider/ContextProvider";

const Home = () => {

   


    const { user } = useContext(context)




    return (
        <>
            <SideBar_left></SideBar_left>
            <HomePageContenct></HomePageContenct>
            <SideBar_right></SideBar_right>
        </>
    );
};

export default Home;