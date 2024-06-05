import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumb from "../components/Breadcrumb";
import ContactImg from "../images/section-bg/image-five.jpg";
import { faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div className="contact-page">
        <Breadcrumb pageName={'Contact Us'} />
        {/* <!-- Contact Info Area Start --> */}
        <div className="contact-info-area pt-[140px] lg:pt-[100px] md:pt-[80px] sm:pt-16">
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-4 md:col-span-6 sm:col-span-12">
                        <div className="contact-info-card flex flex-col items-center gap-8 p-10 md:px-6 pb-[72px] lg:pb-10 bg-bg-2 rounded-30px">
                            <div className="icon w-[92px] h-[92px] rounded-full flex items-center justify-center bg-white">
                                <FontAwesomeIcon className="icon-email text-[40px] text-black" icon={faPhoneVolume} />
                            </div>
                            <div className="content text-center">
                                <h2 className="title text-black text-36px lg:text-27px md:text-36px sm:text-27px">Contact
                                    number</h2>
                                <div className="desc flex flex-col gap-2 mt-4">
                                    <a href="tel:+880123456789" className="number font-bodyFont text-18px text-black font-normal">(+65) -
                                        48596 - 5789</a>
                                    <a href="tel:+880123456789"
                                        className="number font-bodyFont text-18px text-black font-normal">+65-48596-5789</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-6 sm:col-span-12">
                        <div className="contact-info-card flex flex-col items-center gap-8 p-10 md:px-6 pb-[72px] lg:pb-10 bg-bg-2 rounded-30px">
                            <div className="icon w-[92px] h-[92px] rounded-full flex items-center justify-center bg-white">
                                <FontAwesomeIcon className="icon-email text-[40px] text-black" icon={faEnvelope} />
                            </div>
                            <div className="content text-center">
                                <h2 className="title text-black text-36px lg:text-27px md:text-36px sm:text-27px">Mail address</h2>
                                <div className="desc flex flex-col gap-2 mt-4">
                                    <a href="tel:+880123456789" className="number font-bodyFont text-18px text-black font-normal">info@travon.com</a>
                                    <a href="tel:+880123456789"
                                        className="number font-bodyFont text-18px text-black font-normal">info.example@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-6 sm:col-span-12">
                        <div className="contact-info-card flex flex-col items-center gap-8 p-10 md:px-6 pb-[72px] lg:pb-10 bg-bg-2 rounded-30px">
                            <div className="icon w-[92px] h-[92px] rounded-full flex items-center justify-center bg-white">
                                <FontAwesomeIcon className="icon-email text-[40px] text-black" icon={faLocationDot} />
                            </div>
                            <div className="content text-center">
                                <h2 className="title text-black text-36px lg:text-27px md:text-36px sm:text-27px">Office address</h2>
                                <div className="desc flex flex-col gap-2 mt-4">
                                    <a href="tel:+880123456789" className="number font-bodyFont text-18px text-black font-normal">Burnsville, MN 55337 Street,</a>
                                    <a href="tel:+880123456789"
                                        className="number font-bodyFont text-18px text-black font-normal">United States</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Contact Info Area End --> */}
        <div className="contact-form-area py-[140px] lg:py-[100px] md:pt-[80px] md:pb-0 sm:pt-[60px]">
            {/* <!-- Submit form Start --> */}
            <div className="container">
                <div className="grid grid-cols-12 md:gap-y-6 place-content-between gap-6 md:gap-0 bg-bg-2 rounded-[30px]">
                    <div className="col-span-5 xl:col-span-6 md:col-span-12 pl-[72px] lg:pl-10 xl:pr-4 md:px-[60px] xs:px-6 -mb-[76px] md:mb-0 mt-[72px] lg:mt-10 md:mt-[60px] xs:mt-10">
                        <div className="image relative w-full h-[776px] xl:h-[650px] rounded-[30px] overflow-hidden xs:h-auto">
                            <img className="absolute top-0 left-0 w-full h-full object-cover xs:h-auto xs:relative" src={ContactImg} alt="contact form image"></img>
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-12 p-16  xl:p-10 xl:pl-0 lg:pr-10 md:p-[60px] md:pt-6 xs:px-6 xs:py-10">
                        {/* <!-- Comment Form Start --> */}
                        <div className="comment-respond">
                            <div className="section-title mb-10 xs:mb-6">
                                <div className="content flex flex-col gap-4">
                                    <h2 className="title font-bodyFont text-64px xl:text-48px lg:text-42px xs:text-32px font-semibold text-black">Get in touch with us</h2>
                                </div>
                            </div>
                            <form action="#" method="post" className="comment-form">
                                <div className="grid grid-cols-12 gap-x-[18px] lg:gap-x-3 gap-y-4 sm:gap-y-3">
                                    <div className="col-span-6 xs:col-span-12">
                                        <div className="contacts-name">
                                            <input className="w-full px-6 py-4 font-bodyFont text-black-4 text-18px font-medium border border-solid border-black-20 rounded-12px" name="author" type="text" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="col-span-6 xs:col-span-12">
                                        <div className="contacts-email">
                                            <input className="w-full px-6 py-4 font-bodyFont text-black-4 text-18px font-medium border border-solid border-black-20 rounded-12px" name="email" type="text" placeholder="Your Email"/>
                                        </div>
                                    </div>
                                    <div className="col-span-6 xs:col-span-12">
                                        <div className="contacts-number">
                                            <input className="w-full px-6 py-4 font-bodyFont text-black-4 text-18px font-medium border border-solid border-black-20 rounded-12px" name="phone" type="text" placeholder="Enter Your Number"/>
                                        </div>
                                    </div>
                                    <div className="col-span-6 xs:col-span-12">
                                        <div className="subject">
                                            <input className="w-full px-6 py-4 font-bodyFont text-black-4 text-18px font-medium border border-solid border-black-20 rounded-12px" name="website" type="text" placeholder="Enter Your Subject"/>
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <div className="message">
                                            <textarea
                                                className="px-6 py-3 bg-white w-full h-full  rounded-12px border-transparent  placeholder:font-normal placeholder:text-18px placeholder:text-black-4"
                                                name="comment" cols="20" rows="9" placeholder="Comment">
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="col-span-12 mt-2">
                                        <button className="theme-btn bg-black relative px-14 py-6 rounded-[100px] text-white font-bodyFont text-18px leading-none font-semibold" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* <!-- Comment Form End --> */}
                    </div>
                </div>
            </div>
            {/* <!-- Submit form End --> */}
        </div>
    </div>
  )
}

export default ContactUs;