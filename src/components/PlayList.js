import { useState, useLayoutEffect, useEffect } from "react";

// components
import PlayListCover from "./PlayListCover";
import PlayListButtonPlay from "./PlayListButtonPlay";
import PlayListTitle from "./PlayListTitle";
import PlayListDescription from "./PlayListDescription";
import PlayListContextMenu from "./PlayListContextMenu";
import useContextMenu from "../hooks/useContextMenu";

function generateMenuItems(isAlternate = false) {
  return [
    {
      label: "Add to Your Library",
    },
    {
      label: "Share",
      subMenuItems: [
        {
          label: isAlternate ? "Copy Spotify URI" : "Copy link to playlist",
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
}

function PlayList({ classes, coverUrl, title, description, toggleScrolling }) {
  // STATE
  const [menuItems, setMenuItem] = useState(generateMenuItems());

  const {
    openContextMenu: openMenu,
    isContxtMenuOpen: isMenuOpen,
    contextMenuRef: menuRef,
  } = useContextMenu();

  useLayoutEffect(() => toggleScrolling(!isMenuOpen));

  // Modal-menu-link
  useEffect(() => {
    if (!isMenuOpen) return;

    function handleAltKeydown({ key }) {
      if (key === "Alt") setMenuItem(generateMenuItems(true));
    }

    function handleAltKeyup({ key }) {
      if (key === "Alt") setMenuItem(generateMenuItems());
    }

    document.addEventListener("keydown", handleAltKeydown);
    document.addEventListener("keyup", handleAltKeyup);

    return () => {
      document.removeEventListener("keydown", handleAltKeydown);
      document.removeEventListener("keyup", handleAltKeyup);
    };
  });
  // BG-CLASSES
  const bgClasses = isMenuOpen
    ? "bg-[#272727]"
    : "bg-[#181818] hover:bg-[#272727]";

  return (
    <a
      href="/"
      className={`relative p-4 rounded-md duration-200 group ${classes} ${bgClasses}`}
      onClick={(event) => event.preventDefault()}
      onContextMenu={openMenu}
    >
      <div className="relative">
        <PlayListCover url={coverUrl} />

        <PlayListButtonPlay />
      </div>

      <PlayListTitle title={title} />

      <PlayListDescription description={description} />

      {isMenuOpen && (
        <PlayListContextMenu
          ref={menuRef}
          menuItems={menuItems}
          classes="fixed divide-y divide-[#3e3e3e]"
        />
      )}
    </a>
  );
}

export default PlayList;
