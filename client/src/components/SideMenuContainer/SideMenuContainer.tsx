import "./SideMenuContainer.scss";

interface Props {
    title: string;
    isVisible: boolean;
    children?: React.ReactNode
}

function SideMenuContainer({ title, isVisible, children }: Props) {
    return (
        <div className="side-menu-container" data-visible={isVisible}>
            <h3> {title} </h3>
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default SideMenuContainer