import "./AlbumPage.scss"
import { Element } from 'components'

interface Props {
    pageData: any;
    pageId: number;
}

const AlbumPage = ({ pageData, pageId }: Props) => {

    return (
        <div className="album-page album-page--animation">
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