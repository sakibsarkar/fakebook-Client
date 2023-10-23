import "./Nav.css";
import { useContext, useState } from "react";
import { AiFillBell } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BiPlus, BiSolidHelpCircle } from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";
import { CgGames } from "react-icons/cg";
import { FaMoon, FaUserFriends } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { MdLogout, MdOutlineOndemandVideo } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { context } from "../ContextProvider/ContextProvider";

const Nav = () => {
    const { navBG, iconColor, feildBG, user, LogOut } = useContext(context)
    const [showAccessibility, setShowAccessibility] = useState(false)

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
                <div onClick={() => setShowAccessibility(!showAccessibility)} className="myIcons userDisplayPic" style={{ color: iconColor, backgroundColor: feildBG }}><img src={user?.photoURL}></img></div>
            </div>

            {
                showAccessibility ?
                    <div className="accessibility">

                        <div className="authInfo">
                            <div className="userBar">
                                <img src={user?.photoURL} alt="" />
                                <p>{user?.displayName}</p>
                            </div>

                            <hr />
                            <div className="seeAllProfile">
                                <p>See all profiles</p>
                            </div>



                        </div>


                        <div className="functions">
                            <Link to={"/"} className="function">
                                <div className="functionName">
                                    <div className="iconHolder">
                                        <FiSettings></FiSettings>
                                    </div>
                                    <p>Setting and Privacy</p>
                                </div>
                                <IoIosArrowForward className="greaterThanSign"></IoIosArrowForward>

                            </Link>

                            <Link to={"/"} className="function">
                                <div className="functionName">
                                    <div className="iconHolder">
                                        <BiSolidHelpCircle></BiSolidHelpCircle>
                                    </div>
                                    <p>Help and Support</p>
                                </div>
                                <IoIosArrowForward className="greaterThanSign"></IoIosArrowForward>

                            </Link>



                            <Link to={"/"} className="function">
                                <div className="functionName">
                                    <div className="iconHolder">
                                        <FaMoon></FaMoon>
                                    </div>
                                    <p>Display Mode</p>
                                </div>
                                <IoIosArrowForward className="greaterThanSign"></IoIosArrowForward>

                            </Link>



                            <Link to={"/"} className="function">
                                <div className="functionName">
                                    <div className="iconHolder">
                                        <RiFeedbackLine></RiFeedbackLine>
                                    </div>
                                    <p>FeedBack</p>
                                </div>
                                <IoIosArrowForward className="greaterThanSign"></IoIosArrowForward>

                            </Link>



                            <div className="function" onClick={() => LogOut()}>
                                <div className="functionName">
                                    <div className="iconHolder">
                                        <MdLogout></MdLogout>
                                    </div>
                                    <p>Log Out</p>
                                </div>
                                <IoIosArrowForward className="greaterThanSign"></IoIosArrowForward>

                            </div>



                        </div>



                    </div>
                    :
                    ""
            }
        </nav>
    );
};

export default Nav;