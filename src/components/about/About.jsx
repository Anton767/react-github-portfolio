import React from 'react'
import './about.css'
import ME from '../../images/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {HiOutlineUsers} from 'react-icons/hi'
import {RiFolderChartLine} from 'react-icons/ri'

const about = () => {
  return (
    <section id='about'>
      <h5>Saber Mas</h5>
      <h2>Acerca de Mi</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>3+ años trabajo</small>
            </article>

            <article className='about__card'>
              <HiOutlineUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>50+ en el mundo</small>
            </article>

            <article className='about__card'>
              <RiFolderChartLine className='about__icon'/>
              <h5>Proyectos</h5>
              <small>60+ completados</small>
            </article>
            </div> 
        <p>
        Un gran Informatico Profesional e Inovador, ofrezco eficiencia
        y responsabilidad en los diferentes proyectos asignados hacia
        mi persona. Transformando tu empresa al siguiente nivel.
        </p>

        <a href="#contact" className='btn btn-primary'>Contactame</a>
        
        </div>
      </div>
    </section>
  )
}

export default about