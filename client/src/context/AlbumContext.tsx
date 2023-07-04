import React, { useState, useEffect, createContext, FC, Dispatch, SetStateAction } from 'react'

import { AlbumType } from 'types';

type AlbumContextType = {
    album: AlbumType | null;
    setAlbum: Dispatch<SetStateAction<AlbumType>>;
};

type AlbumContextProviderProps = {
    children: React.ReactNode;
}

export const AlbumContext = createContext({} as AlbumContextType)

export const AlbumContextProvider: FC<AlbumContextProviderProps> = ({ children }) => {
    const [album, setAlbum] = useState<AlbumType>(null)

    useEffect(() => {
        console.log("Album State Provider: ", album)
    }, [album])

    return (
        <>
            <AlbumContext.Provider value={{ album, setAlbum }}>
                {children}
            </AlbumContext.Provider>
        </>
    )
}
