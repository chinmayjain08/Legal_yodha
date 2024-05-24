import './Hero.css'
import 'animate.css';
import { Link } from 'react-router-dom';

const Hero = () => {
    
    return (
        <div className='hero'>
            <div className="heroSection">
                <div className="heroContainer">
                    <div className="heading animate__animated animate__backInDown">
                        <h1><span>Legal Yodha</span> Your Trusted CA Consultancy Partner.</h1>
                    </div>
                    <div className="ssHeading">
                        <h5>Empowering Success, Ensuring Compliance</h5>
                    </div>
                    <div className="subHeading  animate__animated animate__backInUp">
                        <h4>Strategic Solutions, Trusted Guidance: Elevate your financial journey with our CA consultancy expertise. </h4>
                    </div>
                    <div className="btns">
                        {/* <div className="btn btn1">Explore Services</div> */}
                        <div className="btn btn1"> <Link to={'/Income_Tax_Return'} >
                  Income Tax return
                </Link></div>
                        <div className="btn btn2"> <Link to={'/GST_Return'} >
                  GST Return Filing
                </Link></div>
                        <div className="btn btn1"> <Link to={'/FSSAI_Registration'} >
                  FSSAI Registration
                </Link></div>
                        <div className="btn btn2"> <Link to={'/Trademark_Registration'} >
                  Trademark registration
                </Link></div>
                    </div>
            {/* <div className="rectangle rectangle-left"></div>
            <div className="rectangle rectangle-right"></div> */}
                </div>
            </div>

        </div>
    )
}

export default Hero
