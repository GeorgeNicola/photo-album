import { FC } from 'react';

import { useDrag } from 'react-dnd'

interface Props {
    isDragging: any;
    src: string;
    children?: React.ReactNode;
}

const Drag: FC<Props> = ({ isDragging, src, children }) => {
    const [{ opacity }, dragRef] = useDrag(
        () => ({
            type: "IMAGE",
            item: { src },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1
            })
        }),
        []
    )
    return (
        // <div className="drag-element" ref={dragRef} style={{ opacity }}>
        //     <img src={src} />
        // </div>
        <div className="drag-element" ref={dragRef} style={{ opacity }}>
            {children}
        </div>
    )
}

export default Drag;