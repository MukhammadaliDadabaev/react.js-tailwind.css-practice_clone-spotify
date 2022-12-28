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
  let closeMenuTimer = null;

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
    // modal-link-timer
    if (closeMenuTimer) {
      stopCloseMenuTimer();

      return;
    }

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
    closeMenuTimer = setTimeout(closeMenu, 100);
  }

  function stopCloseMenuTimer() {
    clearTimeout(closeMenuTimer);
  }

  useEffect(() => stopCloseMenuTimer);

  return (
    <li className="relative" onMouseEnter={openMenu} ref={menuItemRef}>
      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
        {label} <FiChevronRight className="h-4 w-4" />
      </button>

      {menuState.isOpen && (
        <PlayListContextMenu
          menuItems={subMenuItems}
          classes={`bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default absolute ${menuState.positionClasses}`}
        />
      )}
    </li>
  );
}
export default PlayListContextMenuItemWithSubmenu;
