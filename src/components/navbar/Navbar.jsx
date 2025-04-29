import React from 'react'
import './navbar.css';
import menu_icon from '../../assets/menu.png';
import logo  from '../../assets/logo.jpg';
import search_icon from '../../assets/search-icon.png'
import user_icon from '../../assets/user.png';
import { BsBellFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


export const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>        
        <div className="nav-left flex-div">
             <img src={menu_icon} onClick={() => setSidebar(prev=>prev===false?true:false)} className='menu_icon' alt="" />
             <Link to = "/" className='brand'>
                <span>YT</span>v
             </Link>
        </div>

        <div className="nav-middle flex-div">
            <div className="search_box flex-div">
                <input type="text" placeholder='Search' />
                <img src={search_icon} alt="" />
            </div>
        </div>

        <div className="nav-right flex-div">
            <span><BsBellFill /></span>
            <img src={user_icon} className='user_icon' alt="" />
        </div>
    </nav>
  )
}
