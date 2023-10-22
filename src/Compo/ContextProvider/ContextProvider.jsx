import auth from "../../Firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const context = createContext(null)

const ContextProvider = ({ children }) => {

    const [navBG, setNavBG] = useState("#242526");
    const [bodyBG, setBodyBG] = useState("#18191a")
    const [iconColor, setIconColor] = useState("#b0b3b8")
    const [feildBG, setFeildBG] = useState("#3a3b3c")
    const [user, setuser] = useState({})
    const [wait, setWait] = useState(true)



    const CreateUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)

    }

    const LogInUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setuser(user)
        })
        return () => unsubscribe()
    }, [wait])






    const Items = {
        navBG,
        setNavBG,
        bodyBG,
        setBodyBG,
        iconColor,
        setIconColor,
        feildBG,
        setFeildBG,
        user,
        CreateUser,
        LogInUser,
        setWait

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