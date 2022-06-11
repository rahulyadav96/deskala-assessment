import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [auth,setAuth] = useState(false);
    const [user,setUser] = useState(null);

    const handleLogin = (logedInUser)=>{
        setAuth(true);
        setUser(logedInUser)
    }

    const handleLogOut = ()=>{
        setAuth(false);
        setUser(null);
    }
    
  return <AuthContext.Provider
    value={{user,auth,handleLogin, handleLogOut }}
  >{children}</AuthContext.Provider>;
};
