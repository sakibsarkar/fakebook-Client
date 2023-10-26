import "./PostUpload.css";
import { useContext } from "react";
import { useState } from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import { MdPhotoLibrary } from "react-icons/md";
import { RiLiveFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { context } from "../../ContextProvider/ContextProvider";

const PostUpload = () => {
    const { user } = useContext(context)
    const [openModal, setOpenModal] = useState(false)
    const firstName = user?.displayName?.split(" ")[0]
    return (
        <div className="upldContainer">
            <div className="textSection">
                <div className="croper">
                    <img src={user.photoURL} alt="" />
                </div>
                <div className="uploadBox" onClick={() => setOpenModal(!openModal)}>
                    <p>What's on your mind, {firstName}?</p>
                </div>
            </div>

            <div className="heroUploads">
                <div className="method">
                    <RiLiveFill className="liveIcon" /> <p>Live Video</p>
                </div>

                <div className="method">
                    <BsEmojiLaughing className="feelingIcon" /> <p>Live Video</p>
                </div>

                <div className="method" >
                    <MdPhotoLibrary className="photoIcon" /> <p>Photo and video</p>
                </div>
            </div>


            {/* upload modal  */}

            {openModal && <div className="modalWrapper">
                <div className="uploadModal">
                    <div className="uploadHeading">
                        <h2>Create post</h2>
                        <div className="cancelPost" onClick={() => setOpenModal(false)}>
                            <RxCross2 />
                        </div>
                        <div className="uploadModalUnderLine"></div>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default PostUpload;
