import React, { useEffect } from "react";
import PlayListContextMenuItem from "./PlayListContextMenuItem";

function PlayListContextMenu(
  { classes, menuItems, onClose: handleClose },
  ref
) {
  // OPEN-MODUL useEffect
  useEffect(() => {
    if (!handleClose) return;

    function handleClickAway(event) {
      if (!ref.current.contains(event.target)) {
        handleClose();
      }
    }

    function handleEsc(event) {
      if (event.keyCode === 27) {
        handleClose();
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

  return (
    <ul className={classes} ref={ref}>
      {menuItems.map(({ label, subMenuItems }) => (
        <PlayListContextMenuItem key={label} subMenuItems={subMenuItems}>
          {label}
        </PlayListContextMenuItem>
      ))}
    </ul>
  );
}

export default React.forwardRef(PlayListContextMenu);
