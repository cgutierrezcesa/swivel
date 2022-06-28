import React, {useState} from 'react'
import Footer from '../componentsSWBC/Footer';
import Hero from '../componentsSWBC/Hero'
import Info from '../componentsSWBC/Info'
import { homeObjOne, homeObjTwo, homeObjThree} from '../componentsSWBC/Info/Data';
import Navbar from '../componentsSWBC/Navbar'
import Services from '../componentsSWBC/Services';
import Sidebar from '../componentsSWBC/SideBar'
import Chat from '../componentsSWBC/Chat';

const HomeSWBC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      
    </>
  )
}

export default HomeSWBC
