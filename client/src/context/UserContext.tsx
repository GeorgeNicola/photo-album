import React, { useState, createContext, FC } from 'react'
import { UserType } from 'types';

type UserContextType = {
    user: UserType | null;
    setUser: React.Dispatch<React.SetStateAction<UserType | null>>
};

type UserContextProviderProps = {
    children: React.ReactNode;
}

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider: FC<UserContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<UserType | null>(null)

    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
        </>
    )
}
