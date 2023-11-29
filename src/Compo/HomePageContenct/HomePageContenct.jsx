import "./HomePageContenct.css";
import AllPost from "./AllPost/AllPost";
import PostUpload from "./PostUpload/PostUpload";
import Story from "./Story/Story";
import UseAxios from "../../Hooks/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { getTokenFromLS } from "../../Hooks&Functions/LocalStorage";
import { uploadIMG } from "../../Hooks/uploadIMG";
import { context } from "../ContextProvider/ContextProvider";

const HomePageContenct = ({ loading }) => {


    const { user } = useContext(context)


    const axios = UseAxios()
    const token = getTokenFromLS()




    // month array
    const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


    const date = new Date()
    const monthIndex = date.getMonth()
    const month = monthArr[monthIndex]
    const day = date.getDate()
    const year = date.getFullYear()
    const today = `${month} ${day}. ${year}`


    // get all posts
    const { data, refetch } = useQuery({
        queryKey: ["all post"],
        queryFn: async () => {
            const { data: posts } = await axios.get(`/all/post?token=${token}`)
            return posts.reverse()
        }
    })


    // upload post 

    const handleUploadPost = async (e, setOpenModal, setShowPreview) => {
        e.preventDefault()
        const form = e.target
        // post caption
        const postCap = form.postCap.value

        // post image
        const image = form.postImg.files[0]

        // host image
        if (image) {
            const { data: img } = await uploadIMG(image)
            const uploadDetails = { uploadBy: user?.displayName, uploaderImg: user?.photoURL, uploadOn: today, postCap: postCap, isImage: true, postedImage: img?.display_url,likedBy: [], comments: [] }

            // close the post upload modal
            setOpenModal(false)

            // removing the selected image from preview
            setShowPreview(null)
            await axios.post(`/uploadMyPost?token=${token}`, uploadDetails)
            // refetch all post
            refetch()
            return
        }


        const uploadDetails = { uploadBy: user?.displayName, uploaderImg: user?.photoURL, uploadOn: today, isImage: false, postedImage: "", liked: 0, comment: 0, likedBy: [], comments: [] }

        await axios.post(`/uploadMyPost?token=${token}`, uploadDetails)

        // close the post upload modal
        setOpenModal(false)

        // removing the selected image from preview
        setShowPreview(null)

        refetch()



    }

    return (
        <div className="HomeMain">
            <Story></Story>
            <PostUpload handleUploadPost={handleUploadPost}></PostUpload>
            <AllPost data={data} ></AllPost>
        </div>
    );
};

export default HomePageContenct;