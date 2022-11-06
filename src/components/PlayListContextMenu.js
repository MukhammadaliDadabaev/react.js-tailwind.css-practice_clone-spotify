import React from "react";
import PlayListContextMenuItem from "./PlayListContextMenuItem";
import PlayListContextMenuItemWithSubmenu from "./PlayListContextMenuItemWithSubmenu";

function PlayListContextMenu({ classes, menuItems }, ref) {
  return (
    <ul className={classes} ref={ref}>
      {menuItems.map(({ label, subMenuItems }) => {
        if (subMenuItems) {
          return (
            <PlayListContextMenuItemWithSubmenu
              key={label}
              subMenuItems={subMenuItems}
            >
              {label}
            </PlayListContextMenuItemWithSubmenu>
          );
        }

        return (
          <PlayListContextMenuItem key={label}>{label}</PlayListContextMenuItem>
        );
      })}
    </ul>
  );
}

export default React.forwardRef(PlayListContextMenu);
