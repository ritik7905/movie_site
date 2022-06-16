import React from 'react'
import {NavLink} from "react-router-dom"

const Navigation = () => {
  return (
    <div>
      <ul className="lists">
        <li>
          <NavLink to = "/">Home</NavLink>
        </li>
        <li>
          <NavLink to = "/about">About</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navigation