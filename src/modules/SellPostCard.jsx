import { Link } from "react-router-dom";


const SellPostCard = ({sellPost}) => {
    const {_id, title, price, post_img, category, desc, location: {address, city, state, zipcode},others: {bedroom, bathroom, sqft}, author: {name, email, img}} = sellPost;

    return (
        <div className="col-span-4">
        <div className="listing-card style-1 relative mx-3 group max-w-[480px]">
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
                <h3
                    className="title flex justify-between items-center xs:gap-5 text-[27px] xs:text-20px text-black mb-2">
                    <a href="property-details.html">{title}</a>
                    <span
                        className="price text-18px bg-secondary text-black py-1 px-4 rounded-20px">${price}</span>
                </h3>
                <p className="desc text-16px mb-8 xs:mb-6 text-black">{address}. {city}, {state}, {zipcode}</p>
                <div className="post-meta flex xs:flex-wrap gap-6 xs:gap-4 items-center">
                    <a className="single-post-meta flex gap-2 items-center">
                        <span className="icon text-black"><i className="icon-bed text-18px"></i></span>
                        <span className="text text-14px text-black font-medium capitalize">{bedroom} bedrooms</span>
                    </a>
                    <a className="single-post-meta flex gap-2 items-center">
                        <span className="icon text-black"><i className="icon-bathtub text-18px"></i></span>
                        <span className="text text-14px text-black font-medium capitalize">{bathroom}
                            bathrooms</span>
                    </a>
                    <a className="single-post-meta flex gap-2 items-center">
                        <span className="icon text-black"><i className="icon-transform text-18px"></i></span>
                        <span className="text text-14px text-black font-medium capitalize">{sqft} sqft</span>
                    </a>
                </div>
                <div className="btn-group flex justify-between items-center">
                    <Link to={``}>View More</Link>
                    <Link to={``}>Edit</Link>
                    <Link to={``}>Delete</Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SellPostCard;