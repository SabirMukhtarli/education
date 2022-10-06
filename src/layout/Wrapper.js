import React from 'react'
import BeginSection from './BeginSection'
import Footer from './Footer'
import Nav from './Nav'
import SubscriptSection from './SubscriptSection'

export default function 
({children}) {
  return (
    <div>
     <BeginSection/>
     <Nav/>
     {children}
     <SubscriptSection/>
     <Footer/>   
    </div>
  )
}
