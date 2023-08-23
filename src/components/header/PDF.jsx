import React from 'react'
import CV from '../../images/cv.pdf'

const PDF = () => {
  return (
    <div className='pdf'>
        <a href={CV} download className='btn'>Descargar CV</a>
        <a href="#contact" className='btn btn-primary'>Contactame</a>
    </div>
  )
}

export default PDF