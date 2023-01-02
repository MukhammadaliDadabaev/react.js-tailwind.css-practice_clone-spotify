import React, { useState, useRef, useEffect } from "react";
// react-icons
import { FiChevronRight } from "react-icons/fi";
import PlayListContextMenu from "./PlayListContextMenu";

function PlayListContextMenuItemWithSubmenu({
  children: label,
  subMenuItems,
  onMouseEnter: closePreviousSubMenuIfOpen,
}) {
  // STATE
  const [menuState, setMenuState] = useState({
    isOpen: false,
    positionClasses: "",
  });
  // Ref
  const menuItemRef = useRef(null);

  // modal-link-timer
  const closeMenuTimer = useRef(null);

  // Modal-hoher card
  const bgClass = menuState.isOpen ? "bg-[#3e3e3e]" : "hover:bg-[#3e3e3e]";

  // Modal-Link-X
  function getMenuPositionXClass() {
    const menuItem = menuItemRef.current;
    const menuItemWidth = menuItem.offsetWidth;
    const windowWidth = window.innerWidth;
    const menuItemRidhtCoordX = menuItem.getBoundingClientRect().right;
    const shouldMoveMenuLeft =
      menuItemWidth > windowWidth - menuItemRidhtCoordX;

    return shouldMoveMenuLeft ? "right-full" : "left-full";
  }

  // Modal-Link-Y
  function getMenuPositionYClass() {
    const windowHeight = window.innerHeight;
    const menuItem = menuItemRef.current;
    const menuHeight = menuItem.offsetHeight * subMenuItems.length;
    const menuItemBottomCoordY = menuItem.getBoundingClientRect().bottom;
    const shouldMoveMenuUp = menuHeight > windowHeight - menuItemBottomCoordY;

    return shouldMoveMenuUp ? "bottom-0" : "top-0";
  }

  function getMenuPositionClasses() {
    return `${getMenuPositionYClass()} ${getMenuPositionXClass()}`;
  }

  function openMenu() {
    closePreviousSubMenuIfOpen(startCloseMenuTimer);

    // madal-open
    setMenuState({
      isOpen: true,
      positionClasses: getMenuPositionClasses(),
    });
  }

  function closeMenu() {
    setMenuState({
      isOpen: false,
      positionClasses: "",
    });
  }

  // modal-link-timer
  function startCloseMenuTimer() {
    closeMenuTimer.current = setTimeout(closeMenu, 100);
  }

  function stopCloseMenuTimer() {
    clearTimeout(closeMenuTimer.current);
  }

  useEffect(() => stopCloseMenuTimer);

  return (
    <li className="relative" onMouseEnter={openMenu} ref={menuItemRef}>
      <button
        className={`w-full p-3 text-left hover:text-white cursor-default flex justify-between items-center ${bgClass}`}
      >
        {label} <FiChevronRight className="h-4 w-4" />
      </button>

      {menuState.isOpen && (
        <PlayListContextMenu
          menuItems={subMenuItems}
          classes={`absolute ${menuState.positionClasses}`}
        />
      )}
    </li>
  );
}
export default PlayListContextMenuItemWithSubmenu;
