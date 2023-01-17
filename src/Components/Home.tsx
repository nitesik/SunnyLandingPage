import { useState, useEffect } from "react";
import "./Styles.css";
import logo from "./Images/logo.svg";
import footerLogo from "./Images/footer-logo.svg";
import arrow_down from "./Images/icon-arrow-down.svg"
import ImageHeader from "./Images/desktop/image-header.jpg";
import DesktopEgg from "./Images/desktop/image-transform.jpg"
import DesktopGlass from "./Images/desktop/image-stand-out.jpg"
import DesktopCherries from "./Images/desktop/image-graphic-design.jpg";
import DesktopOrange from "./Images/desktop/image-photography.jpg";
import imageEmily from "./Images/image-emily.jpg";
import imageJennie from "./Images/image-jennie.jpg";
import imageThomas from "./Images/image-thomas.jpg";
import DesktopMilk from "./Images/desktop/image-gallery-milkbottles.jpg";
import DesktopGalleryOrange from "./Images/desktop/image-gallery-orange.jpg";
import DesktopCone from "./Images/desktop/image-gallery-cone.jpg";
import DesktopSugarCubes from "./Images/desktop/image-gallery-sugarcubes.jpg";
import twitter from "./Images/icon-twitter.svg"
import facebook from "./Images/icon-facebook.svg"
import pinterest from "./Images/icon-pinterest.svg"
import instagram from "./Images/icon-instagram.svg"
import hamburger from "./Images/icon-hamburger.svg"
import ImageHeaderMobile from "./Images/mobile/image-header.jpg";
import MobileEgg from "./Images/mobile/image-transform.jpg"
import MobileGlass from "./Images/mobile/image-stand-out.jpg"
import MobileCherries from "./Images/mobile/image-graphic-design.jpg";
import MobileOrange from "./Images/mobile/image-photography.jpg";
import MobileMilk from "./Images/mobile/image-gallery-milkbottles.jpg";
import MobileGalleryOrange from "./Images/mobile/image-gallery-orange.jpg";
import MobileCone from "./Images/mobile/image-gallery-cone.jpg";
import MobileSugarCubes from "./Images/mobile/image-gallery-sugar-cubes.jpg";


