import { FC } from "react";

interface Props {
  id: number;
  isActive: boolean;
  handleSelectElement: Function;
  Icon: FC;
  name: string;
}

function SideMenuElement({ id, isActive, handleSelectElement, Icon, name }: Props) {

  const clickEvent = () => handleSelectElement(id)

  return (
    <button className="side-menu-element" data-active={isActive} onClick={clickEvent}>
      <Icon />
      <span> {name} </span>
    </button>
  )
}

export default SideMenuElement