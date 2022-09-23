import React from 'react';
import PlayListCover from "./PlayListCover";
import PlayListButtonPlay from "./PlayListButtonPlay";
import PlayListTitle from "./PlayListTitle";
import PlayListDescription from "./PlayListDescription";
import PlayListContextMenu from "./PlayListContextMenu";

function PlayList() {
  return (
    <a
      href="/"
      className="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group"
    >
      <div className="relative">

        <PlayListCover/>

        <PlayListButtonPlay/>

      </div>

      <PlayListTitle/>

      <PlayListDescription/>

      <PlayListContextMenu/>

    </a>
  );
}

export default PlayList;