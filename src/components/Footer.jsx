import logo from '../images/logo/footer-logo.png';


const Footer = () => {
  return (
    <>
      {/* <!-- Subscribe Fill Area Start --> */}
      <div className="subcribe-fill-area max-w-[1920px] mx-auto">
        <div className="container-fulid">
          <div
            className="section-title flex lg:flex-col justify-between items-center lg:items-start md:flex-col md:items-start lg:gap-10 xs:gap-8 p-[70px] sm:px-10 xs:px-5 xs:py-10 rounded-30px bg-primary mx-5">
            <div className="content">
              <h2
                className="title font-bodyFont text-36px sm:text-32px xs:text-24px font-semibold text-black xl:max-w-[600px] lg:max-w-full">
                Join Homa email list to stay up to date about <br className="xxl:hidden"/> Affordable Co-Living and
                Properties in Your
                Area
              </h2>
            </div>
            <div className="search-form flex bg-white rounded-full border border-white-20 relative">
              <input
                className="email px-8 xs:pl-6 xs:pr-0 py-4 w-[338px] xl:w-[230px] lg:w-[338px] font-bodyFont text-18px xs:text-16px text-black-4 font-medium rounded-full sm:w-full border-0 focus-visible:outline-none active:border-none"
                type="email" placeholder="Enter your email"/>
              <a href="#"
                className="theme-btn px-14 xs:px-5 py-4 xs:py-2 rounded-full text-black bg-primary font-bodyFont text-16px font-bold m-2.5 custom-transition hover:bg-green hover:text-white">Submit</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Subscribe Fill Area End --> */}

      {/* <!--Footer Section Start --> */}
      <div className="footer-section max-w-[1920px] mx-auto">
        <div className="container-fulid">
          <div className="footer-wrapper bg-primary rounded-30px p-[70px] sm:px-10 xs:px-5 xs:py-10 m-5">
            <div
              className="footer-top flex md:flex-col md:gap-10 justify-between items-start mb-[140px] xl:mb-32 lg:mb-24">
              <div className="grid grid-cols-3 gap-[120px] xl:gap-20 lg:gap-8">
                <div className="col-span-1 xs:col-span-3">
                  <div className="footer-widget">
                    <h3 className="footer-widget-title font-bodyFont text-18px text-black font-medium mb-2">
                      Lets Talk</h3>
                    <div className="footer-contact">
                      <ul className="flex flex-col gap-2 font-bodyFont text-black text-18px sm:text-16px">
                        <li>
                          <a href="mailto:hello@homa.epp"><span>hello@homa.epp</span></a>
                        </li>
                        <li>
                          <a href="#">Blok M Square, JKT</a>
                        </li>
                        <li>
                          <a href="href=tel:(+62) 812 345 678">(+62) 812 345 678</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 xs:col-span-3">
                  <div className="footer-widget">
                    <h3 className="footer-widget-title font-bodyFont text-18px text-black font-medium mb-2">
                      About me</h3>
                    <div className="footer-contact">
                      <ul className="flex flex-col gap-2 font-bodyFont text-black text-18px sm:text-16px">
                        <li className="custom-transition hover:ml-1 hover:text-green">
                          <a href="#">Listings</a>
                        </li>
                        <li className="custom-transition hover:ml-1 hover:text-green">
                          <a href="#">Buy</a>
                        </li>
                        <li className="custom-transition hover:ml-1 hover:text-green">
                          <a href="#">Sell</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 xs:col-span-3">
                  <div className="footer-widget">
                    <h3 className="footer-widget-title font-bodyFont text-18px text-black font-medium mb-2">
                      About me</h3>
                    <div className="footer-contact">
                      <ul className="flex flex-col gap-2 font-bodyFont text-black text-18px sm:text-16px">
                        <li className="custom-transition hover:ml-1 hover:text-green">
                          <a href="#">Listings</a>
                        </li>
                        <li className="custom-transition hover:ml-1 hover:text-green">
                          <a href="#">Buy</a>
                        </li>
                        <li className="custom-transition hover:ml-1 hover:text-green">
                          <a href="#">Sell</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-profile flex items-center gap-5 lg:gap-3">
                <a className="w-20 lg:w-16 xs:w-12 h-20 lg:h-16 xs:h-12 border border-white-20 rounded-full flex justify-center items-center text-28px lg:text-24px xs:text-20px text-black custom-transition hover:bg-primary hover:border-primary"
                  href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a className="w-20 lg:w-16 xs:w-12 h-20 lg:h-16 xs:h-12 border border-white-20 rounded-full flex justify-center items-center text-28px lg:text-24px xs:text-20px text-black custom-transition hover:bg-primary hover:border-primary"
                  href="#"><i className="fa-brands fa-twitter"></i></a>
                <a className="w-20 lg:w-16 xs:w-12 h-20 lg:h-16 xs:h-12 border border-white-20 rounded-full flex justify-center items-center text-28px lg:text-24px xs:text-20px text-black custom-transition hover:bg-primary hover:border-primary"
                  href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a className="w-20 lg:w-16 xs:w-12 h-20 lg:h-16 xs:h-12 border border-white-20 rounded-full flex justify-center items-center text-28px lg:text-24px xs:text-20px text-black custom-transition hover:bg-primary hover:border-primary"
                  href="#"><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>
            <div className="footer-bottom flex sm:flex-col sm:gap-5 justify-between items-center">
              <a href="#" className="footer-logo md:w-5/12 sm:w-full sm:flex sm:justify-center sm:gap-5">
                <img src={logo} alt="footer logo"></img>
              </a>
              <div className="copyright-text">
                <p className="font-bodyFont text-18px font-normal text-black">Odama. All right reserved. ©2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Footer Section End --> */}
    </>
  )
}

export default Footer;