import React, { useState } from 'react'
import './home.css'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Feed } from '../../components/feed/Feed'

export const Home = ({sidebar}) => {

  const [category, setCategory] = useState(0);

  return (
    <>
        <Sidebar sidebar= {sidebar} category = {category} setCategory = {setCategory}/>
        <div className={`container ${sidebar?"":'large-container'}`}>
            <Feed category = {category}/>
        </div>
    </>
  )
}
