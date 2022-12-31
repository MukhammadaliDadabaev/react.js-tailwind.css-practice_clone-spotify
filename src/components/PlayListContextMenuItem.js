import { useState, useEffect } from "react";

function PlayListContextMenuItem({
  children: originalLabel,
  alternateLabel,
  classes,
  onMouseEnter: closePreviousSubMenuIfOpen,
}) {
  // state-modal-menu
  const [label, setLabel] = useState(originalLabel);

  useEffect(() => {
    if (!alternateLabel) return;

    function handleAltKeydown({ key }) {
      if (key === "Alt") setLabel(alternateLabel);
    }

    function handleAltKeyup({ key }) {
      if (key === "Alt") setLabel(originalLabel);
    }

    document.addEventListener("keydown", handleAltKeydown);
    document.addEventListener("keyup", handleAltKeyup);

    return () => {
      document.removeEventListener("keydown", handleAltKeydown);
      document.removeEventListener("keyup", handleAltKeyup);
    };
  });

  return (
    <li onMouseEnter={() => closePreviousSubMenuIfOpen()}>
      <button
        className={`w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default ${classes}`}
      >
        {label}
      </button>
    </li>
  );
}

export default PlayListContextMenuItem;
