import React,{ useContext, useRef, useState } from "react";
import "./contact.css";
import Phone from "../../icons/phone.png";
import Email from "../../icons/email.png";
import Address from "../../icons/address.png";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
        'service_sfwqtff', 
        'template_3qjm1sg', 
        formRef.current, 
        'user_PzjtRdk677R48QYbUoDu7'
      )
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 6387871744
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              siddhantgupta1001@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              1152, Tower 5, Estancia Township, Kattankulathur, Tamil Nadu - 603203
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{marginRight:"20px"}} type="text" placeholder="Name" name="user_name" />
            <input style={{marginRight:"20px"}} type="text" placeholder="Subject" name="user_subject" /> 
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

/*
style={{backgroundColor: darkMode && "#333"}}
style={{backgroundColor: darkMode && "#333"}}
style={{backgroundColor: darkMode && "#333"}}
style={{backgroundColor: darkMode && "#333"}}

*/