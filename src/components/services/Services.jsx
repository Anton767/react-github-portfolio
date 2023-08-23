import React from 'react'
import './services.css'
import {MdOutlineCheck} from 'react-icons/md'

const services = () => {
  return (
    <section id='services'>
      <h5>Lo que Ofrezco</h5>
      <h2>Mis Servicios</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Interfaz de Usuario UI/UX</h3>
          </div>

          <ul className='service__list'>
            <li>
              <MdOutlineCheck className='service__list-icon'/>
              <p>Structure/Feedback/Idea.</p>
            </li>

            <li>
              <MdOutlineCheck className='service__list-icon'/>
              <p>Visibility/Reuse/Build.</p>
            </li>

            <li>
              <MdOutlineCheck className='service__list-icon'/>
              <p>Simplicity/Tolerance/Learn.</p>
            </li>

            <li>
              <MdOutlineCheck className='service__list-icon'/>
              <p>Simplicity/Launch.</p>
            </li>
          </ul>
        </article>
        {/*Termina la Iterfaz de Usuario*/}

        <article className='service'>
          <div className='service__head'>
            <h3>Desarrollo Web</h3>
          </div>

          <ul className='service__list'>
            <li>
              <MdOutlineCheck className='service__list-icon'/>
              <p>Start up</p>
            </li>

            <li>
              <MdOutlineCheck className='service__list-icon'/>
              <p>Web design</p>
            </li>

            <li>
              <MdOutlineCheck className='service__list-icon'/>
              <p>Analytics</p>
            </li>

            <li>
              <MdOutlineCheck className='service__list-icon'/>
              <p>Responsive Design</p>
            </li>
          </ul>
        </article>
        {/*Termina la interfaz del Desarrollo Web*/}

        <article className='service'>
          <div className='service__head'>
            <h3>Creación de Contenido</h3>
          </div>

          <ul className='service__list'>
            <li>
              <MdOutlineCheck className='service__list-icon'/>
              <p>Pequeñas y Medianas Empresas.</p>
            </li>

            <li>
              <MdOutlineCheck className='service__list-icon'/>
              <p>Clinicas y Farmacias.</p>
            </li>

            <li>
              <MdOutlineCheck className='service__list-icon'/>
              <p>Librerias y Transporte.</p>
            </li>

            <li>
              <MdOutlineCheck className='service__list-icon'/>
              <p>Constructoras y Minería.</p>
            </li>
          </ul>
        </article>
        {/*Termina la interfaz de Creacion de Contenido*/}
      </div>
    </section>
  )
}

export default services