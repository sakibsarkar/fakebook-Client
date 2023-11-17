import axios from "axios";

export const uploadIMG = async (image) => {
    const form = new FormData()
    form.append("image", image)
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_BB}`, form)
    return data
}