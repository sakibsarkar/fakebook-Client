import "./PostCard.css";
import UseAxios from "../../Hooks/UseAxios";
import { useContext, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { context } from "../../Compo/ContextProvider/ContextProvider";
import { getTokenFromLS } from "../../Hooks&Functions/LocalStorage";

const PostCard = ({ post }) => {

    const { user } = useContext(context)

    const { _id, uploadBy, uploaderImg, uploadOn, isImage, postedImage, likedBy, comments, postCap } = post ? post : {}

    const [numberOfLike, setNumberOfLike] = useState(likedBy.length)
    const [isLiked, setIsLiked] = useState(
        likedBy.includes(user?.email) ? true : false
    )

    const axios = UseAxios()
    const token = getTokenFromLS()


    const handleLike = async () => {

        if (isLiked) {
            await axios.put(`/post/unLike?token=${token}&&postId=${_id}&&liker=${user?.email}`)
            setNumberOfLike(numberOfLike - 1)
            setIsLiked(false)
            return
        }

        await axios.put(`/post/liked?token=${token}&&postId=${_id}&&liker=${user?.email}`)
        setNumberOfLike(likedBy.length + 1)
        setIsLiked(true)
    }

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
                                <p>{comments.length} Comments</p>
                                <p>{numberOfLike} Like</p>
                            </div>


                            <div className="ClickReaction ">
                                <div className={isLiked ? "like reactionBox liked" : "like reactionBox"} onClick={handleLike}>
                                    {isLiked ? <AiFillLike className="likeAni"/> : <AiOutlineLike />} Like
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