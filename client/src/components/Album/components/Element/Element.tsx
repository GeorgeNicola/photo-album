import { useState, useEffect, useRef, useContext } from 'react';
import './Element.scss';

import { AlbumContext } from 'context';
import interact from "interactjs";

interface Props {
    element: any;
    pageId: number;
    elementId: number;
}

const Element = ({ element, elementId, pageId }: Props) => {
    const [uniqueID, setUniqueID] = useState<string>(`page${pageId}-element${elementId}`)
    const { album, setAlbum } = useContext(AlbumContext);
    const elementRef = useRef<HTMLDivElement>(null)


    const dragMoveListener = function (event: any) {
        let target = event.target;

        // keep the dragged position in the data-x/data-y attributes [px]
        let dataX = (parseFloat(target.getAttribute('data-x').replace(/%/g, '')) || 0)
        let dataY = (parseFloat(target.getAttribute('data-y').replace(/%/g, '')) || 0)

        // get the parent size
        let parentElement = (elementRef.current) ? elementRef.current.parentElement : null;
        let parentWidth: number = parentElement ? parentElement.getBoundingClientRect().width : 0;
        let parentHeight: number = parentElement ? parentElement.getBoundingClientRect().height : 0;

        // current transition
        let x = event.dx;
        let y = event.dy;

        // transform the transition from 'px' to '%'
        let percentageX = dataX + (x * 100) / parentWidth;
        let percentageY = dataY + (y * 100) / parentHeight;

        // translate the element [%]
        target.style.left = percentageX + "%";
        target.style.top = percentageY + "%"

        // update the posiion attributes [%]
        target.setAttribute('data-x', percentageX);
        target.setAttribute('data-y', percentageY);

        updateState()
    }

    const resizeMove = function (event: any) {
        let target = event.target;

        // keep the changed position in the data-x/data-y attributes [px]
        let dataX = (parseFloat(target.getAttribute('data-x').replace(/%/g, '')) || 0);
        let dataY = (parseFloat(target.getAttribute('data-y').replace(/%/g, '')) || 0);

        // get the parent size
        let parentElement = (elementRef.current) ? elementRef.current.parentElement : null;
        let parentWidth: number = parentElement ? parentElement.getBoundingClientRect().width : 0;
        let parentHeight: number = parentElement ? parentElement.getBoundingClientRect().height : 0;

        let percentageWidth = (event.rect.width * 100) / parentWidth;
        let percentageHeight = (event.rect.height * 100) / parentHeight;

        // update the element's style
        target.style.width = (dataX + percentageWidth) + '%';
        target.style.height = (dataY + percentageHeight) + '%';

        // current transition
        let x = 0;
        let y = 0;
        console.log("Resize event: ", event)

        // transform the transition from 'px' to '%'
        let percentageX = dataX + (x * 100) / parentWidth;
        let percentageY = dataY + (y * 100) / parentHeight;

        // translate the element [%]
        target.style.left = percentageX + "%";
        target.style.top = percentageY + "%";

        // update the posiion attributes [px]
        target.setAttribute('data-x', percentageX);
        target.setAttribute('data-y', percentageY);

        updateState()
    }

    const initDraggable = (target: string) => {
        interact(target)
            .draggable({
                // keep the element within the area of it's parent
                inertia: true,

                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: '.album-page',
                        endOnly: true
                    })
                ],
                autoScroll: true,
                listeners: {
                    move: dragMoveListener
                }
            })
            .resizable({
                preserveAspectRatio: true,
                invert: 'none',
                edges: { left: true, right: true, bottom: true, top: true },
            })
            .on('resizemove', resizeMove)
            .on('dragLeave', updateState)
    }

    const initDraggableUniquePage = () => {
        initDraggable(`#${uniqueID}`)
    }

    const removeDraggableUniquePage = () => {
        interact(`#${uniqueID}`)
            .draggable(false)
            .resizable(false)
    }

    const updateState = () => {
        // console.log("Update State")
    }

    useEffect(() => {
        initDraggableUniquePage()

        return () => {
            removeDraggableUniquePage()
        }
    }, [])

    if (element.type === "image") {
        return (
            <>
                <div ref={elementRef} id={uniqueID} className="element" draggable="true"
                    data-x={element.x}
                    data-y={element.y}
                    style={{
                        width: element.width,
                        height: element.height,
                        left: element.x,
                        top: element.y,
                    }}
                >
                    <div className="snap-point snap-point--top-left"></div>
                    <div className="snap-point snap-point--top-right"></div>
                    <div className="snap-point snap-point--bottom-left"></div>
                    <div className="snap-point snap-point--bottom-right"></div>

                    <img className="element-image" src={element.src} />
                </div>
            </>
        )
    }

    else return (<></>)
}

export default Element;


