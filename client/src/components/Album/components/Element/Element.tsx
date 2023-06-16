import { useEffect, useRef } from 'react';
import './Element.scss';

import interact from "interactjs";


interface Props {
    element: any;
    pageId: number;
    elementId: number;
}

const Element = ({ element, elementId, pageId }: Props) => {
    const elementRef = useRef<HTMLImageElement>(null)

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
        let x = event.x;
        let y = event.y;

        // transform the transition from 'px' to '%'
        let percentageX = dataX + (x * 100) / parentWidth;
        let percentageY = dataY + (y * 100) / parentHeight;

        // translate the element [%]
        target.style.left = percentageX + "%";
        target.style.top = percentageY + "%";

        // update the posiion attributes [px]
        target.setAttribute('data-x', percentageX);
        target.setAttribute('data-y', percentageY);
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
                edges: { left: true, right: true, bottom: true, top: true }
            })
            .on('resizemove', resizeMove)
            .on('dragLeave', updateState)
    }


    const updateState = () => {
        console.log("Update State")
    }

    useEffect(() => {
        let uniqueID = `page${pageId}-element${elementId}`

        if (elementRef.current != null) {
            elementRef.current.id = uniqueID;
            initDraggable(`#${uniqueID}`)
        }

        return () => {
            interact(`#${uniqueID}`)
                .draggable(false)
                .resizable(false)
        }
    }, [])


    if (element.type === "image") {
        return (
            <>
                <img ref={elementRef} className="element-image" id="test" draggable="true"
                    src={element.src}
                    data-x={element.x}
                    data-y={element.y}
                    style={{
                        width: element.width,
                        height: element.height,
                        position: "absolute",
                        left: element.x,
                        top: element.y,
                        resize: "both",
                        overflow: "auto"
                    }}
                />
            </>
        )
    }

    else return (<></>)
}

export default Element;







function dragMoveListener(event: any) {
    var target = event.target;

    // keep the dragged position in the data-x/data-y attributes
    let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    // target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    target.style.left = x + "px";
    target.style.top = y + "px"

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

}


// interact('.element-image')
//     .draggable({
//         onmove: dragMoveListener,
//         modifiers: [
//             interact.modifiers.restrict({
//                 restriction: 'parent',
//                 endOnly: true
//             })
//         ]
//     })
//     .resizable({
//         preserveAspectRatio: false,
//         edges: { left: true, right: true, bottom: true, top: true }
//     })
//     .on('resizemove', function (event) {
//         var target = event.target,
//             x = (parseFloat(target.getAttribute('data-x')) || 0),
//             y = (parseFloat(target.getAttribute('data-y')) || 0);

//         // update the element's style
//         target.style.width = event.rect.width + 'px';
//         target.style.height = event.rect.height + 'px';

//         // translate when resizing from top or left edges
//         x += event.deltaRect.left;
//         y += event.deltaRect.top;

//         // target.style.webkitTransform = target.style.transform =
//         //     'translate(' + x + 'px,' + y + 'px)';
//         target.style.left = x + "px";
//         target.style.top = y + "px"

//         target.setAttribute('data-x', x);
//         target.setAttribute('data-y', y);
//         // target.textContent = event.rect.width + '×' + event.rect.height;
//     });
