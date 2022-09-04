import Link from 'next/link'
import {IoSettingsOutline} from "react-icons/io5"
import {RiChatNewFill} from "react-icons/ri"
import {MdOutlineArrowForwardIos} from "react-icons/md"
import {FaYoutube, FaMicrophone} from 'react-icons/fa'
import {FiChevronDown} from 'react-icons/fi'

const Header = () => {
  return (
      <>
      <div className="navbar bg-base-100 drop-shadow rounded-b-lg fixed top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li tabIndex={0} className="drop-shadow-xl">
          <Link href="/new" passHref><a>
            <RiChatNewFill />New<span className="flex-grow" /><MdOutlineArrowForwardIos />
          </a></Link>
          <ul className="p-2 bg-base-100">
            <li><a><FaYoutube />YouTube</a></li>
            <li><a><FaMicrophone />Mic</a></li>
          </ul>
        </li>
        <li><a><IoSettingsOutline />Settings</a></li>
      </ul>
    </div>
    <Link href="/" passHref><a className="btn btn-ghost normal-case text-xl">SnapCaption</a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li tabIndex={0} className="drop-shadow-xl">
        <a>
          <RiChatNewFill />New<span className="flex-grow" /><FiChevronDown />        </a>
        <ul className="p-2 bg-white">
          <li><a><FaYoutube />YouTube</a></li>
          <li><a><FaMicrophone />Mic</a></li>
        </ul>
      </li>
      <li><a><IoSettingsOutline />Settings</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link href="/new" passHref><a className="btn">New Caption</a></Link>
  </div>
</div>
<div className="pb-[4.4rem]" /></>
  )
}

export default Header
