import { useState, useEffect, FC } from "react";

interface Props {
  id: number;
  selectedId: number;
  handleSelectElement: Function;
  Icon: FC;
  text: string;
}

function SideMenuElement({ id, selectedId, handleSelectElement, Icon, text }: Props) {
  const [active, setActive] = useState(false)

  const clickEvent = () => handleSelectElement(id)

  useEffect(() => setActive(id == selectedId), [selectedId])

  return (
    <button className="side-menu-element" data-active={active} onClick={clickEvent}>
      <Icon />
      <span> {text} </span>
    </button>
  )
}

export default SideMenuElement