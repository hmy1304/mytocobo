import React from 'react'
import "./styles/FixedTopBtn.scss"
import { useSmoothScroll } from '../hooks/useSmoothScroll'

const FixedTopBtn = () => {
  const scrollTo = useSmoothScroll()

  return (
    <div className='FixedTopbtn'>
      <button
      className='top-btn'
      onClick={(e)=>{
        e.preventDefault
        scrollTo('hero')
      }}>

      </button>
      <a href="#" className='talk-btn'>
        TCB
      </a>
    </div>
  )
}

export default FixedTopBtn