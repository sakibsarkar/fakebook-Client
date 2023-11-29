import "./PostCard.css";
import { AiOutlineLike } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";

const PostCard = ({ post }) => {
    const { _id, uploadBy, uploaderImg, uploadOn, isImage, postedImage, liked, comment, likedBy, commentsa, postCap } = post ? post : {}
    return (
        <div className="postCard">

            {
                isImage ?

                    <>

                        <div className="postTop">
                            <div className="uploaderBox">
                                <img src={uploaderImg} alt="" />
                            </div>




                            <div className="uploadDetails">
                                <h3>{uploadBy}</h3>
                                <p><FaGlobeAmericas />{uploadOn}</p>
                            </div>





                        </div>


                        <div className="caption">
                            <p>{postCap}</p>
                        </div>


                        <div className="postedImg">
                            <img src={postedImage} alt="" />
                        </div>


                        <div className="reaction">
                            <div className="reactNumber">
                                <p>{comment} comments</p>
                                <p>{liked} Linked</p>
                            </div>


                            <div className="ClickReaction ">
                                <div className="like reactionBox">
                                    <AiOutlineLike /> Like
                                </div>

                                <div className="comment reactionBox">
                                    <FaRegComment /> Comment
                                </div>

                                <div className="share reactionBox">
                                    <PiShareFat /> Share
                                </div>
                            </div>
                        </div>
                    </>
                    : ""
            }

        </div >
    );
};

export default PostCard;