import { useState, FC } from "react";
import "./Aside.scss";

import { MenuElement } from "../../types";
import { SideMenu, SideMenuContainer, SideMenuElementsContainer } from "../../components"

import { ReactComponent as DesignIcon } from "../../assets/icons/icon-design.svg";
import { ReactComponent as ElementsIcon } from "../../assets/icons/icon-elements.svg";
import { ReactComponent as UploadsIcon } from "../../assets/icons/icon-other.svg";
import { ReactComponent as TextIcon } from "../../assets/icons/icon-text.svg";
import { ReactComponent as ProjectsIcon } from "../../assets/icons/icon-projects.svg";
import { ReactComponent as OtherIcon } from "../../assets/icons/icon-uploads.svg";


const menuElements: MenuElement[] = [
  {
    name: "Design",
    icon: DesignIcon,
    content: <DesignIcon />
  },
  {
    name: "Elements",
    icon: ElementsIcon,
    content: <SideMenuElementsContainer />
  },
  {
    name: "Uploads",
    icon: UploadsIcon,
    content: "Uploads Content"
  },
  {
    name: "Text",
    icon: TextIcon,
    content: "Text Content"
  },
  {
    name: "Projects",
    icon: ProjectsIcon,
    content: "Projects Content"
  },
  {
    name: "Other",
    icon: OtherIcon,
    content: "Other Content"
  }
]

function Aside() {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>(0);

  const selectElement = (id: number) => {
    if (isSelected === false) {
      setIsSelected(true)
      setSelectedId(id)
    }
    else if (selectedId === id) {
      setIsSelected(!isSelected)
    } else {
      setSelectedId(id)
    }
  }

  return (
    <aside>
      <SideMenu isSelected={isSelected} selectedId={selectedId} menuElements={menuElements} handleSelectElement={selectElement} />
      <SideMenuContainer title={menuElements[selectedId].name} isVisible={isSelected}> {menuElements[selectedId].content} </SideMenuContainer>
    </aside>
  )
}

export default Aside