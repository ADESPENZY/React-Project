import React, { useEffect, useRef } from 'react';
import './Testimonial.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/testimonial_1.jpg';
import user_2 from '../../assets/testimonial_2.jpg';
import user_3 from '../../assets/testimonial_3.jpg';
import user_4 from '../../assets/testimonial_4.jpg';

const Testimonial = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) { // Adjust based on the number of slides (4 slides = 3 steps)
      tx -= 25; // Move by 25% (since each slide takes 25% of the container width)
    } else {
      tx = 0; // Reset to the first slide if at the end
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25; // Move back by 25%
    } else {
      tx = -50; // Reset to the last slide if at the beginning
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

   useEffect(() => {
    const interval = setInterval(slideForward, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='testimonial'>
      <img src={back_icon} alt="Previous" className='back-btn' onClick={slideBackward} />
      <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className='user-info'>
                <img src={user_1} alt="Jah Grant" />
                <div>
                  <h3>Jah Grant</h3>
                  <span>SpenCity, USA</span>
                </div>
              </div>
              <p>
                At SpenCity, students are empowered to reach their full potential through innovative teaching methods and a supportive
                learning environment. The school fosters creativity, critical thinking, and collaboration, preparing students for success in a rapidly changing world.
                SpenCity is more than a school—it’s a community where dreams are nurtured and futures are built.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className='user-info'>
                <img src={user_2} alt="Atoyebi Joshua" />
                <div>
                  <h3>Atoyebi Joshua</h3>
                  <span>SpenCity, USA</span>
                </div>
              </div>
              <p>
                At SpenCity, students are empowered to reach their full potential through innovative teaching methods and a supportive
                learning environment. The school fosters creativity, critical thinking, and collaboration, preparing students for success in a rapidly changing world.
                SpenCity is more than a school—it’s a community where dreams are nurtured and futures are built.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className='user-info'>
                <img src={user_3} alt="Adeoti Oluwaseun" />
                <div>
                  <h3>Adeoti Oluwaseun</h3>
                  <span>SpenCity, USA</span>
                </div>
              </div>
              <p>
                At SpenCity, students are empowered to reach their full potential through innovative teaching methods and a supportive
                learning environment. The school fosters creativity, critical thinking, and collaboration, preparing students for success in a rapidly changing world.
                SpenCity is more than a school—it’s a community where dreams are nurtured and futures are built.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className='user-info'>
                <img src={user_4} alt="Gabriel Judith" />
                <div>
                  <h3>Gabriel Judith</h3>
                  <span>SpenCity, USA</span>
                </div>
              </div>
              <p>
                At SpenCity, students are empowered to reach their full potential through innovative teaching methods and a supportive
                learning environment. The school fosters creativity, critical thinking, and collaboration, preparing students for success in a rapidly changing world.
                SpenCity is more than a school—it’s a community where dreams are nurtured and futures are built.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;