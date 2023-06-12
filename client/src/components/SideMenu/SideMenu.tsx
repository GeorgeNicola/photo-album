import "./SideMenu.scss";

import { MenuElement } from "../../types";
import { SideMenuElement, SideMenuActive, SideMenuContainer } from "../../components/";

interface Props {
  isSelected: boolean;
  selectedId: number;
  menuElements: MenuElement[];
  handleSelectElement: Function;
}

function SideMenu({ isSelected, selectedId, handleSelectElement, menuElements }: Props) {

  return (
    <>
      <div className="side-menu">
        <SideMenuActive id={selectedId} isSelected={isSelected} />
        {
          menuElements.map((element: MenuElement, i: number) =>
            <SideMenuElement id={i} selectedId={selectedId} handleSelectElement={handleSelectElement} Icon={element.icon} text={element.name} />
          )
        }
      </div>
    </>
  )
}

export default SideMenu