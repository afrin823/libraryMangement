import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/Firebase/firebase.config";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    try { 
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
 

      return userCredential.user;
    } catch (error) {
     

      throw new Error(error.message);
    }
  };
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => unsubscribe();
  }, [user]);

  const stateValue = {
    user,
    loading,
    setLoading,
    login,
    logout,
    setSearchText,
    searchText,
  };
  return (
    <AuthContext.Provider value={stateValue}>{children}</AuthContext.Provider>
  );
};
