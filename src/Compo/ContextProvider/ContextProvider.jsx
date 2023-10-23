import auth from "../../Firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const context = createContext(null)

const ContextProvider = ({ children }) => {

    const [navBG, setNavBG] = useState("#242526");
    const [bodyBG, setBodyBG] = useState("#18191a")
    const [iconColor, setIconColor] = useState("#b0b3b8")
    const [feildBG, setFeildBG] = useState("#3a3b3c")
    const [user, setuser] = useState({})
    const [wait, setWait] = useState(true)
    const [loading, setLoading] = useState(true)



    const CreateUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)

    }

    const LogInUser = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const LogOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setuser(user)
            setLoading(false)
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
        LogOut,
        setWait,
        loading

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