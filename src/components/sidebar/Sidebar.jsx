import React from 'react'
import './sidebar.css'
import { ImHome } from "react-icons/im";
import { IoNewspaper, IoGameController } from "react-icons/io5";
import { FaBlog } from "react-icons/fa";
import { MdSportsBasketball, MdOutlineLiveTv, MdOutlineBiotech  } from "react-icons/md";
import { IoCarSportSharp, IoShapes } from "react-icons/io5";
import { GiMusicalNotes } from "react-icons/gi";

export const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className={`side-link ${category === 0 ? "active":""}`} onClick={()=>setCategory(0)}>
                <span><ImHome /></span><p>Home</p>                
            </div>
            <div className={`side-link ${category === 20 ? "active":""}`} onClick={()=>setCategory(20)}>
                <span><IoGameController /></span><p>Gaming</p>                
            </div>
            <div className={`side-link ${category === 24 ? "active":""}`} onClick={()=>setCategory(24)}>
                <span><MdOutlineLiveTv /></span><p>Entertainments</p>                
            </div>
            <div className={`side-link ${category === 23 ? "active":""}`} onClick={()=>setCategory(23)}>
                <span><IoShapes /></span><p>Comedy</p>                
            </div>
            <div className={`side-link ${category === 2 ? "active":""}`} onClick={()=>setCategory(2)}>
                <span><IoCarSportSharp /></span><p>Autos & Vehicles</p>                
            </div>  
            <div className={`side-link ${category === 28 ? "active":""}`} onClick={()=>setCategory(28)}>
                <span><MdOutlineBiotech /></span><p>Technology</p>                
            </div>
            <div className={`side-link ${category === 10 ? "active":""}`} onClick={()=>setCategory(10)}>
                <span><GiMusicalNotes /></span><p>Music</p>                
            </div>
            <div className={`side-link ${category === 17 ? "active":""}`} onClick={()=>setCategory(17)}>
                <span><MdSportsBasketball /></span><p>Sports</p>                
            </div>            
            <div className={`side-link ${category === 22 ? "active":""}`} onClick={()=>setCategory(22)}>
                <span><FaBlog /></span><p>Blogs</p>                
            </div>
            <div className={`side-link ${category === 25 ? "active":""}`} onClick={()=>setCategory(25)}>
                <span><IoNewspaper /></span><p>News</p>                
            </div>
        </div>
    </div>
  )
}
