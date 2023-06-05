import { useEffect, useRef } from "react";

interface SideMenuActive {
  id: number | null;
  isSelected: boolean;
}

function SideMenuActive({ id, isSelected }: SideMenuActive) {

  const setActiveElement = () => {
    document.documentElement.style.setProperty("--active-element-id", `${id}`);
  }

  useEffect(() => {
    setActiveElement()
  })

  return (
    <div className="side-menu-active" data-visible={isSelected}></div>
  )
}

export default SideMenuActive