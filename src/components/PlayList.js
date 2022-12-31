import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// components
import PlayListCover from "./PlayListCover";
import PlayListButtonPlay from "./PlayListButtonPlay";
import PlayListTitle from "./PlayListTitle";
import PlayListDescription from "./PlayListDescription";
import PlayListContextMenu from "./PlayListContextMenu";

const menuItems = [
  {
    label: "Add to Your Library",
  },
  {
    label: "Share",

    subMenuItems: [
      {
        label: "Copy link to playlist",
        alternateLabel: "Copy Spotify URI",
        classes: "min-w-[150px]",
      },
      {
        label: "Embed playlist",
      },
    ],
  },
  {
    label: "About recommendations",
  },
  {
    label: "Open in Desktop app",
  },
];

// Modul-Kontext-cursor
const clickPosition = { x: null, y: null };

function PlayList({ classes, coverUrl, title, description, toggleScrolling }) {
  // STATE
  const [isContxtMenuOpen, setIsContextMenuOpen] = useState(false);

  const contextMenuRef = useRef(null);

  // BG-CLASSES
  const bgClasses = isContxtMenuOpen
    ? "bg-[#272727]"
    : "bg-[#181818] hover:bg-[#272727]";

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
    toggleScrolling(!isContxtMenuOpen);

    if (isContxtMenuOpen) {
      updateContextMenuPosition();
    }
  });

  // OPEN-MODUL useEffect
  useEffect(() => {
    if (!isContxtMenuOpen) return;

    function handleClickAway(event) {
      if (!contextMenuRef.current.contains(event.target)) {
        closeContextMenu();
      }
    }

    function handleEsc(event) {
      if (event.keyCode === 27) {
        closeContextMenu();
      }
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

  return (
    <a
      href="/"
      className={`relative p-4 rounded-md duration-200 group ${classes} ${bgClasses}`}
      onClick={(event) => event.preventDefault()}
      onContextMenu={openContextMenu}
    >
      <div className="relative">
        <PlayListCover url={coverUrl} />

        <PlayListButtonPlay />
      </div>

      <PlayListTitle title={title} />

      <PlayListDescription description={description} />

      {isContxtMenuOpen && (
        <PlayListContextMenu
          ref={contextMenuRef}
          menuItems={menuItems}
          classes="fixed bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10"
        />
      )}
    </a>
  );
}

export default PlayList;
