import React from 'react'
import { FaCss3,FaJava , FaDatabase} from 'react-icons/fa'

import './Page3.css'
import { Navigate, NavLink, Route } from 'react-router-dom'
const Page3 = () => {
    const handlesubmit=()=>{
        Navigate("https://www.google.com/search?q=complete+information+about+front+end+technology&rlz=1C1RXQR_enIN1124IN1124&oq=complete+information+about+front+end+tech&gs_lcrp=EgZjaHJvbWUqBwgBECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRifBTIHCAUQIRifBTIHCAYQIRifBTIHCAcQIRiPAtIBCTMyMzU5ajFqN6gCCLACAfEFpZevHsbZ8KU&sourceid=chrome&ie=UTF-8")
    }
  return (
    <div className='myservicehead'>
     <header>
      <h1>My service</h1>
     </header>
      <div className='myservice' >
        <aside>
            
            <h1><FaCss3 className='java'/>FRONTEND</h1>
            <p>I’m a front-end developer passionate about creating clean, responsive, and user-friendly web interfaces. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React, I specialize in turning design ideas into fast, functional, and visually appealing websites. I focus on building intuitive user experiences, optimizing performance, and ensuring accessibility across all devices. Whether it’s developing reusable components or bringing animations to life, I aim to craft interfaces that are both beautiful and effective. </p>
            <a  onClick={handlesubmit}>Learn More</a>
        </aside>
        <aside>
                <h1 ><FaJava className='java'/>BACK END</h1>
            <p>As a backend developer, I focus on building robust, scalable, and secure server-side systems that power dynamic web applications. With expertise in Java, Spring Boot, RESTful APIs, and database management, I develop efficient logic that ensures smooth data flow between the frontend and backend. I’m experienced in handling authentication, authorization, data persistence, and performance optimization. My goal is to write clean, maintainable code and design backend architectures that are reliable, responsive, and ready to scale. From API development to integration and deployment, I take pride in delivering solid foundations for full-stack solutions.

</p>
            <a  href='https://google.com' onClick={handlesubmit}>Learn More</a>
        </aside>
        <aside>
            <h1><FaDatabase className='java'/> Web Development</h1>
            <p>I’m a web developer committed to building modern, responsive, and full-featured web applications from end to end. With a strong command of both frontend and backend technologies, I craft seamless user experiences backed by reliable and scalable server-side logic. On the frontend, I specialize in HTML, CSS, JavaScript, and frameworks like React, creating intuitive and interactive interfaces. On the backend, I work with Java, Spring Boot, and REST APIs to manage data, authentication, and business logic. Whether developing a sleek UI or architecting a robust backend, I aim to deliver secure, efficient, and future-ready web solutions.

</p>
            <a onClick={handlesubmit}>Learn More</a>
        </aside>

      </div>
    </div>
  )
}

export default Page3
