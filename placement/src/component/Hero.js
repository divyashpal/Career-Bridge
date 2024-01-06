import Carousel from 'react-bootstrap/Carousel';
import logo from "../img/boat.jpg"
import mohit from "../img/home.jpg"
import divyash from "../img/light.jpg"
import { Helmet } from 'react-helmet';

function Hero() {
  return (
   
  <div>
    <Helmet>
        <title>
          Hero
        </title>
      </Helmet>
  
    <Carousel data-bs-theme="dark" className='center box'  style={{marginTop:"11px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src={logo}
          alt="First slide"
        />  
        <Carousel.Caption className='text-light'>
          <h4 style={{color:'#001524', fontFamily:"sans-serif",fontWeight:"lighter"}}>"The best preparation for tomorrow is doing your best today."
            <br></br>- H.Jackson Brown Jr.</h4>
          <h5 style={{color:'#ffe8d6', fontFamily:"sans-serif",fontWeight:"lighter" }}>  From Classroom to Conference Room – Your Placement Adventure   </h5>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src={mohit}
          alt="Second slide"
        />
        <Carousel.Caption className='text-light'>
        <h4 style={{color:'#001524', fontFamily:"sans-serif",fontWeight:"lighter"}}>"Embrace the challenge, believe in yourself, and let your preparation meet opportunity."
            <br></br>- H.Jackson Brown Jr.</h4>
          {/* <h5 style={{color:'#ffe8d6', fontFamily:"sans-serif",fontWeight:"lighter" }}>  From Classroom to Conference Room – Your Placement Adventure   </h5> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src={divyash}
          alt="Third slide"
        />
        <Carousel.Caption className='text-light'>
        <h4 style={{color:'#001524', fontFamily:"sans-serif",fontWeight:"lighter"}}>"Believe in your abilities, showcase your strengths, and embrace every challenge."
            <br></br>- H.Jackson Brown Jr.</h4>
          {/* <h5 style={{color:'#ffe8d6', fontFamily:"sans-serif",fontWeight:"lighter" }}>  From Classroom to Conference Room – Your Placement Adventure   </h5> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
export default Hero;