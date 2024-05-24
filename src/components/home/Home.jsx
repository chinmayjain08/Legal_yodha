import Hero from '../hero/Hero'
import Whowe from '../whowe/Whowe'
import { Qualities } from '../qualities/Qualities'
import Services from '../services/Services'
import f1 from './features/f1.png'
import f2 from './features/f2.png'
import f3 from './features/f3.png'
import f4 from './features/f4.png'
import f5 from './features/f5.png'
import f6 from './features/f6.png'




const Home = () => {
  return (
    <div className='app'>
      <Hero />
      <Whowe />
      <Services />
      <Qualities />
      <section id="features" className="f-about">
        <div className="fe-box">
          <img src={f1} />
          <h6>Free Consultance</h6>
        </div>
        <div className="fe-box">
          <img src={f2} />
          <h6>Online Service</h6>
        </div>
        <div className="fe-box">
          <img src={f3} />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src={f4} />
          <h6>Hassle Free</h6>
        </div>
        <div className="fe-box">
          <img src={f5} />
          <h6>Finance Sorted</h6>
        </div>
        <div className="fe-box">
          <img src={f6} />
          <h6>24/7 Support</h6>
        </div>
      </section>
    </div>
  )
}

export default Home