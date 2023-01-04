import { useState, useRef, useLayoutEffect, useEffect } from "react";

// Modul-Kontext-cursor
const clickPosition = { x: null, y: null };

function useContextMenu() {
  // STATE
  const [isContxtMenuOpen, setIsContextMenuOpen] = useState(false);

  const contextMenuRef = useRef(null);

  // start CONTEXT-MENU-MODAL
  function updateContextMenuVerticalPosition() {
    const menuHeight = contextMenuRef.current.offsetHeight;
    const shouldMoveUp = menuHeight > window.innerHeight - clickPosition.y;

    contextMenuRef.current.style.top = shouldMoveUp
      ? `${clickPosition.y - menuHeight}px`
      : `${clickPosition.y}px`;
  }

  function updateContextMenuHorizontalPosition() {
    const menuWidth = contextMenuRef.current.offsetWidth;
    const shouldMoveLeft = menuWidth > window.innerWidth - clickPosition.x;

    contextMenuRef.current.style.left = shouldMoveLeft
      ? `${clickPosition.x - menuWidth}px`
      : `${clickPosition.x}px`;
  }

  function updateContextMenuPosition() {
    updateContextMenuVerticalPosition();
    updateContextMenuHorizontalPosition();
  }
  // end CONTEXT-MENU-MODAL

  useLayoutEffect(() => {
    if (isContxtMenuOpen) updateContextMenuPosition();
  });

  // OPEN-MODUL useEffect
  useEffect(() => {
    if (!isContxtMenuOpen) return;

    function handleClickAway({ target }) {
      if (!contextMenuRef.current.contains(target)) closeContextMenu();
    }

    function handleEsc({ key }) {
      if (key === "Escape") closeContextMenu();
    }

    document.addEventListener("mousedown", handleClickAway);
    document.addEventListener("keydown", handleEsc);

    return () => {
      // REMOVE-MODUL
      document.removeEventListener("mousedown", handleClickAway);
      document.removeEventListener("keydown", handleEsc);
    };
  });

  const openContextMenu = (event) => {
    event.preventDefault();

    clickPosition.x = event.clientX;
    clickPosition.y = event.clientY;

    setIsContextMenuOpen(true);
  };

  const closeContextMenu = () => {
    setIsContextMenuOpen(false);
  };

  return {
    openContextMenu,
    isContxtMenuOpen,
    contextMenuRef,
  };
}

export default useContextMenu;
