// import SvgIconsSelector from "./SvgIconsSelector";
import { FiPlusCircle, FiHeart } from 'react-icons/fi';
import { HiOutlineViewBoards } from 'react-icons/hi';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';


const activeNavItemClasses =
  'flex items-center text-white bg-[#282828] mx-2 px-4 py-2 rounded';
const navItemClasses =
  'flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300';

const navItems = [
  {
    label: 'Home',
    classes: activeNavItemClasses,
    icon: <AiOutlineHome className="h-6 w-6" />
  },
  {
    label: 'Search',
    classes: navItemClasses,
    icon: <AiOutlineSearch className="h-6 w-6" />,
  },
  {
    label: 'Your Library',
    classes: `${navItemClasses} mb-6`,
    icon: <HiOutlineViewBoards className="h-6 w-6" />,
  },
  {
    label: 'Create Playlist',
    classes: navItemClasses,
    icon: <FiPlusCircle className="h-6 w-6" />,
  },
  {
    label: 'Liked Songs',
    classes: navItemClasses,
    icon: <FiHeart className="h-6 w-6" />,
  },
];

export default navItems;
