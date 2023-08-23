import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const contact = () => {
/*Emailjs comando copiado de esa pagina para mandar mensajes de gmail */  
  const form = {useRef};

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lwy1nol', 'template_v8db40i', form.current, 't8VRpFQVHoLqtk2sE') 
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  
  /*Resetea los mensajes despues de enviarlos */    
    e.target.reset()
  };

  /*Poner Titulo y subtitulo */
  return (
    <section id='contact'>
      <h5>Ponerse en Contacto</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>menardanton@gmail.com</h5>
            <a href="mailto:menardanton@gmail.com" target='_blank'>Enviar mensaje</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Anton Mena</h5>
            <a href="https://m.me/maycol.ch.14/" target='_blank'>Enviar mensaje</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+591 76723727</h5>
            <a href="https://api.whatsapp.com/send?phone=+59176723727" target='_blank'>Enviar mensaje</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Introduce tu nombre completo' required/>
          <input type="text" name='email' placeholder='Introduce tu email' required/>
          <textarea name="message" rows="7" placeholder='Escribe un mensaje' required></textarea>
          <button type='submit'className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default contact