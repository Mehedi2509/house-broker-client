import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () =>{
        return signOut(auth)
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    };

    useEffect(() =>{
        const unscubcribe = onAuthStateChanged(auth, (currentUser) =>{
            if (currentUser){
                setUser(currentUser);
                console.log(currentUser);
            }
        });
        return () => {
            return unscubcribe();
        }
    }, []);

    const authInfo = { user, googleLogin, createUser, loginUser, logoutUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;