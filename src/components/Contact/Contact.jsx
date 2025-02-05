import React, { useState } from 'react'; // Import useState
import './Contact.css';
import msg_icon from '../../assets/msg_icon.avif';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mkgozwoa', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: data,
      });

      if (response.ok) {
        setStatus('Thanks for your message!');
        form.reset(); // Clear the form after successful submission
      } else {
        setStatus('Oops! Something went wrong.');
      }
    } catch (error) {
      setStatus('Oops! There was a problem submitting your form.');
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us A Message <img src={msg_icon} alt="Message Icon" /></h3>
        <p>
          Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to
          us as we strive to provide exceptional service to our university community.
        </p>
        <ul>
          <li><img src={mail_icon} alt="Mail Icon" />Contact@JoshTheWiz.dev</li>
          <li><img src={phone_icon} alt="Phone Icon" />+1 832 987-7890</li>
          <li><img src={location_icon} alt="Location Icon" />77 Massachusetts Ave, Cambridge <br /> MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />
          <label>Write Your Messages Here</label>
          <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn'>Submit Here</button>
        </form>
        {status && <span className="form-status">{status}</span>} {/* Display submission status */}
      </div>
    </div>
  );
};

export default Contact;