import React from 'react';
import FooterListItem from "./FooterListItem";

function TheFooterList(props) {
  return (
    <ul>
      {["Cookies", "Privacy"].map((label) => (
        <FooterListItem key={label} label={label} />
      ))}
    </ul>
  );
}

export default TheFooterList;


