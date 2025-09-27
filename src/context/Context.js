import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [isAuthenticatedToken, setIsAuthenticated] = useState(false);
    console.log(isAuthenticatedToken,"context")


    return(
        <UserContext.Provider value={{isAuthenticatedToken, setIsAuthenticated}}>
            {children}
        </UserContext.Provider>
    )

}

