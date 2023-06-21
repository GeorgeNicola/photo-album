import "./SideMenu.scss";

import { menuType } from "types";
import { SideMenuElement, SideMenuElementActive } from "components"

interface Props {
  isSelected: boolean;
  selectedId: number;
  menuElements: menuType[];
  handleSelectElement: Function;
}

function SideMenu({ isSelected, selectedId, handleSelectElement, menuElements }: Props) {

  const getIsActive = (id: number, selectedId: number, isSelected: boolean): boolean => {
    return (id === selectedId && isSelected) ? true : false
  }

  return (
    <>
      <div className="side-menu">
        <SideMenuElementActive id={selectedId} isSelected={isSelected} />
        {
          menuElements.map((element: menuType, i: number) =>
            <SideMenuElement
              key={i}
              id={i}
              isActive={getIsActive(i, selectedId, isSelected)}
              handleSelectElement={handleSelectElement}
              Icon={element.icon}
              name={element.name}
            />
          )
        }
      </div>
    </>
  )
}

export default SideMenu