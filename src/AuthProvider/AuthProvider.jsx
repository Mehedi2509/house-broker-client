import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sellPosts, setSellPosts] = useState([]);

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
                const name = currentUser.displayName;
                const email = currentUser.email;
                const img = currentUser.photoURL;
                const userData = {name, email, img};

                setUser(userData);
                setLoading(false);
            }
            else{
                setLoading(false);
            }
        });
        return () => {
            return unscubcribe();
        }
    }, []);
    
    // Fatching sell posts
    useEffect( ()=> {
        fetch("https://house-borker-server.vercel.app/sellposts")
        .then((res) => res.json())
        .then((data) => setSellPosts(data))
    }, []);

    const handleDeleteSellPost = (id) => {
        setSellPosts(sellPosts.filter((sellPost) => sellPost._id !== id));
    };


    const authInfo = { user, googleLogin, createUser, loginUser, logoutUser, loading, sellPosts, handleDeleteSellPost };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;