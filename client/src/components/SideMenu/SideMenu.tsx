import { useState } from "react";
import "./SideMenu.scss";

import SideMenuElement from "./SideMenuElement";
import SideMenuActive from "./SideMenuActive";

import { ReactComponent as DesignIcon } from "../../assets/icons/icon-design.svg";
import { ReactComponent as ElementsIcon } from "../../assets/icons/icon-elements.svg";
import { ReactComponent as UploadsIcon } from "../../assets/icons/icon-other.svg";
import { ReactComponent as TextIcon } from "../../assets/icons/icon-projects.svg";
import { ReactComponent as ProjectsIcon } from "../../assets/icons/icon-text.svg";
import { ReactComponent as OtherIcon } from "../../assets/icons/icon-uploads.svg";

function SideMenu() {
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
    <div className="side-menu">
      <SideMenuActive id={selectedId} isSelected={isSelected} />

      <SideMenuElement id={0} selectedId={selectedId} handleSelectElement={selectElement} Icon={DesignIcon} text={"Design"} />
      <SideMenuElement id={1} selectedId={selectedId} handleSelectElement={selectElement} Icon={ElementsIcon} text={"Elements"} />
      <SideMenuElement id={2} selectedId={selectedId} handleSelectElement={selectElement} Icon={UploadsIcon} text={"Uploads"} />
      <SideMenuElement id={3} selectedId={selectedId} handleSelectElement={selectElement} Icon={TextIcon} text={"Text"} />
      <SideMenuElement id={4} selectedId={selectedId} handleSelectElement={selectElement} Icon={ProjectsIcon} text={"Projects"} />
      <SideMenuElement id={5} selectedId={selectedId} handleSelectElement={selectElement} Icon={OtherIcon} text={"Other"} />
      <SideMenuElement id={6} selectedId={selectedId} handleSelectElement={selectElement} Icon={OtherIcon} text={"Close"} />
    </div>
  )
}

export default SideMenu