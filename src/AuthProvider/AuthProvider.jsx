import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () =>{
        setLoading(true);
        setUser(null);
        return signOut(auth)
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    };

    useEffect(() =>{
        const unscubcribe = onAuthStateChanged(auth, (currentUser) =>{
            if (currentUser){
                setUser(currentUser);
                setLoading(false);
                console.log(currentUser);
            }
            else{
                setLoading(false);
            }
        });
        return () => {
            return unscubcribe();
        }
    }, []);

    const authInfo = { user, googleLogin, createUser, loginUser, logoutUser, loading };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;