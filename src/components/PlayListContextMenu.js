import React from "react";
import PlayListContextMenuItem from "./PlayListContextMenuItem";

function PlayListContextMenu({ classes, menuItems, onClose }) {
  // Event Listing
  document.addEventListener("mousedown", onClose);

  return (
    <ul className={classes}>
      {menuItems.map(({ label, subMenuItems }) => (
        <PlayListContextMenuItem key={label} subMenuItems={subMenuItems}>
          {label}
        </PlayListContextMenuItem>
      ))}
    </ul>
  );
}

export default PlayListContextMenu;
