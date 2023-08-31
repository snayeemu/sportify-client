import { createContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getAuth } from "firebase/auth";

import axios from "axios";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(false); // null is giving error

// main function
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [firstLogin, setFirstLogin] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

        // get and set token

        axios
          .post("https://summer-camp-server-two-delta.vercel.app/jwt", {
            email: user.email,
          })
          .then((data) => {
            // console.log(data.data.token);
            localStorage.setItem("access-token", data.data.token);
          });

        setLoading(false);
        // ...
      } else {
        // User is signed out
        // ...

        setUser(null);

        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth, firstLogin]);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const authInfo = {
    user,
    setUser,
    setFirstLogin,
    loading,
    signIn,
    createUser,
    logOut,
    updateUserProfile,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