function Home() : any {

  const [width, setWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);
 
  function ChangeWidth() {
    setWidth(window.innerWidth);
  }
  
  useEffect(() => {
    window.addEventListener("resize", ChangeWidth);
    console.log(width);
    
  }, [width]);
  
  function DesktopUpper() {
    
    return (
      <div className="upper" style={{backgroundImage: `url(${ImageHeader})`}}>
        <nav>
          <img src={logo} alt="logo" />
          <div className="nav-components">
            <div>About</div>
            <div>Services</div>
            <div>Products</div>
            <button>CONTACT</button>
          </div>
        </nav>
        <div className="creatives">WE ARE CREATIVES</div>
        <img className="arrow_down" src={arrow_down} />
      </div>
    )
  }

  function MiddleDesktop() : any {

    return (
      <div className="middle">
        <div className="block">
          <div className="block-text">
            <div className="block-title">Transform your brand</div>
            <div className="text">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</div>
            <div className="learn-more">LEARN MORE</div>
          </div>
        </div>
        <div className="block" style={{backgroundImage: `url(${DesktopEgg})`}}></div>
        <div className="block" style={{backgroundImage: `url(${DesktopGlass})`}}></div>
        <div className="block">
          <div className="block-text">
            <div className="block-title">Stand out to the right audience</div>
            <div className="text">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</div>
            <div className="learn-more">LEARN MORE</div>
          </div>
        </div>
        <div className="block" style={{backgroundImage: `url(${DesktopCherries})`}}>
          <div className="bottom-blocks">
            <div className="block-title">Graphic Design</div>
            <div className="text"> Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</div>
          </div>
        </div>
        <div className="block" style={{backgroundImage: `url(${DesktopOrange})`}}>
          <div className="bottom-blocks">
            <div className="block-title">Photography</div>
            <div className="text">Photography Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</div>
          </div>
        </div>
      </div>
    )
  }

  function Testimonials() {

    return (
      <div className="testimonial">
        <div className="title grey">CLIENT TESTIMONIALS</div>
        <div className="blocks">
          <div className="block">
            <img src={imageEmily} alt="Image" />
            <div className="description">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</div>
            <div style={{display: "grid", gap: "5px"}}>
              <div className="name">Emily R.</div>
              <div className="subname grey">Marketing Director</div>
            </div>
          </div>
          <div className="block">
            <img src={imageThomas} alt="Image" />
            <div className="description">Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</div>
            <div style={{display: "grid", gap: "5px"}}>
              <div className="name">Thomas S.</div>
              <div className="subname grey">Marketing Director</div>
            </div>
          </div>
          <div className="block">
            <img src={imageJennie} alt="Image" />
            <div className="description">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</div>
            <div style={{display: "grid", gap: "5px"}}>
              <div className="name">Jennie F.</div>
              <div className="subname grey">Marketing Director</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function GalleryDesktop() {

    return (
      <div className="gallery">
        <div style={{backgroundImage: `url(${DesktopMilk})`}} />
        <div style={{backgroundImage: `url(${DesktopGalleryOrange})`}} />
        <div style={{backgroundImage: `url(${DesktopCone})`}} />
        <div style={{backgroundImage: `url(${DesktopSugarCubes})`}} />
      </div>
    )
  }

  function Footer() {

    return (
      <div className="footer">
        <img src={footerLogo} alt="logo" />
        <div className="footer-pages text">
          <div>About</div>
          <div>Services</div>
          <div>Projects</div>
        </div>
        <div className="footer-share">
          <img src={facebook} />
          <img src={instagram} />
          <img src={twitter} />
          <img src={pinterest} />
        </div>
      </div>
    )
  }

  function MobileUpper() {

    return (
      <div className="upper" style={{backgroundImage: `url(${ImageHeaderMobile})`}}>
        <nav>
          <img src={logo} />
          <div>
            <img src={hamburger} onClick={() => setMenu(!menu)} />
            {menu && <div className="menu">
              <div style={{display: "flex", justifyContent: "end", width: "90%"}}><div className="triangle"></div></div>
              <div className="dropdown">
                <div>About</div>
                <div>Services</div>
                <div>Projects</div>
                <button>CONTACT</button>
              </div>
            </div>}
          </div>
        </nav>
        <div className="creatives">WE ARE CREATIVES</div>
        <img src={arrow_down} className="arrow_down" />
      </div>
    )
  }

  function MobileMiddle() {

    return (
      <div className="middle">
        <div className="block" style={{backgroundImage: `url(${MobileEgg})`}} />
        <div className="block" style={{margin: "50px 0"}}>
         <div className="block-text">
            <div className="block-title">Transform your brand</div>
            <div className="text">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</div>
            <div className="learn-more" style={{borderColor: "hsl(51, 100%, 49%)"}}>LEARN MORE</div>
          </div>
        </div>
        <div className="block" style={{backgroundImage: `url(${MobileGlass})`}} />
        <div className="block" style={{margin: "50px 0"}}>
          <div className="block-text">
            <div className="block-title">Stand out to the right audience</div>
            <div className="text">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</div>
            <div className="learn-more" style={{borderColor: "hsl(7, 99%, 70%)"}}>LEARN MORE</div>
          </div>
        </div>
        <div className="block" style={{backgroundImage: `url(${MobileCherries})`, height: "fit-content"}}>
          <div className="bottom-blocks">
            <div className="block-title">Graphic Design</div>
            <div className="text"> Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</div>
          </div>
        </div>
        <div className="block" style={{backgroundImage: `url(${MobileOrange})`, height: "fit-content"}}>
          <div className="bottom-blocks">
            <div className="block-title">Photography</div>
            <div className="text">Photography Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</div>
          </div>
        </div>
      </div>
    )
  }

  function MobileTestimonials() {

    return (
      <div className="testimonial">
        <div className="title grey">CLIENT TESTIMONIALS</div>
        <div className="blocks">
          <div className="block">
            <img src={imageEmily} alt="Image" />
            <div className="description">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</div>
            <div style={{display: "grid", gap: "5px"}}>
              <div className="name">Emily R.</div>
              <div className="subname grey">Marketing Director</div>
            </div>
          </div>
          <div className="block">
            <img src={imageThomas} alt="Image" />
            <div className="description">Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</div>
            <div style={{display: "grid", gap: "5px"}}>
              <div className="name">Thomas S.</div>
              <div className="subname grey">Marketing Director</div>
            </div>
          </div>
          <div className="block">
            <img src={imageJennie} alt="Image" />
            <div className="description">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</div>
            <div style={{display: "grid", gap: "5px"}}>
              <div className="name">Jennie F.</div>
              <div className="subname grey">Marketing Director</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function GalleryMobile() {

    return (
      <div className="gallery">
        <div style={{backgroundImage: `url(${MobileMilk})`}} />
        <div style={{backgroundImage: `url(${MobileGalleryOrange})`}} />
        <div style={{backgroundImage: `url(${MobileCone})`}} />
        <div style={{backgroundImage: `url(${MobileSugarCubes})`}} />
      </div>
    )
  }
  
  function Desktop() {

    return(
      <>
        <DesktopUpper />
        <MiddleDesktop />
        <Testimonials />
        <GalleryDesktop />
        <Footer />
      </>
    )
  }

  function Mobile() {
    
    return (
      <>
        <MobileUpper />
        <MobileMiddle />
        <MobileTestimonials />
        <GalleryMobile />
        <Footer />
      </>
    )
  }

  return (
    <div className="container">
      {width >= 1000 ? <Desktop /> : <Mobile />}
    </div>
  )
}

export default Home;