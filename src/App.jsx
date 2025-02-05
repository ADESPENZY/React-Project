import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Program/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
          <Title subTitle='Our PROGRAMS' title='What We Offer' />
          <Program/>
          <About />
          <Title subTitle='Gallery' title='Campus Photos' />
          <Campus/>
          <Title subTitle='TESTIMONIALS' title='What Our Student Says' />
          <Testimonial/>
          <Title subTitle='Contact Us' title='Get In Touch' />
          <Contact/>
          <Footer/>

      </div>
    </div>
  )
}

export default App
