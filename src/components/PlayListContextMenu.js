import React, { useRef } from "react";
import PlayListContextMenuItem from "./PlayListContextMenuItem";
import PlayListContextMenuItemWithSubmenu from "./PlayListContextMenuItemWithSubmenu";

function PlayListContextMenu({ classes, menuItems }, ref) {
  // Menu modal cursor
  let closePreviousSubmenu = useRef(null);

  function closePreviousSubMenuIfOpen(closeSubMenu = null) {
    if (closePreviousSubmenu.current) {
      closePreviousSubmenu.current();
    }

    closePreviousSubmenu.current = closeSubMenu;
  }

  return (
    <ul className={classes} ref={ref}>
      {menuItems.map(({ label, classes, subMenuItems }) => {
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
            classes={classes}
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
