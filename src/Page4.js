import React from 'react'
import flight from './download.jpg'
import student from './download.png';
import atm from './download (1).jpg'
import './Page4.css'
const Page4 = () => {
   return <main className='page4head' style={{display:'flex',flexDirection:'column',gap:'0.9rem'}}>
      <div className='page4'>
         <h1>My work</h1>
         <section className='mywork'>
            <aside className='Image'>
               <img src={flight} alt='flight' title='Flight management system' />
               <div className='matter'>
                  <p>The Flight Management System is a software application designed to handle and streamline the operations of an airline or airport. The system allows for the efficient management of flights, including scheduling, ticket bookings, cancellations, passenger information, and aircraft data. It provides a user-friendly interface for both administrators and users to interact with flight-related services.</p>
               </div>
            </aside>
            <aside className='Image'>
               <img src={student} alt='student' title='Student management system' />
               <div className='matter'>
                  <p>A Student Database Management System is a software application designed to efficiently store, manage, and retrieve student-related information within an educational institution. It helps automate administrative tasks, improve record-keeping accuracy, and provide quick access to essential student data.</p>
                  </div>
            </aside>
            <aside className='Image'>
               <img src={atm} alt='atm' title='Atm management system' />
               <div className='matter'>
                  <p>An ATM (Automated Teller Machine) Management System is a software solution designed to control and manage ATM operations for banks and financial institutions. It ensures secure transactions, real-time monitoring, and smooth customer experiences when accessing banking services through ATMs.</p>
                  </div>   
            </aside>

         </section>
      </div>
      < div className='seemore'>
         <div><h2><a href='https://github.com/panasamahesh'>See More</a></h2></div>
      </div>
   </main>
}

export default Page4
