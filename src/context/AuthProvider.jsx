import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebaseConfig";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
   return signOut(auth)
  }

  useEffect(() => {
  
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      
     if(currentUser){
        setUser(currentUser);
        setLoading(false);

        const user = {email: currentUser?.email};
        axios.post('https://job-portal-server-delta-two.vercel.app/jwt', user ,{
          withCredentials: true
        })
        .then(res => console.log(res.data))
        

     }else{

      axios.post('https://job-portal-server-delta-two.vercel.app/logout',{}, {
        withCredentials:true
      })
      .then(res => console.log(res.data))

      setUser(null)
      setLoading(false);
     }

      return () => {
        unsubscribe();
      };
    });

  }, []);

  const authInfo = {
    user,
    loading,
    createNewUser,
    setUser,
    setLoading,
    signInUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
