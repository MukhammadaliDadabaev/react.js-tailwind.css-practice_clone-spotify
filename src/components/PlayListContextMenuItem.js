import React, { useState, useRef } from "react";
// react-icons
import { FiChevronRight } from "react-icons/fi";
import PlayListContextMenu from "./PlayListContextMenu";

function PlayListContextMenuItem({ children: label, subMenuItems }) {
  // STATE
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPositionClass, setMenuPositionClass] = useState("left-full");
  // Ref
  const menuItemRef = useRef(null);

  // Modal-Link
  function getMenuPositionClass() {
    const menuItem = menuItemRef.current;
    const menuWidth = menuItem.offsetWidth;
    const windowWidth = window.innerWidth;
    const menuItemEndCoordinate = menuItem.getBoundingClientRect().right;
    const shouldMoveMenuLeft = menuWidth > windowWidth - menuItemEndCoordinate;

    return shouldMoveMenuLeft ? "right-full" : "left-full";
  }

  function openMenu() {
    setIsMenuOpen(true);
    setMenuPositionClass(getMenuPositionClass);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  if (subMenuItems) {
    return (
      <li
        className="relative"
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        ref={menuItemRef}
      >
        <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
          {label} <FiChevronRight className="h-4 w-4" />
        </button>

        {isMenuOpen && (
          <PlayListContextMenu
            menuItems={subMenuItems}
            classes={`bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default absolute top-0 ${menuPositionClass}`}
          />
        )}
      </li>
    );
  }

  return (
    <li>
      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
        {label}
      </button>
    </li>
  );
}

export default PlayListContextMenuItem;
