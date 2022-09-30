import React from 'react';
import PlayListCover from "./PlayListCover";
import PlayListButtonPlay from "./PlayListButtonPlay";
import PlayListTitle from "./PlayListTitle";
import PlayListDescription from "./PlayListDescription";
import PlayListContextMenu from "./PlayListContextMenu";

const menuItems = [
  {
    label: "Add to Your Library"
  },
  {
    label: "Share",

    subMenuItems: [
      {
        label: "Copy link to playlist"
      },
      {
        label: "Embed playlist"
      }
    ]
  },
  {
    label: "About recommendations"
  },
  {
    label: "Open in Desktop app"
  }
]

function PlayList({ classes, coverUrl, title, description }) {
  return (
    <a
      href="/"
      className={`relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group ${classes}`}
    >
      <div className="relative">

        <PlayListCover url={coverUrl} />

        <PlayListButtonPlay/>

      </div>

      <PlayListTitle title={title} />

      <PlayListDescription description={description} />

      <PlayListContextMenu menuItems={menuItems} classes="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10 hidden group-hover:block"/>

    </a>
  );
}

export default PlayList;