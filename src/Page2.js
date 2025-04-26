import React, { useState } from 'react'
import './Page2.css'
import photo from './old.jpg'
import { FaGraduationCap,FaLaptop,FaBriefcase } from 'react-icons/fa'
import { Link, Links, NavLink } from 'react-router-dom'
const Page2 = () => {
    const [state,setstate]=useState("skills")
    return <>
        <div className='head'>
            <div className='phot'>
                <div className='image'>
                    <img src={photo} alt='available' className='pic' />
                </div>
            </div>
            <div className='content'>
                  <div className='content1'>
                    <div className='contentlo'>
                    <h1 className='about'>About me</h1>

                <p>My name is PANASA MAHESH.i am completed B.Degree B.COM looking for a challenging role in a reputed organization to utilize my technical and managementskills for the growth of the organization as well to enhance by knowledge about new and emerging trends in it sector.</p>
                </div>
                
                <div className='skills'>
                    <div className='buttons'>
                        <button onClick={()=>setstate("skills") } ><FaLaptop/>skills</button>
                        <button onClick={()=>setstate("experience")}><FaBriefcase/>experience</button>
                        <button onClick={()=>setstate("education")}><FaGraduationCap/>education</button>
                        
                    </div>
                    <section className='ski'>
                        {state==="skills"&&(
                            <div>
                          
                                <h4>Front end</h4>
                                <p>HTML,CSS3,JAVASCRIPT(ES6+)</p>
                                <p>REACT</p>
                              <h4>BackEND</h4>
                                <p>javaSE & javaEE</p>
                                <p>Spring framework</p>
                                <p>Hibernate,jpa</p>
                                <h4>Database</h4>
                                <p>My sql</p>
                                <p>pl sql</p>
                                <h4>Others</h4>
                                <p>OOPS,Design patterns,postman,maven,Git,GitHub</p>
                                
                            </div>
                        )}
                        {state==="experience"&&(
                            <div className='expe'>
                                <h4>Experience</h4>
                                <p>Full statck Development at Grahith software solution</p>
                                <p>1 year at SAP maintanence</p>
                            </div>
                        )}
                        {state==="education"&&(
                            <div className='ed'>
                                
                                
                                <p>2017-2024</p>
                                <h2>B.COM COMPUTERS</h2>
                                <h2> CGPA-6.5/10</h2>
                                <h2>AMBEDKAR OPEN UNIVERSITY</h2>
                                <br></br>

                                <p>2015-2017</p>
                                <h2>CEC</h2>
                                <h2> CGPA-5.8/10</h2>
                                <h2>GOVT JUNIOR COLLEGE NALGONDA</h2>
                                <br></br>

                                <p>2014-2015</p>
                                <h2>SSC</h2>
                                <h2> CGPA-6.2/10</h2>
                                <h2>ZPHS KANCHANAPALLY</h2>
                                <br></br>
                               
                            </div>
                        )}
                    </section>
                        
                    </div>
                    </div>
                </div>

            </div>

        
    </>
}

export default Page2
