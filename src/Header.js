import React, { useState } from 'react'
import logo from './name_logo-removebg-preview.png'
import {Link,Element} from 'react-scroll'
import './Header.css'
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    const handlescroll=()=>{
        window.scrollTo({
            top:0, behavior:'smooth'
        })
    }
    const Home=()=>{
       window.scrollTo({
        top:1500,behavior:'smooth'
       })
    }
    const Service=()=>{
        window.scrollTo({
         top:2000,behavior:'smooth'
        })
     }
     const Profile=()=>{
        window.scrollTo({
         top:2400,behavior:'smooth'
        })
     }
     const Contact=()=>{
        window.scrollTo({
         top:3000,behavior:'smooth'
        })
     }
    
  return<>
   <main className='main'>
         <div className='a'>
        <button onClick={Header} >Home</button>
        <button onClick={Home}>About</button>
        <button onClick={Service}>Service</button>
        <button onClick={Profile}>Profile</button>
        <button onClick={Contact}>Contact</button>
        
        </div> 
       
    <div className='Header'>
        <img src={logo} alt='logo' className='image1'/>     
        </div>
       < div className='content'>
       < aside className='aside1'>
        <h2>Hi,My Name is</h2>
        <h1> PANASA MAHESH</h1>
        <h2>I am a passionate</h2>
        {/* <span className="element">JAVA FULL STACK DEVELOPER</span> */}
        {/* <br></br> */}
        <TypeAnimation sequence={["WEB DESIGNER...!",5000,"FRONTEND DEVELOPER...!",3000,"BACK END DEVELOPER...!",3000]}speed={70} repeat={Infinity} wrapper='span'/>
        </aside>
       </div>
    
    </main>
</>
}

export default Header
