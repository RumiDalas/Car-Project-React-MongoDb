import { createContext, useState, useEffect } from "react";
import { getAuth ,createUserWithEmailAndPassword ,onAuthStateChanged ,signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createUser = (email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
            console.log('currentUser',currentUser)
        });

        return ()=> {
            return unsubscribe()
        }
    }
        ,[])


    const authInfo ={
        user,
        loading,
        createUser,
        signInUser

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;