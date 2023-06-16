import "./SideMenuContainer.scss";

interface Props {
    title: string;
    isVisible: boolean;
    children?: React.ReactNode
}

function SideMenuContainer({ title, isVisible, children }: Props) {
    return (
        <div className="side-menu-container" data-visible={isVisible}>
            <h3 className="side-menu-container__title"> {title} </h3>
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default SideMenuContainer