import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider(props){
    const [authUser, setAuthUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <AuthContext.Provider value = {value}>
            {props}
        </AuthContext.Provider>
    )
}

export default AuthContext;