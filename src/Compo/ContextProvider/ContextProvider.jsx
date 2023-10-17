import { createContext, useState } from "react";

export const context = createContext(null)

const ContextProvider = ({ children }) => {

    const [navBG, setNavBG] = useState("#242526");
    const [bodyBG, setBodyBG] = useState("#18191a")
    const [iconColor, setIconColor] = useState("#b0b3b8")
    const [feildBG, setFeildBG] = useState("#3a3b3c")

    const Items = {
        navBG,
        setNavBG,
        bodyBG,
        setBodyBG,
        iconColor,
        setIconColor,
        feildBG,
        setFeildBG
    }
    return (
        <context.Provider value={Items}>
            {
                children
            }
        </context.Provider>
    );
};

export default ContextProvider;