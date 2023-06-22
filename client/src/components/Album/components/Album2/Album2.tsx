import React, { useContext, useRef } from 'react';
import "./Album2.scss";

import HTMLFlipBook from 'react-pageflip';

import { PageType } from 'types';
import { AlbumPage } from 'components';
import { AlbumContext } from 'context';


interface Props {
    pageData: any;
    pageId: number;
}

const Page = React.forwardRef((props: Props, ref: React.LegacyRef<HTMLDivElement> | undefined) => {
    const { pageId, pageData } = props;

    return (
        <div className="preview-page-wrapper demoPage" ref={ref}>
            <AlbumPage pageId={pageId} pageData={pageData} />
        </div>
    );
});



function Album2() {
    const albumRef = useRef()
    const { album, setAlbum } = useContext(AlbumContext);


    const nextPage = () => {
        if (albumRef.current) albumRef.current.pageFlip().flipNext()
    }

    const prevPage = () => {
        if (albumRef.current) albumRef.current.pageFlip().flipPrev()
    }

    if (album === null) return (<></>)
    return (

        <div className="preview-container">
            <button onClick={prevPage}> PREVIOUS PAGE </button>
            <button onClick={nextPage}> NEXT PAGE </button>
            <HTMLFlipBook
                width={298}
                height={420}
                ref={albumRef}
                showCover={true}
                useMouseEvents={false}
            >
                {
                    album.pages.map((page: PageType, i) => {
                        return <Page key={i} pageId={page.number} pageData={page} />
                    })
                }
            </HTMLFlipBook>
        </div>
    )
}

export default Album2