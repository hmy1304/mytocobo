import React from 'react'
import { headerData } from '../utils/header'
import {useSmoothScroll} from '../hooks/useSmoothScroll'

const Nav = () => {
    const navLinks = headerData.menus
    const scrollTo = useSmoothScroll()

    return (
        <div className='navList'>
            {navLinks.map((nav)=>(
                <a href={nav.href}
                onClick={(e)=>{
                    e.preventDefault()
                    scrollTo(nav.id)
                }}>
                    {nav.label}
                </a>
            ))}
        </div>
    )
}

export default Nav