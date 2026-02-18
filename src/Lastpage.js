import React, { useState } from 'react'
import './Lastpage.css'
import { FaGithub,FaLinkedin,FaInstagram,Famail} from 'react-icons/fa'
import { CiMail } from "react-icons/ci";
import logo from'./mahesh.creation-removebg-preview.png'
const Lastpage = () => {
  const [data,setdata]=useState({
    name:'',
    mail:'',
    text:''
  });
  const handlechange=(e)=>{
    
    const {name,value}=e.target;
    setdata(prev=>({
      ...prev,[name]:value
    }))
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    
  }
  
  return<>
  <section className='top'>
    <div className='div1'>
      <h1 className='contact'>Contact me</h1>
      <p><CiMail/> maheshpanasa7595@gmail.com</p>
      <h3>+91-7995257595</h3>
       <aside className='social'>
        <p><FaGithub/> <a href='https://github.com/panasamahesh'>https://github.com/panasamahesh</a></p>
        <p className='p1'><a href='https://www.linkedin.com/in/mahesh-panasa-0b3b2b232'><FaLinkedin/>https://www.linkedin.com/in/mahesh-panasa-0b3b2b232</a></p>
        <p><FaInstagram/><a href='https://www.instagram.com/mahi_mahesh_0000/'> mahi_mahesh_0000</a></p>
       </aside>
       <a href="/Mahesh_Professional_Resume.pdf" download class="download">download cv</a>
       
    </div>
    <form onSubmit={handlesubmit}>
    <div className='div2'>
    <input type='text' placeholder='enter your name' name='name' required onChange={handlechange} value={data.name}/>
    <br></br>
    <input type='mail' placeholder='enter your email' name='mail' onChange={handlechange} value={data.email}/>
    <br></br>
    <textarea type='text-area' placeholder='enter your text' name='text' onChange={handlechange} value={data.text}/>
    <br></br>
    <button type='submit'>Submit</button>
     {/* <h1>Thank you</h1> */}
     <img src={logo} alt='maheshimage' className='lastimage'></img>
    </div>
    </form>
    <footer>Copyright@mahesh©️2025</footer>
  </section>
  </> 
}

export default Lastpage