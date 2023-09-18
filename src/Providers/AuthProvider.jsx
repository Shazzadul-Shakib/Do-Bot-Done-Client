import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google login system
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Create user with email password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserName = (userName) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
    });
  };

  // login with email pass
  const loginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  }

  // reset password
  const resetPassword=(email)=>{
    return sendPasswordResetEmail(auth,email);
  }

  // Email verification
  const userVerification=()=>{
    return sendEmailVerification(auth.currentUser);
  }

  // Logout system
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Check the state of user login/logout
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser?.emailVerified){
        setUser(currentUser);
      }else{
        setUser(null);
        logout();
      }
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    googleSignIn,
    createUser,
    updateUserName,
    loginUser,
    resetPassword,
    userVerification,
    logout,

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
