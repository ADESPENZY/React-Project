import React from 'react'
import './Program.css'
import Program1 from '../../assets/program1.jpg'
import Program2 from '../../assets/program2.jpg'
import Program3 from '../../assets/program3.jpg'

const Program = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={Program1} alt="Program 1" />
            <div className='caption'>
                <i class="fas fa-graduation-cap"></i>
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={Program2} alt="Program 2" />
            <div className='caption'>
                <i class="fas fa-user-graduate"></i>
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={Program3} alt="Program 3" />
            <div className='caption'>
                <i class="fas fa-microscope"></i>
                <p>PhD Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Program