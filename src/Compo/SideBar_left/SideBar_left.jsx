import "./SideBar_left.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../ContextProvider/ContextProvider";

const SideBar_left = () => {
    const { user } = useContext(context)
    return (
        <div className="sidebarLeft">
            <Link className="fullWidth">
                <div className="chocobar">
                    <div style={{ width: "36px", height: "36px", overflow: "hidden", backgroundImage: `url(${user?.photoURL})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "50%" }}></div>
                    <p>{user?.displayName}</p>
                </div>
            </Link>



            <Link className="fullWidth">
                <div className="chocobar">
                    <img src="https://i.ibb.co/mNsvpQK/friends.png" alt="" />
                    <p>Find Friends</p>
                </div>
            </Link>




            <Link className="fullWidth">
                <div className="chocobar">
                    <img src="https://i.ibb.co/5kfrpzN/memories.png" alt="" />
                    <p>Memories</p>
                </div>
            </Link>




            <Link className="fullWidth">
                <div className="chocobar">
                    <img src="https://i.ibb.co/5LCth7v/save.png" alt="" />
                    <p>Saved</p>
                </div>
            </Link>




            <Link className="fullWidth">
                <div className="chocobar">
                    <img src="https://i.ibb.co/b304HNb/groups.png" alt="" />
                    <p>Groups</p>
                </div>
            </Link>




            <Link className="fullWidth">
                <div className="chocobar">
                    <img src="https://i.ibb.co/nDTs85z/watch.png" alt="" />
                    <p>Watch</p>
                </div>
            </Link>


            <div className="underline"></div>

            <div className="shortcuts">

                <h2>Your Shortcuts</h2>

                <div className="goroups">
                    <div className="group">
                        <div className="grpImg" style={{ width: "36px", height: "36px", overflow: "hidden", backgroundImage: "url('https://i.ibb.co/HxYdMGM/387068749-1838522133230478-4838922904514258592-n.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "4px" }}></div>
                        <h2>Mission Web Development ( Batch 8 )</h2>
                    </div>




                    <div className="group">
                        <div className="grpImg" style={{ width: "36px", height: "36px", overflow: "hidden", backgroundImage: "url('https://i.ibb.co/C8J24wT/Clothing.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "4px" }}></div>
                        <h2>Lets help the poor </h2>
                    </div>


                    <div className="group">
                        <div className="grpImg" style={{ width: "36px", height: "36px", overflow: "hidden", backgroundImage: "url('https://i.ibb.co/fNt45Qc/service-grid-4.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "4px" }}></div>
                        <h2>Marrage Service for Singles ✨💗 </h2>
                    </div>


                    <div className="group">
                        <div className="grpImg" style={{ width: "36px", height: "36px", overflow: "hidden", backgroundImage: "url('https://i.ibb.co/Q8Cc9KJ/Rectangle-2-4.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "4px" }}></div>
                        <h2>C/C++ Memes 🤣 </h2>
                    </div>




                    <div className="group">
                        <div className="grpImg" style={{ width: "36px", height: "36px", overflow: "hidden", backgroundImage: "url('https://i.ibb.co/4YJs3q0/service-grid-5.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "4px" }}></div>
                        <h2>Cake makers BD</h2>
                    </div>



                    <div className="group">
                        <div className="grpImg" style={{ width: "36px", height: "36px", overflow: "hidden", backgroundImage: "url('https://i.ibb.co/gV0tt8c/IMG-9089-fotor-20231006225616.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "4px" }}></div>
                        <h2>Videographers Community 📽️📸</h2>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default SideBar_left;