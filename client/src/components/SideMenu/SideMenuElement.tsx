import { useState, useEffect, FC } from "react";

interface SideMenuElementInterface {
  id: number;
  selectedId: number;
  handleSelectElement: Function;
  Icon: FC;
  text: string;
}

function SideMenuElement({ id, selectedId, handleSelectElement, Icon, text }: SideMenuElementInterface) {
  const [active, setActive] = useState(false)

  useEffect(() => setActive(id == selectedId), [selectedId])

  const clickEvent = () => handleSelectElement(id)

  return (
    <button className="side-menu-element" data-active={active} onClick={clickEvent}>
      <Icon />
      <span> {text} </span>
    </button>
  )
}

export default SideMenuElement