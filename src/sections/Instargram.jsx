import React from 'react'
import "./styles/Instargram.scss"
import instar from '../utils/instar'

const Instargram = () => {
  return (
    <div className='inner instargram-inner'>
      <div className="t-wrap">
        <h2 className="tit">
          Instargram
        </h2>
        <p className="txt">
          @discoveryexpedition
        </p>
        <ul className="instar-list">
          {instar.map((i)=> (
            <li 
            key={i.id}
            className="instar-item">
              <a 
              style={{backgroundImage:`url(${i.image})`}}
              href={i.link}>
                {i.id}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Instargram