import React from 'react'
import './header.css'
import PDF from './PDF'
import ME from '../../images/me.png'

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Bienvenido Soy</h5>
        <h1>Marco Antonio Mena Chambi</h1>
        <h5 className='text-light'>Desarrollador de Sistemas</h5>
        <PDF />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        </div>
    </header>
  )
}

export default header