import { useEffect, useRef } from "react";

function SideMenuActive({ id }) {
  const sideMenuElement = useRef(0);

  useEffect(() => {
    sideMenuElement.current.style.opacity = (id != 0) ? 1 : 0;

    if (id != 0) {
      if (window.innerWidth >= 560) sideMenuElement.current.style.transform = "translateY(" + (id - 1) * 100 + "%)";
      if (window.innerWidth < 560) sideMenuElement.current.style.transform = "translateX(" + (id - 1) * 100 + "%)";
    }
  })

  return (
    <div className="side-menu-active" ref={sideMenuElement}></div>
  )
}

export default SideMenuActive