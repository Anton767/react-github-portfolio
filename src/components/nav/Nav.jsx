import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {RiUserLine} from 'react-icons/ri'
import {FiBook} from 'react-icons/fi'
import {VscWorkspaceTrusted} from 'react-icons/vsc'
import {BsTelephone} from 'react-icons/bs'


const nav = () => {

  return (
    <nav>
      <a href="#"><AiOutlineHome/></a> 
      <a href="#about"><RiUserLine/></a>
      <a href="#experience"><FiBook/></a>
      <a href="#services"><VscWorkspaceTrusted/></a>
      <a href="#contact"><BsTelephone/></a>
    </nav>
  )
}

export default nav



 








