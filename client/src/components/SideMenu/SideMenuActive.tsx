import { useEffect } from "react";

interface Props {
  id: number;
  isSelected: boolean;
}

function SideMenuActive({ id, isSelected }: Props) {

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