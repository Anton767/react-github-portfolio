import React from 'react'
import './testimonials.css'
import AVTR1 from '../../images/avatar1.jpg'
import AVTR2 from '../../images/avatar2.jpg'
import AVTR3 from '../../images/avatar3.jpg'
import AVTR4 from '../../images/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name:'Gonzalo Barrera',
    review:'Marco Antonio tiene grandes capacidades como desarrollador web, estoy muy agradecido por haberlo contratado, mi negocio ha crecido despues de la pandemia.'
  },

  {
    avatar: AVTR2,
    name:'Marcelo Mendoza',
    review:'Muy contento y agradecido por mejorar la pagina web en mi empresa, gracias Ingeniero Mena!!!'
  },

  {
    avatar: AVTR3,
    name:'Justo Susano',
    review:'Estaba buscando un profesional para que arregle el sistema de mi empresa por mucho tiempo, al fin encontre uno, satisfecho.'
  },

  {
    avatar: AVTR4,
    name:'Wilder Alavi',
    review:'Anton es un gran amigo y profesional, tuve algunas reuniones donde me animo hacer crecer mi negocio, con publicidad web, no me queda que agradecer.'
  },

]


const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Clientes</h5>
      <h2>Testimonios</h2>

      <Swiper className="container testimonials__container"
      
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

        {
          data.map(({avatar,name,review}, index) => {
            return(
          <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar}/>
          </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials