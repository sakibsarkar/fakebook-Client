import HomePageContenct from "../HomePageContenct/HomePageContenct";
import SideBar_left from "../Sidebar_left/Sidebar_left";
import SideBar_right from "../SideBar_right/SideBar_right";

const Home = () => {

    return (
        <>
            <SideBar_left></SideBar_left>
            <HomePageContenct></HomePageContenct>
            <SideBar_right></SideBar_right>
        </>
    );
};

export default Home;