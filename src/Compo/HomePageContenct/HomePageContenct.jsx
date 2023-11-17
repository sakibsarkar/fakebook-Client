import "./HomePageContenct.css";
import PostUpload from "./PostUpload/PostUpload";
import Story from "./Story/Story";

const HomePageContenct = ({ loading }) => {
    return (
        <div className="HomeMain">
            <Story></Story>
            {loading ? "Loading" : <PostUpload></PostUpload>}
        </div>
    );
};

export default HomePageContenct;