import React, { useState, createContext, FC } from 'react'

type ThemeContextType = {
    theme: string | null;
    setTheme: (theme: string) => void | null;
};

type ThemeContextProviderProps = {
    children: React.ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType)

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string | null>("dark")

    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}
