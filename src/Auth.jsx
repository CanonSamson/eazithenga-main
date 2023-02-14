import { createContext, useContext, useEffect, useState } from "react";

import { getAuth } from "firebase/auth";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function useUserAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [pending, setPending] = useState(true);

  const auth = getAuth();

  function logout() {
    signOut(auth);
    navigate("/");
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setPending(false);
    });
  }, []);

  if (pending) {
    return (
      <div className=" w-full h-screen fixed right-0 flex justify-center items-center">
        <p className=" relative w-5 h-5 rounded-full border-r-[2px] border-rl-[2px]  border-green m-auto animate-spin  "></p>
      </div>
    );
  }

  const value = {
    auth,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
