import "./AllPost.css";
import PostCard from "../../../Cards/PostCard/PostCard";
import UseAxios from "../../../Hooks/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { getTokenFromLS } from "../../../Hooks&Functions/LocalStorage";

const AllPost = ({ data }) => {
    const token = getTokenFromLS()
    const axios = UseAxios()



    return (
        <div className="postsContainer">
            {
                data?.map(post => <PostCard key={post._id} post={post}></PostCard>)
            }
        </div>
    );
};

export default AllPost;