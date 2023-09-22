import React, { useRef } from 'react'
import ImgLeft from '../assets/programming.jpg';
import transition from '../transition';
import '../Styles/Contact.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1sfo29u','template_euqmlk5', form.current, '9kJrt1SLXFXcYPIWW')
        .then((result) => {
            alert("메일을 보냈습니다.")
            console.log(result.text);
        }, (error) => {
            alert("메일을 보내질 못했습니다.")
            console.log(error.text);
        });
    };

    return (
        <div className="contact">
            <div
                className="leftSide" 
                style={{ backgroundImage: `url(${ImgLeft})` }}
            ></div>
            <div className="rightSide">
                <h1> Contact Me</h1>
                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name">Full Name</label>
                    <input name="user_name" placeholder="Enter full name..." type="text" />
                    <label htmlFor="email">Email</label>
                    <input name="user_email" placeholder="Enter Email..." type="email" />
                    <label htmlFor="message">Message</label>
                    <textarea 
                        rows="6" 
                        placeholder="Enter message..." 
                        name="message"
                        required
                    />
                    <button type="submit" value="Send">Send</button>
                </form>
            </div>
        </div>
    )
}

export default transition(Contact);