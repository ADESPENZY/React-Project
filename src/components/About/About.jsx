import React from 'react'
import './About.css'
import About_img from '../../assets/About-img.jpg'
import Play_icon from  '../../assets/play-icon.png'

const About = ({setPlay}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={About_img} alt="" className='about-img'/>
            <img src={Play_icon} alt="" className='play-icon' onClick={() => {setPlay(true)}} />
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>
                Our university is committed to providing a world-class education that empowers students to excel in their chosen fields. With a focus on innovation,
                 critical thinking, and leadership, we prepare our graduates to tackle global challenges and make a meaningful impact in their communities. 
                 Our diverse and inclusive environment fosters creativity and collaboration, ensuring that every student has the opportunity to thrive.
            </p>
            <p>
                At the heart of our mission is a dedication to academic excellence and personal growth. Through cutting-edge research, hands-on learning experiences,
                and a strong emphasis on ethical leadership, we equip our students with the skills and knowledge they need to succeed in a rapidly changing world.
                Join us in shaping the future and becoming a part of a legacy that inspires change and drives progress.
            </p>
            <p>
                At the heart of our mission is a dedication to academic excellence and personal growth. Through cutting-edge research, hands-on learning experiences,
                and a strong emphasis on ethical leadership, we equip our students with the skills and knowledge they need to succeed in a rapidly changing world.
                Join us in shaping the future and becoming a part of a legacy that inspires change and drives progress.
            </p>
        </div>

    </div>
  )
}

export default About