import "./HomePageContenct.css";
import PostUpload from "./PostUpload/PostUpload";
import Story from "./Story/Story";

const HomePageContenct = () => {
    return (
        <div className="HomeMain">
            <Story></Story>
            <PostUpload></PostUpload>
        </div>
    );
};

export default HomePageContenct;