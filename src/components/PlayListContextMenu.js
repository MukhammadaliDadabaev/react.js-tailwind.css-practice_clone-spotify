import React, { useEffect } from "react";
import PlayListContextMenuItem from "./PlayListContextMenuItem";

function PlayListContextMenu({ classes, menuItems, onClose }) {
  // useEffect
  useEffect(() => {
    // OPEN-MODUL
    document.addEventListener("mousedown", onClose);

    return () => {
      // REMOVE-MODUL
      document.removeEventListener("mousedown", onClose);
    };
  });

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
