// import { Qualities } from "./components/qualities/Qualities"
// import Services from "./components/services/Services"
import Navbar from './components/navbar/Navbar'
// import Hero from './components/hero/Hero'
import Footer from "./components/footer/Footer"
// import Whowe from "./components/whowe/Whowe"
import HeroService from "./components/servicePage_components/HeroService/HeroService"
import services from './components/servicePage_components/service.json'
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import Home from "./components/home/Home"
import About from "./pages/about/about"
import ContactUs from "./pages/contact/contactUs";
import ScrollToTop from './components/scroolToTop/ScroolToTop';


function App() {
  return (

    <Router>


      <div>


        <Navbar></Navbar>
        <ScrollToTop/>
  
        <Routes>


          <Route path="/" element={<Home />} />
      <Route path="/Contact" element={ <ContactUs/>} />
      <Route path="/About" element={ <About/>} />
          <Route path="/Private_Limited" element={<HeroService data={services.Private_Limited_Company_Registration} />} />
          <Route path="/Limited_Liability_Partnership_Registration" element={<HeroService data={services.Limited_Liability_Partnership_Registration} />} />
          <Route path="/GST_Registration" element={<HeroService data={services.GST_Registration} />} />
          <Route path="/FSSAI_Registration" element={<HeroService data={services.FSSAI_Registration} />} />
          <Route path="/ISO_Certification" element={<HeroService data={services.ISO_Certification} />} />
          <Route path="/IEC_Code_Registration" element={<HeroService data={services.IEC_Code_Registration} />} />
          <Route path="/MSME_Registration" element={<HeroService data={services.MSME_Registration} />} />
          <Route path="/PF_ESI_Registration" element={<HeroService data={services.PF_ESI_Registration} />} />
          <Route path="/Section_NPO" element={<HeroService data={services.Section_NPO} />} />
          <Route path="/Trademark_Registration" element={<HeroService data={services.Trademark_Registration}/>}/>
          <Route path="/Copyright_Registration" element={<HeroService data={services.Copyright_Registration}/>}/>
          <Route path="/Design_Registration" element={<HeroService data={services.Design_Registration}/>}/>
          <Route path="/Income_Tax_Notice" element={<HeroService data={services.Income_Tax_Notice}/>}/>
          <Route path="/Income_Tax_Return" element={<HeroService data={services.Income_Tax_Return}/>}/>
          <Route path="/GST_Return" element={<HeroService data={services.GST_Return}/>}/>
          <Route path="/TDS_Return" element={<HeroService data={services.TDS_Return}/>}/>


    </Routes>
      <Footer />
    </div>
     
    </Router>
    
  )
}

export default App
