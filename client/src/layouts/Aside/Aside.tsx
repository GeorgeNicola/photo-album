import { useState } from "react";
import "./Aside.scss";

import { menuType } from "types";
import {
  SideMenu,
  SideMenuContainer,
  ContentElements,
  ContentUnsplash
} from "components"

import { ReactComponent as ElementsIcon } from "assets/icons/icon-elements.svg";
import { ReactComponent as UploadsIcon } from "assets/icons/icon-other.svg";
import { ReactComponent as TextIcon } from "assets/icons/icon-text.svg";
import { ReactComponent as UnsplashIcon } from "assets/icons/icon-unsplash.svg";
import { ReactComponent as ChatGPTIcon } from "assets/icons/icon-chatgpt.svg";


const menuElements: menuType[] = [
  {
    name: "Elements",
    icon: ElementsIcon,
    content: <ContentElements />
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
    name: "Unsplash",
    icon: UnsplashIcon,
    content: <ContentUnsplash />
  },
  {
    name: "ChatGPT",
    icon: ChatGPTIcon,
    content: "ChatGPT Content"
  },
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
    <aside id="aside">
      <SideMenu menuElements={menuElements} isSelected={isSelected} selectedId={selectedId} handleSelectElement={selectElement} />
      <SideMenuContainer title={menuElements[selectedId].name} isVisible={isSelected}> {menuElements[selectedId].content} </SideMenuContainer>
    </aside>
  )
}

export default Aside