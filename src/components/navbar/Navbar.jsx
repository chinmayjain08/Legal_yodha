import "./Navbar.css";
import { useState } from "react";

import logo from "../../images/logomain.png";
import { Link } from "react-router-dom";

import { ImWhatsapp } from "react-icons/im";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <div className="nav__data">
            <Link to={"/"}>
              <a href="#" className="nav__logo">
                <img src={logo} alt="" />
                <div className="LOgoname">
                  <span>Legal</span> Yodha
                </div>
              </a>
            </Link>

            <div
              className={`nav__toggle ${show ? "show-icon" : ""}`}
              id="nav-toggle"
              onClick={() => setShow(!show)}
            >
              <i className="ri-menu-line nav__burger"></i>
              <i className="ri-close-line nav__close"></i>
            </div>
          </div>

          <div className={`nav__menu ${show ? "show-menu" : ""}`} id="nav-menu">
            <ul className="nav__list">
              {/* <li>
                <Link to={'/'} className="nav__link">
                  Home
                </Link>
              </li> */}

              <li className="dropdown__item">
                <div className="nav__link">
                  Start Business{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                  <li className="dropdown__link">
                    <Link to={"/Private_Limited"}  onClick={() => setShow(!show)}>
                      {" "}
                      Private Limited Company Registration
                    </Link>
                  </li>
                  <li className="dropdown__link">
                    <Link to={"/Limited_Liability_Partnership_Registration"}  onClick={() => setShow(!show)}>
                      Limited Liability Partnership Registration
                    </Link>
                  </li>
                  {/* <li className="dropdown__link">
                   <Link to={''}> Partnership Firm Registration</Link>
                  </li>
                  <li className="dropdown__link">
                  <Link to={''}> Proprietorship Firm Registration</Link>
                  </li> */}
                  <li className="dropdown__link"  onClick={() => setShow(!show)}>
                    <Link to={"/Section_NPO"}>Section NPO</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown__item">
                <div className="nav__link">
                  Business Registration{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                  <li className="dropdown__link">
                    {" "}
                    <Link to={"/GST_Registration"}  onClick={() => setShow(!show)}>GST Registration</Link>
                  </li>
                  <li className="dropdown__link">
                    {" "}
                    <Link to={"/FSSAI_Registration"}  onClick={() => setShow(!show)}>FSSAI Registration</Link>
                  </li>
                  <li className="dropdown__link">
                    {" "}
                    <Link to={"/ISO_Certification"}  onClick={() => setShow(!show)}>ISO Certificate</Link>
                  </li>
                  <li className="dropdown__link">
                    <Link to={"/IEC_Code_Registration"}  onClick={() => setShow(!show)}>
                      Import Export Code(IEC)
                    </Link>
                  </li>
                  <li className="dropdown__link">
                    <Link to={"/PF_ESI_Registration"}  onClick={() => setShow(!show)}>
                      ESI and PF Regiistration
                    </Link>
                  </li>
                  <li className="dropdown__link">
                    {" "}
                    <Link to={"/MSME_Registration"}  onClick={() => setShow(!show)}> MSME Registration</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown__item">
                <div className="nav__link">
                  IP Registration{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                  <li className="dropdown__link">
                    {" "}
                    <Link to={"/Trademark_Registration"}  onClick={() => setShow(!show)}>
                      Trademark Registration
                    </Link>
                  </li>
                  <li className="dropdown__link">
                    <Link to={"/Copyright_Registration"}  onClick={() => setShow(!show)}>
                      Copyright Registration
                    </Link>
                  </li>
                  <li className="dropdown__link">
                    <Link to={"/Design_Registration"}  onClick={() => setShow(!show)}>Design Registration</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown__item">
                <div className="nav__link">
                  Income TAX/GST{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                  <li className="dropdown__link">
                    {" "}
                    <Link to={"/Income_Tax_Return"}  onClick={() => setShow(!show)}>Income Tax Return</Link>
                  </li>
                  <li className="dropdown__link">
                    {" "}
                    <Link to={"/GST_Return"}  onClick={() => setShow(!show)}>GST Return</Link>
                  </li>
                  <li className="dropdown__link">
                    {" "}
                    <Link to={"/TDS_Return"}  onClick={() => setShow(!show)}> TDS Return</Link>
                  </li>
                  <li className="dropdown__link">
                    {" "}
                    <Link to={"/Income_Tax_Notice"}  onClick={() => setShow(!show)}>Income Tax Notice</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to={"/About"} className="nav__link"  onClick={() => setShow(!show)}>
                  About
                </Link>
              </li>

              <li>
                <Link to={"/Contact"} className="nav__link"  onClick={() => setShow(!show)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="right-nav-icons">
          <a href="https://wa.me/+919057771028" target="_blank">
            <ImWhatsapp className="navIcons" />
          </a>
          <a href="tel:9057771028">
            <FaPhoneSquareAlt className="navIcons" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
