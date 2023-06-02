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
  const [selectedId, setSelectedId] = useState(0);

  const selectElement = (id) => setSelectedId(id)

  return (
    <div className="side-menu">
      <SideMenuActive id={selectedId} />

      <SideMenuElement id={1} activeElement={selectedId} handleSelectElement={selectElement} Icon={DesignIcon} text={"Design"} />
      <SideMenuElement id={2} activeElement={selectedId} handleSelectElement={selectElement} Icon={ElementsIcon} text={"Elements"} />
      <SideMenuElement id={3} activeElement={selectedId} handleSelectElement={selectElement} Icon={UploadsIcon} text={"Uploads"} />
      <SideMenuElement id={4} activeElement={selectedId} handleSelectElement={selectElement} Icon={TextIcon} text={"Text"} />
      <SideMenuElement id={5} activeElement={selectedId} handleSelectElement={selectElement} Icon={ProjectsIcon} text={"Projects"} />
      <SideMenuElement id={6} activeElement={selectedId} handleSelectElement={selectElement} Icon={OtherIcon} text={"Other"} />
      <SideMenuElement id={0} activeElement={selectedId} handleSelectElement={selectElement} Icon={OtherIcon} text={"Close"} />
    </div>
  )
}

export default SideMenu