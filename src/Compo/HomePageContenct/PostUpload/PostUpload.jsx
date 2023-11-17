import "./PostUpload.css";
import { useContext, useRef } from "react";
import { useState } from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import { MdPhotoLibrary } from "react-icons/md";
import { RiEarthFill, RiLiveFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { uploadIMG } from "../../../Hooks/uploadIMG";
import { context } from "../../ContextProvider/ContextProvider";

const PostUpload = () => {
    const { user } = useContext(context)
    const [openModal, setOpenModal] = useState(false)
    const firstName = user?.displayName?.split(" ")[0]
    const [isDisable, setIsdisable] = useState(true)

    const postImgRef = useRef(null)


    const pickImage = () => {
        postImgRef.current.click()
    }

    const checkCaption = (e) => {
        const text = e.target.value
        console.log(text)
        if (text == "") {

            return setIsdisable(true)
        }

        setIsdisable(false)
    }


    return (
        <div className="upldContainer">
            <div className="textSection">
                <div className="croper">
                    <img src={user.photoURL} alt="" />
                </div>
                <div className="uploadBox" onClick={() => setOpenModal(true)}>
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

            {

                openModal && <div className="modalWrapper">
                    <div className="uploadModal">
                        <div className="uploadHeading">
                            <h2>Create post</h2>
                            <div className="cancelPost" onClick={() => setOpenModal(false)}>
                                <RxCross2 />
                            </div>
                        </div>

                        <div className="uploader">
                            <div className="uploaderImg">
                                <img src={user?.photoURL} alt="" />
                            </div>

                            <div className="uploadStyle">
                                <p>{user?.displayName}</p>
                                <div className="visibility">
                                    <RiEarthFill></RiEarthFill>
                                    <p>Everyone</p>
                                </div>
                            </div>
                        </div>



                        <form className="postForm">
                            <textarea onKeyUp={checkCaption} type="text" className="postCaption" placeholder={`what's on your mind ${firstName}`} />

                            <div className="postBox" onClick={pickImage}>


                                <div className="addIcon">
                                    <MdPhotoLibrary></MdPhotoLibrary>
                                </div>

                                <p>Add a Photo</p>

                                <input type="file" name="postImg" id="postImg" accept="image/*" ref={postImgRef} style={{ display: "none" }} />
                            </div>

                            <button type="submit" disabled={isDisable ? true : false}>Post</button>

                        </form>






                    </div>
                </div >

            }
        </div >
    );
};

export default PostUpload;
