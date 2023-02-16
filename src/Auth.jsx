import { createContext, useContext, useEffect, useState } from "react";

import { getAuth, signOut } from "firebase/auth";

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
  }
console.log(auth.currentUser)
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setPending(false);
    });
  }, []);

  if (pending) {
    return (
      <div className=" w-full h-screen fixed right-0 flex justify-center items-center">
        <p className=" relative w-10 h-10 rounded-xl border-dotted border-orange border-[8px] border-spacing-5   border-green m-auto animate-spin  "></p>
      </div>
    );
  }

  const value = {
    auth,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
