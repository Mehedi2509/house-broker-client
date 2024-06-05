import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import FooterBg from '../images/section-bg/footer.jpg';

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="footer-top py-[140px] lg:py-[120px] md:py-[100px] sm:py-20 bg-no-repeat bg-cover bg-center"
          style={{backgroundImage: `url(${FooterBg})`,}}>
          <div className="custom-container">
            <div className="section-title flex flex-col items-center gap-4 text-center">
              <div className="content flex flex-col items-center gap-1">
                <h6 className="short-title font-short leading-[26px] tracking-normal font-normal text-white">
                  Short-term Rental</h6>
                <h2 className="title font-semibold text-center text-white">Learn more about foreclosure</h2>
              </div>
              <p className="text-18px font-normal text-white">With LoopNets sophisticated presentation and
                captivating interactive media solutions <br/> your property will stand out online just as much as
                it does in person.</p>
            </div>
            <div className="search-form flex justify-center gap-4 rounded-full relative mt-10 sm:flex-col">
              <input
                className="email px-8 xs:pl-6 xs:pr-0 py-4 w-[380px] xl:w-[300px] lg:w-[338px] h-16 font-bodyFont text-18px xs:text-16px text-black-4 font-medium tracking-[-0.034rem] rounded-full sm:w-full border-0 focus-visible:outline-none active:border-none"
                type="email" placeholder="Enter your email"/>
              <a href="#"
                className="py-4 px-8 flex items-center justify-center gap-2 text-18px text-white bg-primary rounded-50px custom-transition hover:bg-black">Subscribe
                <i className="fa-regular fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-wrapper bg-black">
          <div className="container-fluid max-w-[1920px] mx-auto">
            <div className="link-area py-20 flex items-start justify-between xl:gap-20 lg:gap-6 lg:flex-wrap">
              <div className="col-span-2 xs:col-span-3">
                <div className="footer-widget">
                  <h6 className="footer-widget-title font-medium text-white mb-2">
                    Search</h6>
                  <div className="footer-contact">
                    <ul
                      className="flex flex-col gap-2 font-bodyFont text-white-60 text-18px font-normal -tracking-[0.011rem] sm:text-18px">
                      <li>
                        <a href="#">Properties For Sale</a>
                      </li>
                      <li>
                        <a href="#">Properties For Lease</a>
                      </li>
                      <li>
                        <a href="#">Auctions</a>
                      </li>
                      <li>
                        <a href="#">Businesses For Sale</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-2 xs:col-span-3">
                <div className="footer-widget">
                  <h6 className="footer-widget-title font-medium text-white mb-2">
                    Products & Services</h6>
                  <div className="footer-contact">
                    <ul
                      className="flex flex-col gap-2 font-bodyFont text-white-60 text-18px font-normal -tracking-[0.011rem] sm:text-18px">
                      <li>
                        <a href="#">Advertise With Us</a>
                      </li>
                      <li>
                        <a href="#">LoopLink</a>
                      </li>
                      <li>
                        <a href="#">Help</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-2 xs:col-span-3">
                <div className="footer-widget">
                  <h6 className="footer-widget-title font-medium text-white mb-2">
                    Marketplace</h6>
                  <div className="footer-contact">
                    <ul
                      className="flex flex-col gap-2 font-bodyFont text-white-60 text-18px font-normal -tracking-[0.011rem] sm:text-18px">
                      <li>
                        <a href="#">Ten-X</a>
                      </li>
                      <li>
                        <a href="#">Showcase</a>
                      </li>
                      <li>
                        <a href="#">CityFeet</a>
                      </li>
                      <li>
                        <a href="#">Belbex</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-2 xs:col-span-3">
                <div className="social-profile flex items-center justify-end md:justify-center gap-3 md:flex-wrap">
                  <a className="w-20 lg:w-16 h-20 lg:h-16 border border-white-20 rounded-full flex justify-center items-center text-28px lg:text-24px xs:text-20px text-white bg-black custom-transition hover:bg-primary hover:border-primary"
                    href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a className="w-20 lg:w-16 h-20 lg:h-16 border border-white-20 rounded-full flex justify-center items-center text-28px lg:text-24px xs:text-20px text-white bg-black custom-transition hover:bg-primary hover:border-primary"
                    href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a className="w-20 lg:w-16 h-20 lg:h-16 border border-white-20 rounded-full flex justify-center items-center text-28px lg:text-24px xs:text-20px text-white bg-black custom-transition hover:bg-primary hover:border-primary"
                    href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a className="w-20 lg:w-16 h-20 lg:h-16 border border-white-20 rounded-full flex justify-center items-center text-28px lg:text-24px xs:text-20px text-white bg-black custom-transition hover:bg-primary hover:border-primary"
                    href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
              </div>
            </div>
            <div
              className="footer-bottom flex justify-between items-center sm:flex-wrap border-t border-solid border-[#525252] py-4">
              <div className="copyright-text">
                <p className="font-headingFont text-16px text-white font-medium">Zillou All Right Reserved @2024 -
                  Real Estate</p>
              </div>
              <div className=" flex items-center sm:flex-wrap justify-center gap-10 sm:gap-2 xl:gap-4">
                <p className="font-bodyFont text-16px capitalize text-white font-medium">Privacy Policy</p>
                <p className="font-bodyFont text-16px capitalize text-white font-medium">Terms of Use</p>
                <p className="font-bodyFont text-16px capitalize text-white font-medium">FAQ</p>
                <p className="font-bodyFont text-16px capitalize text-white font-medium">Cookies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;