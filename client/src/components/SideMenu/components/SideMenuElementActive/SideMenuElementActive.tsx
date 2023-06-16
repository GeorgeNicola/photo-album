import { useEffect } from "react";
import './SideMenuElementActive.scss'

interface Props {
  id: number;
  isSelected: boolean;
}

function SideMenuElementActive({ id, isSelected }: Props) {

  const setActiveElement = () => {
    let aside = document.querySelector("aside");
    if (aside) aside.style.setProperty("--active-element-id", `${id}`);
  }

  useEffect(() => {
    setActiveElement()
  })

  return (
    <div className="side-menu-active" data-visible={isSelected}></div>
  )
}

export default SideMenuElementActive