import React from 'react'
import Typed from 'react-typed'
export default function Header() {
    return (
       <div className="header-wraper">

           <div className="main-info">
               <h1>web development and websites promotions</h1>
               <Typed className='typed-text' 
               strings={['web design','web development','facebook ads sciol media marketing','google ads']}
               typeSpeed={40}
               backSpeed={60}
               />
               <a href="#" className='btn-main-offer'>Contact Me</a>
           </div>
       </div>
    )
}
