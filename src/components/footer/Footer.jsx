import "./Footer.css";
import { FaMobile } from "react-icons/fa";
import { PiArrowFatLinesUpBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="footerSection">
      <div className="footServiceContainer">
        <div className="ftrServiceColumn">
          <h4>Start Business</h4>
          <ul>
            <li>
              <Link to={"/Private_Limited"}>
                {" "}
                Private Limited Company Registration
              </Link>
            </li>
            <li>
              <Link to={"/Limited_Liability_Partnership_Registration"}>
                Limited Liability Partnership Registration
              </Link>
            </li>
            <li><Link to={"/Section_NPO"}>Section NPO</Link></li>
          </ul>
        </div>
        <div className="ftrServiceColumn">
          <h4>Business Registrations</h4>
          <ul>
            <li> <Link to={"/GST_Registration"}>GST Registration</Link></li>
            <li><Link to={"/FSSAI_Registration"}>FSSAI Registration</Link></li>
            <li><Link to={"/ISO_Certification"}>ISO Certificate</Link></li>
            <li><Link to={"/IEC_Code_Registration"}>
              Import Export Code(IEC)
            </Link></li>
            <li> <Link to={"/PF_ESI_Registration"}>
              ESI and PF Regiistration
            </Link></li>
            <li><Link to={"/MSME_Registration"}> MSME Registration</Link></li>
          </ul>
        </div>
        <div className="ftrServiceColumn">
          <h4>IP Registrations</h4>
          <ul>
            <li> <Link to={"/Trademark_Registration"}>
              Trademark Registration
            </Link></li>
            <li><Link to={"/Copyright_Registration"}>
              Copyright Registration
            </Link></li>
            <li><Link to={"/Design_Registration"}>Design Registration</Link></li>
          </ul>
        </div>
        <div className="ftrServiceColumn">
          <h4>Income TAX/GST</h4>
          <ul>
            <li><Link to={"/Income_Tax_Return"}>Income Tax Return</Link></li>
            <li> <Link to={"/GST_Return"}>GST Return</Link></li>
            <li><Link to={"/TDS_Return"}> TDS Return</Link></li>
            <li><Link to={"/Income_Tax_Notice"}>Income Tax Notice</Link></li>
          </ul>
        </div>
      </div>

      <div className="footerStrip">
        <div className="footerStripLinks">
          <p> <Link to={"/"} className="nav__link">
            Home
          </Link></p>
          <p><Link to={"/About"} className="nav__link">
            About
          </Link></p>
          <p> <Link to={"/Contact"} className="nav__link">
            Contact
          </Link></p>
        </div>
        <div className="commFtr">
          <a href="tel:9057771028">
            <div className="ftrPhoneButton">
              <FaMobile className="ftrMobileLogo" />
              <p>90577-71028</p>
            </div>
          </a>
          <a href="https://wa.me/+919057771028" target="_blank">
            <FaSquareWhatsapp className="ftrWhatsappLogo" />
          </a>

        </div>

      </div>

      <span onClick={() => window.scrollTo(0, 0)} className="onTopFooter">
        <PiArrowFatLinesUpBold />
      </span>

      <p className="copyrightLine">
        ©2024 LegalYodha Pvt. Ltd. All Rights Reserved.
        <br />
        Created by <a href="https://buoyance.vercel.app/">Buoyance Web Agency</a>
      </p>
    </section>
  );
};

export default Footer;
