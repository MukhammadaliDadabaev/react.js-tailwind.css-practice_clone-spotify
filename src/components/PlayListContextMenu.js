import React from 'react';
// import PlayListContextSubmenu from "./PlayListContextSubmenu";
import PlayListContextMenuItem from "./PlayListContextMenuItem";



function PlayListContextMenu({ classes, menuItems }) {
  return (
    <ul className={classes}>

      {menuItems.map(({label, subMenuItems }) => (
        <PlayListContextMenuItem key={label} subMenuItems={subMenuItems}>{label}</PlayListContextMenuItem>
      ))}

    </ul>

  );
}

export default PlayListContextMenu;