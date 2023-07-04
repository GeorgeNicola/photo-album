import image from 'assets/images/photo.jpg';
import image2 from 'assets/images/photo2.jpg';

import { Drag } from 'components';

const ContentElements = () => {

    return (
        <div className="side-menu__elements side-menu--elements">
            <Drag isDragging={true} src={image}>
                <img src={image} />
            </Drag>
            <Drag isDragging={true} src={image2}>
                <img src={image2} />
            </Drag>
        </div>
    )
}

export default ContentElements