import image from 'assets/images/photo.jpg';
import image2 from 'assets/images/photo2.jpg';


const ContainerElements = () => {
    return (
        <div className="side-menu__elements side-menu--elements">
            <img src={image} />
            <img src={image2} />
            <img src={image2} />
        </div>
    )
}

export default ContainerElements