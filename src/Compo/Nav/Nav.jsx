import "./Nav.css";
import { useContext } from "react";
import { AiFillBell } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";
import { CgGames } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { context } from "../ContextProvider/ContextProvider";

const Nav = () => {
    const { navBG, iconColor, feildBG } = useContext(context)

    return (
        <nav style={{ backgroundColor: navBG }}>


            <div className="navLeftSide">

                <img src="https://i.ibb.co/gMWvjdb/Facebook-Logosu.png" alt="" />
                <div className="searchBox" style={{ backgroundColor: feildBG }} >
                    <AiOutlineSearch style={{ color: iconColor }} className="searchIcon" /> <input type="text" placeholder="Search fakebook" />
                </div>
            </div>
            <ul>
                <li><NavLink to={"/"} className="contentIcon" style={{ color: iconColor }}><GoHomeFill /></NavLink></li>
                <li><NavLink to={"friends"} className="contentIcon" style={{ color: iconColor }}><FaUserFriends /></NavLink></li>
                <li><NavLink to={"videos"} className="contentIcon" style={{ color: iconColor }}><MdOutlineOndemandVideo /></NavLink></li>
                <li><NavLink to={"games"} className="contentIcon" style={{ color: iconColor }}><CgGames /></NavLink></li>
            </ul>

            <div className="navRightSide">
                <Link className="myIcons" style={{ color: iconColor, backgroundColor: feildBG }}><BiPlus></BiPlus></Link>
                <Link className="myIcons" style={{ color: iconColor, backgroundColor: feildBG }}><BsMessenger></BsMessenger></Link>
                <Link className="myIcons" style={{ color: iconColor, backgroundColor: feildBG }}><AiFillBell></AiFillBell></Link>
                <Link className="myIcons" style={{ color: iconColor, backgroundColor: feildBG }}></Link>
            </div>
        </nav>
    );
};

export default Nav;