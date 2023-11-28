export const addTokenToLS = (item) => {
    return localStorage.setItem("token", JSON.stringify(item))
}

export const removeToken = () => {
    return localStorage.removeItem("token")

}

export const getTokenFromLS = () => {
    return JSON.parse(localStorage.getItem("token"))
}