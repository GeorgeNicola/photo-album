import { FC } from 'react';
import { ThemeContextProvider, UserContextProvider, AlbumContextProvider } from 'context';

interface Props {
    children: any;
}

const ContextProvider: FC<Props> = ({ children }) => {
    return (
        <ThemeContextProvider>
            <UserContextProvider>
                <AlbumContextProvider>
                    {children}
                </AlbumContextProvider>
            </UserContextProvider>
        </ThemeContextProvider>
    )
}

export default ContextProvider