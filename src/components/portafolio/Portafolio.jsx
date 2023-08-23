import React from 'react'
import './portafolio.css'
import IMG1 from '../../images/port1.png'
import IMG2 from '../../images/port2.png'
import IMG3 from '../../images/port3.png'
import IMG4 from '../../images/port4.png'
import IMG5 from '../../images/port5.png'
import IMG6 from '../../images/port6.png'

// Metodo para jalar imagenes desde el github y links
const data = [
  {
    id:1,
    image: IMG1,
    title: 'Salar Tours & Bolivia',
    github:'https://github.com',
    demo:'https://sali.com'
  },

  {
    id:2,
    image: IMG2,
    title: 'Sali & App Bares y Discotecas',
    github:'https://github.com',
    demo:'https://sali.com'
  },

  {
    id:3,
    image: IMG3,
    title: 'Portafolio de Diseñador',
    github:'https://github.com',
    demo:'https://sali.com'
  },

  {
    id:4,
    image: IMG4,
    title: 'Victoria & Fashion',
    github:'https://github.com',
    demo:'https://sali.com'
  },

  {
    id:5,
    image: IMG5,
    title: 'Portafolio de Diseñador',
    github:'https://github.com',
    demo:'https://sali.com'
  },

  {
    id:6,
    image: IMG6,
    title: 'Portafolio de Diseñador',
    github:'https://github.com',
    demo:'https://sali.com'
  }
]


const portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>Trabajos Realizados</h5>
      <h2>Portafolio</h2>

      <div className="container portafolio__container">
    {
    data.map(({id, image, title, github, demo}) => {
        return(
          <article key={id} className='portafolio__item'>
          <div className="portafolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portafolio__item-cta'>
          <a href={github}  className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Enlace & Link</a>
          </div>
          </article>
        )
    })
    }

    {/**Otro metodo de llamar links y github */}

    {/*    <article className='portafolio__item'>
        <div className="portafolio__item-image">
          <img src={IMG2} alt="" />
        </div>
        <h3>Portafolios Realizados</h3>
        <div className='portafolio__item-cta'>
        <a href="https://sali.com"className='btn' target='_blank'>Github</a>
        <a href="https://sali.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>

        <article className='portafolio__item'>
        <div className="portafolio__item-image">
          <img src={IMG3} alt="" />
        </div>
        <h3>Portafolios Realizados</h3>
        <div className='portafolio__item-cta'>
        <a href="https://sali.com"className='btn' target='_blank'>Github</a>
        <a href="https://sali.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>

        <article className='portafolio__item'>
        <div className="portafolio__item-image">
          <img src={IMG4} alt="" />
        </div>
        <h3>Portafolios Realizados</h3>
        <div className='portafolio__item-cta'>
        <a href="https://sali.com"className='btn' target='_blank'>Gitgub</a>
        <a href="https://sali.com" className='btn btn-primary' target='_blank'>fashion calzard</a>
        </div>
        </article>

        <article className='portafolio__item'>
        <div className="portafolio__item-image">
          <img src={IMG5} alt="" />
        </div>
        <h3>Portafolios Realizados</h3>
        <div className='portafolio__item-cta'>
        <a href="https://sali.com"className='btn' target='_blank'>Github</a>
        <a href="https://sali.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>

        <article className='portafolio__item'>
        <div className="portafolio__item-image">
          <img src={IMG6} alt="" />
        </div>
        <h3>Portafolios Realizados</h3>
        <div className='portafolio__item-cta'>
        <a href="https://sali.com"className='btn' target='_blank'>Github</a>
        <a href="https://sali.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article> */}
      </div>
    </section>
  )
}

export default portafolio