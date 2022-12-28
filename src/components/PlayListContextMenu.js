import React from "react";
import PlayListContextMenuItem from "./PlayListContextMenuItem";
import PlayListContextMenuItemWithSubmenu from "./PlayListContextMenuItemWithSubmenu";

function PlayListContextMenu({ classes, menuItems }, ref) {
  // Menu modal cursor
  let closePreviousSubmenu = null;

  function closePreviousSubMenuIfOpen(closeSubMenu = null) {
    if (closePreviousSubmenu) {
      closePreviousSubmenu();
    }

    closePreviousSubmenu = closeSubMenu;
  }

  return (
    <ul className={classes} ref={ref}>
      {menuItems.map(({ label, subMenuItems }) => {
        if (subMenuItems) {
          return (
            <PlayListContextMenuItemWithSubmenu
              key={label}
              subMenuItems={subMenuItems}
              onMouseEnter={closePreviousSubMenuIfOpen}
            >
              {label}
            </PlayListContextMenuItemWithSubmenu>
          );
        }

        return (
          <PlayListContextMenuItem
            key={label}
            onMouseEnter={closePreviousSubMenuIfOpen}
          >
            {label}
          </PlayListContextMenuItem>
        );
      })}
    </ul>
  );
}

export default React.forwardRef(PlayListContextMenu);
