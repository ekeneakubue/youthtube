import React from 'react'
import './navbar.css';
import menu_icon from '../../assets/menu.png';
import logo2  from '../../assets/logo2.png';
import user_icon from '../../assets/user.png';
import { CiSearch } from "react-icons/ci";
import { BsBellFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


export const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>        
        <div className="nav-left flex-div">
             <img src={menu_icon} onClick={() => setSidebar(prev=>prev===false?true:false)} className='menu_icon' alt="" />
             <Link to = "/" className='brand'>
                <img src={logo2} alt="" />
             </Link>
        </div>

        <div className="nav-middle flex-div">
            <div className="search_box flex-div">
                <input type="text" placeholder='Search' />
                <span><CiSearch /></span>
            </div>
        </div>

        <div className="nav-right flex-div">
            <span><BsBellFill /></span>
            <img src={user_icon} className='user_icon' alt="" />
        </div>
    </nav>
  )
}
