// import React,{useRef} from 'react'
// import { Element } from 'react-scroll'
// import emailjs from '@emailjs/browser';
// import './Contact.css';
// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_slusp0a', 'template_q76boi5', form.current, 'HdSs6BKmstWgbpT0N')
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         }
//       );
//   };
//   return (
//    <Element className="contact" id="contact">
//      <section id="contacts--container">
//       <div classname="contacts-body">
//         <h1 className="contactPageTitle">Contact Me</h1>
//           <form className="contactForm" ref={form} onSubmit={sendEmail}>
//             <div id="input-container">
//             <label htmlFor='Name' className="{class.label}" >   Name   </label>
//               <input type="text" className="name" name="from_name" placeholder="Your Name" />
//             </div>
//             <div id="input-container">  
//             <label htmlFor='Name' className="{class.label}" >
//                                     Email
//                                     </label>
//               <input type="email" className="email" name="from_email" placeholder="Your Email" />
//             </div>    
//               <div id="input-container">
//               <label htmlFor='Name' className="{class.label}" >
//                                     Message
//                                     </label> 

//               <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
//               </div>
//               <div className='submit-btn'>
//                 <button type="submit" value="send" className="submitBtn">Submit</button>
//               </div>
            
//             </form>
//       </div>
  
//     </section>

   
//     </Element>
//   )
// }

// export default Contact

import React, { useRef, useState } from 'react';
import { Element } from 'react-scroll';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value;
    const email = form.current.from_email.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
      setErrorMessage('All fields are required.');
      return;
    }

    emailjs
      .sendForm('service_slusp0a', 'template_q76boi5', form.current, 'HdSs6BKmstWgbpT0N')
      .then(
        () => {
          setSuccessMessage('Email sent successfully!');
          setErrorMessage('');
          form.current.reset();
        },
        (error) => {
          setErrorMessage('Failed to send email. Please try again.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <Element className="contact" id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <section className="container">
        <div className="contacts-body">
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <div id="input-container">
              <input type="text" className="name" name="from_name" placeholder=" " required />
              <label htmlFor="Name" className="label">Name</label>
            </div>
            <div id="input-container">
              <input type="email" className="email" name="from_email" placeholder=" " required />
              <label htmlFor="Email" className="label">Email</label>
            </div>
            <div id="input-container">
              <textarea className="msg" name="message" rows="5" placeholder=" " required></textarea>
              <label htmlFor="Message" className="label">Message</label>
            </div>
            <div className="submit-btn">
              <button type="submit" value="send" className="submitBtn">Submit</button>
            </div>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </section>
    </Element>
  );
};

export default Contact;
