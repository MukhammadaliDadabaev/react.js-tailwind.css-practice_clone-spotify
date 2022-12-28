function PlayListContextMenuItem({
  children: label,
  onMouseEnter: closePreviousSubMenuIfOpen,
}) {
  return (
    <li onMouseEnter={() => closePreviousSubMenuIfOpen()}>
      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
        {label}
      </button>
    </li>
  );
}

export default PlayListContextMenuItem;
