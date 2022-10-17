import React, { useState, useRef, useLayoutEffect } from "react";
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

  function updateContextMenuPosition() {
    contextMenuRef.current.style.top = `${clickPosition.y}px`;
    contextMenuRef.current.style.left = `${clickPosition.x}px`;
  }

  useLayoutEffect(() => {
    toggleScrolling(!isContxtMenuOpen);

    if (isContxtMenuOpen) {
      updateContextMenuPosition();
    }
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
          onClose={closeContextMenu}
        />
      )}
    </a>
  );
}

export default PlayList;
