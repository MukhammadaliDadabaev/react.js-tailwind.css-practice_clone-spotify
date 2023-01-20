import { useState, useRef, useEffect } from "react";
import usePosition from "./useContextMenuPosition";

function useContextMenu() {
  // STATE
  const [isContxtMenuOpen, setIsContextMenuOpen] = useState(false);

  const contextMenuRef = useRef(null);

  // start CONTEXT-MENU-MODAL
  const updateClickCordinates = usePosition(contextMenuRef, isContxtMenuOpen);
  // end CONTEXT-MENU-MODAL

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

    updateClickCordinates(event.clientX, event.clientY);

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
