import React, { useRef } from "react";
import PlayListContextMenuItem from "./PlayListContextMenuItem";
import PlayListContextMenuItemWithSubmenu from "./PlayListContextMenuItemWithSubmenu";

function PlayListContextMenu({ classes, menuItems }, ref) {
  // Menu modal cursor
  let closePreviousSubmenu = useRef(null);

  function closePreviousSubMenuIfOpen(closeSubMenu = null) {
    if (closePreviousSubmenu.current) closePreviousSubmenu.current();

    closePreviousSubmenu.current = closeSubMenu;
  }

  return (
    <ul
      className={`bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-3xl cursor-default whitespace-nowrap z-10 ${classes}`}
      ref={ref}
    >
      {menuItems.map(({ label, classes: menuItemClasses, subMenuItems }) => {
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
            classes={menuItemClasses}
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
