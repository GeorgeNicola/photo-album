import "./AlbumPage.scss"
import { useContext } from 'react'
import { Element } from 'components'

import { AlbumContext } from 'context';
import { AlbumType } from 'types';
import { useDrop } from 'react-dnd'

interface Props {
    pageData: any;
    pageId: number;
}

const AlbumPage = ({ pageData, pageId }: Props) => {
    const { album, setAlbum } = useContext(AlbumContext);

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'IMAGE',
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }),
        drop: (item: any, monitor) => (
            // console.log("item: ", item),
            // console.log("monitor: ", monitor),
            dropElement(item)
        )
    }))

    const dropElement = ({ src }: any) => {
        const newElement = {
            type: "image",
            src: src,
            width: "50%",
            height: "auto",
            x: "0%",
            y: "0%"
        }

        const newState: AlbumType = Object.assign({}, album);
        newState.pages[pageId].elements.push(newElement)

        console.log(`Element ${newElement.type} dropped in page ${pageId}`)
        setAlbum(newState)
    }

    return (
        <div className="album-page album-page--animation"
            ref={drop}
            data-page={pageId}
            data-isover={isOver}
            data-candrop={canDrop}
        >
            <span>{pageId} </span>
            {
                pageData.elements.map((elementData: any, i: number) =>
                    <Element key={i} pageId={pageId} elementId={i} element={elementData} />
                )
            }
        </div>
    )
}

export default AlbumPage;