import { Link, useLoaderData } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import useAuth from "../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed, faSquare } from "@fortawesome/free-solid-svg-icons";


const SellPostDetails = () => {
    const {user} = useAuth();
    const sellPost = useLoaderData();
    const {_id, title, price, post_img, category, desc, location: {address, city, state, zipcode},others: {bedroom,
        bathroom, sqft}, author: {name, email, img}} = sellPost;
    console.log(sellPost);

    return (
        <div className="sellpost-details-page">
            <Breadcrumb pageName={'Sell Post Details'} />
            <div className="sell-posts-area bg-bg-2 py-[120px] lg:py-[100px] sm:py-[80px]">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-2"></div>
                        <div className="col-span-8">
                            <div className="listing-card style-1 relative mx-3 group">
                                <div className="image relative w-full h-[330px] rounded-t-12px overflow-hidden">
                                    <img className="absolute top-0 left-0 w-full h-full object-cover custom-transition scale-[1.001] group-hover:scale-105"
                                        src={post_img} alt="image"></img>
                                    <div className="circle-btn-wrapper">
                                        <a href="#" className="circle-btn">
                                            <i className="fa-regular fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="content w-full p-6 bg-white rounded-b-12px">
                                    <span className="price text-18px bg-bg-2 text-black py-1 px-4 rounded-20px">${price}</span>
                                    <h3 className="title flex justify-between items-center xs:gap-5 text-[27px] xs:text-20px text-black mt-5">
                                        <Link to={`/sellpost/${_id}`} href="property-details.html">{title}</Link>
                                    </h3>
                                    <div className="my-8 xs:my-6">
                                        <p className="desc text-16px text-black mb-4"><span className="font-semibold">Category: </span>{category}</p>
                                        <p className="desc text-16px text-black"><span className="font-semibold">Location: </span>{address}. {city}, {state}, {zipcode}</p>
                                    </div>
                                    <p className="desc mb-6 text-16px text-black leading-normal"><span className="font-semibold">Description: </span> {desc}</p>
                                    <div className="post-meta flex xs:flex-wrap gap-6 xs:gap-4 items-center mb-4">
                                        <a className="single-post-meta flex gap-2 items-center">
                                            <span className="icon text-black"><FontAwesomeIcon icon={faBed} /></span>
                                            <span className="text text-16px text-black font-medium capitalize">{bedroom} bedrooms</span>
                                        </a>
                                        <a className="single-post-meta flex gap-2 items-center">
                                            <span className="icon text-black"><FontAwesomeIcon icon={faBath} /></span>
                                            <span className="text text-16px text-black font-medium capitalize">{bathroom}
                                                bathrooms</span>
                                        </a>
                                        <a className="single-post-meta flex gap-2 items-center">
                                            <span className="icon text-black"><FontAwesomeIcon icon={faSquare} /></span>
                                            <span className="text text-16px text-black font-medium capitalize">{sqft} sqft</span>
                                        </a>
                                    </div>
                                        
                                        {email === user.email && (
                                            <div className="btn-group flex justify-between items-center pt-4 border-t-2 border-black-3">
                                                <Link className="btn btn-primary text-white" to={`/dashboard/editsellpost/${_id}`}>Edit</Link>
                                                <Link className="btn btn-primary text-white" to={`/`}>Delete</Link>
                                            </div>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellPostDetails;