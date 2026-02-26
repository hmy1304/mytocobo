import React from 'react'
import { headerData } from '../utils/header'

const Util = () => {
  const utilData = headerData.utils

  return (
    <ul className='utilList'>
      {utilData.map((u)=>(
        <li key={u.id}>
          <a href={u.href}>
            <img src={u.icon} alt={u.label} />
          </a>
        </li>
      ))}

    </ul>
  )
}

export default Util