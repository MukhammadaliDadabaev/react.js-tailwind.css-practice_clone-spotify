import React from 'react';
import navItems from "./Data/DataNav";
import NavItem from "./NavItem";

function TheNav(props) {
  return (
    <nav>
      {navItems.map((navItem) => (
        <NavItem key={navItem.label} {...navItem}/>
      ))}
    </nav>
  );
}

export default TheNav;
