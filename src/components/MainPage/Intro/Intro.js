import React from 'react'

import './Intro.css'
import paledot from './paledot.jpg'

export default function Intro() {
  return (
    <>
        <div className='intro__container'>
          <div className='intro__contents'>
              <div className='intro__text'>
                  Hello, I am <br></br>
                  HYEON, <br></br>
                  a Software Engineer
              </div>
              <div className='intro__image__container'>
                  <img src={paledot} alt='Pale Blue Dot' className='intro__image'/>
              </div>
          </div>
        </div>




    </>
  )
}
