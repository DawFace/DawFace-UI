import AuthContext from "./AuthContext";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider