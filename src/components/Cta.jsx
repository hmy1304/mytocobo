import React from 'react'
import categories from '../utils/cta'
import "./styles/Cta.scss"

const Cta = () => {

  return (
    <div className='inner cta-inner'>
      <ul className="cta-list">
        {categories.map((c)=>(
          <li key={c.id}>
            <a href={c.id}>
              <div
              style={{background:`url(${c.img.src})`}} 
              className="img-wrap"></div>
              <p>
                {c.name}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cta