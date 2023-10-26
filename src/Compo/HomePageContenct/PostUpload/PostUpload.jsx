import "./PostUpload.css";
import { useContext } from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import { MdPhotoLibrary } from "react-icons/md";
import { RiLiveFill } from "react-icons/ri";
import { context } from "../../ContextProvider/ContextProvider";

const PostUpload = () => {
    const { user } = useContext(context)
    const firstName = user?.displayName?.split(" ")[0]
    return (
        <div className="upldContainer">
            <div className="textSection">
                <div className="croper">
                    <img src={user.photoURL} alt="" />
                </div>
                <div className="uploadBox">
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

                <div className="method">
                    <MdPhotoLibrary className="photoIcon" /> <p>Photo and video</p>
                </div>
            </div>


            {/* upload modal  */}

            <div className="uploadModal">
                
            </div>
        </div>
    );
};

export default PostUpload;
