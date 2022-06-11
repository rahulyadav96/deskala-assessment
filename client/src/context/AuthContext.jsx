import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [auth,setAuth] = useState(false);
    

    const handleAuth = (logedInUser)=>{
        setAuth(true);
    }

    const handleLogOut = ()=>{
        setAuth(false);
    }
    
  return <AuthContext.Provider
    value={{auth,handleAuth, handleLogOut }}
  >{children}</AuthContext.Provider>;
};
