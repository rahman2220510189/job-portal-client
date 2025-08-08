import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { auth } from "../../firebase/firebase__init__";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios, { Axios } from "axios";
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const  [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser= (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }
    const singOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup (auth, googleProvider)
    }
    useEffect ( () => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log("state captured",currentUser?.email);
            if(currentUser?.email){
                const user ={email: currentUser.email};
                axios.post('http://localhost:3000/jwt',user, {withCredentials:true})
                .then(res => console.log('logging', res.data))
            }
            else{
                axios.post('http://localhost:3000/logout', {}, {
                    withCredentials: true
                })
                .then(res => console.log('logout', res.data))
            }


                //put in the right place
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    },[])




    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        singOutUser,
        signInGoogle,
       

    }
    return (
      <AuthContext.Provider value={authInfo}>
        {children}

      </AuthContext.Provider>
    );
};

export default AuthProvider;