import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [username, setUsername] = useState('grumpy19');

    return (
        <UserContext.Provider value={[username, setUsername]}>
            {children}
        </UserContext.Provider>
    );
};