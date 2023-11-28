import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "../Compo/ContextProvider/ContextProvider";
import { removeToken } from "../Hooks&Functions/LocalStorage";

const instance = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true
})

const UseAxios = () => {
    const navigate = useNavigate()
    const { LogOut } = useContext(context)
    instance.interceptors.response.use((res) => {
        return res
    }, async (err) => {
        const status = err?.response?.status
        if (status == 401 || status == 403) {
            await LogOut()
            removeToken()
            Promise.reject(err)
            navigate("/login")
        }

    })
    return instance
};

export default UseAxios;