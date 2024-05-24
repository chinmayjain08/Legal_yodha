import React from 'react'
import './contact.css';
import { FaClock, FaMap, FaPhone } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

function ContactUs() {

  return (
    <div className='contact'>
        <section id="page-header">
        <h2>
            #let's_talk
        </h2>
        <p classname="contact-p">
            LEAVE A MESSAGE. We Love to hear from you!
        </p>
    </section>

    <section id="contact">
        <div classname="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <p> <FaMap/> 41, Shri Ram Enclave 3rd, Vatika Road, Jaipur</p>
                </li>
                <li>
                    <p><FaMailBulk/> legalyodha3107@gmail.com</p>
                </li>
                <li>
                    <p><FaPhone/> 9057771028</p>
                </li>
                <li>
                    <p><FaClock/> Monday to Saturday : 10.00am to 7.00pm</p>
                </li>
                <li id="socials">
                    <a href="https://www.instagram.com/legalyodha.in?igsh=M3VudHFhNnJub3Y3&utm_source=qr"> <FaInstagram/> <p> : Instagram</p></a>   
                    <a href="https://www.facebook.com/profile.php?id=61558871204556&mibextid=LQQJ4d"><FaFacebook/> <p> : Facebook</p></a>
                </li>
            </div>
        </div>
        <div classname="map">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7777.998662786958!2d77.64154817427921!3d12.907764213590964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15400539b081%3A0xd2ab89c277c8e8df!2s1stop!5e0!3m2!1sen!2sin!4v1659879093781!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.9897661925106!2d75.8111989747523!3d26.744702667291804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9003b8d87b3%3A0x8ddd9c6d9093a5be!2sShri%20Ram%20Enclave%2C%20Vatika%20Road%2C%20Shyosinghpura%20At%20kallawala%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1715267473812!5m2!1sen!2sin" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>

    <section id="form-details">
        <form name="contact-us" method="post"  action='https://script.google.com/macros/s/AKfycbzDFXLfADPS8hDDAUYWjxw3VHJwXK_4SBPpLumfQsydqpx1qk6KDkf0EKmksdNvYstR/exec' id='my-form'>
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you..</h2>
            <input type="text" placeholder="Your Name" name="Name"/>
            <input type="email" placeholder="E-mail" name="E-mail" required/>
            <input type="text" placeholder="Subject" name="Subject"/>
            <textarea name="Message" id="" cols="30" rows="6" placeholder="Your Message" required/>
            <button id='submit-contact' type='submit'>Submit</button>
        </form>
   </section>

    </div>
  )
}

export default ContactUs;