import "./Story.css";
import { useContext } from "react";
import { LiaPlusSolid } from "react-icons/lia";
import { context } from "../../ContextProvider/ContextProvider";

const Story = () => {
    const { user } = useContext(context)
    return (
        <div className="storyWrapper">
            <div className="storyContainer">
                <div className="uploadStories">
                    <div className="userCroper">
                        <img src={user.photoURL} alt="" />
                    </div>

                    <div className="uploadBtns">
                        <div>
                            <LiaPlusSolid></LiaPlusSolid>
                        </div>

                        <p>Create Story</p>
                    </div>
                </div>

                <div className="story">
                    <div className="storyOwner">
                        <img src="https://i.pinimg.com/564x/58/66/b3/5866b3cc607d3eec25bc64d5b505fca8.jpg" alt="" />
                    </div>
                    <img className="storyItem" src="https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2021/screenshot_20210112185121314_com.miui.videoplayer-60rXd5sEh9SO6mxU.jpg" alt="" />

                    <p className="storyOwnerName">MAYA</p>
                </div>
                <div className="story">
                    <div className="storyOwner">
                        <img src="https://gyanvaan.com/wp-content/uploads/2023/05/Insta-DP-For-Boys.jpg" alt="" />
                    </div>
                    <img className="storyItem" src="https://postmuseapp.com/wp-content/uploads/2019/05/Delicious-Your-Logo-Instagram-Story-Template-La0lQWb8Asg_UM-UtTs-foodstory.png" alt="" />

                    <p className="storyOwnerName">Adnan Rahman</p>
                </div>
                <div className="story">
                    <div className="storyOwner">
                        <img src="https://gyanvaan.com/wp-content/uploads/2023/05/Attractive-Insta-Dp-For-Boys-5.jpg" alt="" />
                    </div>
                    <img className="storyItem" src="https://i.pinimg.com/originals/66/3b/4c/663b4c9bdf16f5e43c8e1e4bffd8fe62.png" alt="" />

                    <p className="storyOwnerName">Sakib sarkar</p>
                </div>
                <div className="story">
                    <div className="storyOwner">
                        <img src="https://i.pinimg.com/564x/58/66/b3/5866b3cc607d3eec25bc64d5b505fca8.jpg" alt="" />
                    </div>
                    <img className="storyItem" src="https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2021/screenshot_20210112185121314_com.miui.videoplayer-60rXd5sEh9SO6mxU.jpg" alt="" />

                    <p className="storyOwnerName">MAYA</p>
                </div>

                <div className="story">
                    <div className="storyOwner">
                        <img src="https://i.pinimg.com/564x/58/66/b3/5866b3cc607d3eec25bc64d5b505fca8.jpg" alt="" />
                    </div>
                    <img className="storyItem" src="https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2021/screenshot_20210112185121314_com.miui.videoplayer-60rXd5sEh9SO6mxU.jpg" alt="" />

                    <p className="storyOwnerName">MAYA</p>
                </div>
            </div>
        </div>
    );
};

export default Story;