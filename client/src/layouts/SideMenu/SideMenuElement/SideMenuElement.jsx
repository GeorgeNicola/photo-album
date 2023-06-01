import { useState, useEffect } from "react";

function SideMenuElement({ id, activeElement, handleSelectElement, Icon, text }) {
  const [active, setActive] = useState(false)

  useEffect(() => setActive(id == activeElement), [activeElement])

  const clickEvent = () => handleSelectElement(id)

  return (
    <button className="side-menu-element" data-active={active} onClick={clickEvent}>
      <Icon />
      <span> {text} </span>
    </button>
  )
}

export default SideMenuElement