import React from "react";
import PlayListContextMenuItem from "./PlayListContextMenuItem";

function PlayListContextMenu({ classes, menuItems }, ref) {
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
