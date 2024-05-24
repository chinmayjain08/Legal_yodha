import React from 'react';
import './about.css';
import image from '../../images/logomain.png'
import f1 from './features/f1.png'
import f2 from './features/f2.png'
import f3 from './features/f3.png'
import f4 from './features/f4.png'
import f5 from './features/f5.png'
import f6 from './features/f6.png'
import Footer from '../../components/footer/Footer';

function About() {
  return (
    <>
    <section id="page-header" class="about-header">
        <h2>
            #KnowUs
        </h2>
        <p>LEGAL YODHA</p>
    </section>
    
    <section id="about-head">
        <img src={image} alt=""/>
        <div>
            <h2>Who We Are?</h2>
            <p>
            Legal Yodha is more than just a service platform; we're your partners in navigating the complex worlds of legal and financial matters. With a commitment to excellence and a passion for empowering our clients, we offer personalized consultations and solutions tailored to your unique needs. Whether you're seeking advice on legal issues or financial planning, Legal Yodha is here to guide you every step of the way, ensuring your peace of mind and financial success.
            </p>
            <abbr title="">
            Legal Yodha is your trusted platform for expert legal and financial consulting. Our team of seasoned professionals is dedicated to providing reliable guidance and support for all your legal and financial needs.
            </abbr>
            <br/><br/>
            <marquee loop="-1" scrollamount="5" width="100%" bgcolor="#ccc">
                Legal Yodha is your one-stop solution for all consulting needs.
            </marquee>
        </div>
    </section>

    {/* <section id="about-app">
        <h1> Download Our <a href="#"> App </a></h1>
        <div class="video">
            <video src={vid} autoplay muted loop></video>
        </div>
    </section> */}
 
    <section id="features" class="f-about">
    <div class="fe-box">
        <img src={f1}/>
        <h6>Free Consultance</h6>
    </div>
    <div class="fe-box">
        <img src={f2}/>
        <h6>Online Service</h6>
    </div>
    <div class="fe-box">
        <img src={f3}/>
        <h6>Save Money</h6>
    </div>
    <div class="fe-box">
        <img src={f4}/>
        <h6>Hassle Free</h6>
    </div>
    <div class="fe-box">
        <img src={f5}/>
        <h6>Finance Sorted</h6>
    </div>
    <div class="fe-box">
        <img src={f6}/>
        <h6>24/7 Support</h6>
    </div>
    </section>

    
    </>
  )
}

export default About