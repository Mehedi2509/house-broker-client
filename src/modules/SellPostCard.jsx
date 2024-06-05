import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import toast from "react-hot-toast";


const SellPostCard = ({sellPost}) => {
    const {user, handleDeleteSellPost} = useAuth();
    const {_id, title, price, post_img, category, desc, location: {address, city, state, zipcode},others: {bedroom,
    bathroom, sqft}, author: {name, email, img}} = sellPost;

    const handlePostDelete = async () =>{
        await fetch(`https://house-borker-server.vercel.app/sellposts/${_id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            if(data){
                toast.success('Post Deleted');
                handleDeleteSellPost(_id); 
            }
        });
    }

return (
<div className="col-span-4">
    <div className="listing-card style-1 relative group">
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
            <h3 className="title flex justify-between items-center xs:gap-5 text-[27px] xs:text-20px text-black my-5">
                <Link to={`/sellpost/${_id}`} href="property-details.html">{title}</Link>
            </h3>
            <div className="mb-8 xs:mb-6">
                <p className="desc text-16px text-black mb-4">Category: {category}</p>
                <p className="desc text-16px text-black">Location: {address}. {city}, {state}, {zipcode}</p>
            </div>
            <div className="post-meta flex xs:flex-wrap gap-4 xs:gap-4 items-center mb-4">
                <a className="single-post-meta flex gap-2 items-center">
                    <span className="icon text-black"><FontAwesomeIcon icon={faBed} /></span>
                    <span className="text text-16px text-black font-medium capitalize">{bedroom} bedrooms</span>
                </a>
                <a className="single-post-meta flex gap-2 items-center">
                    <span className="icon text-black"><FontAwesomeIcon icon={faBath} /></span>
                    <span className="text text-16px text-black font-medium capitalize">{bathroom} bathrooms</span>
                </a>
                <a className="single-post-meta flex gap-2 items-center">
                    <span className="icon text-black"><FontAwesomeIcon icon={faSquare} /></span>
                    <span className="text text-16px text-black font-medium capitalize">{sqft} sqft</span>
                </a>
            </div>
            <div className="btn-group flex justify-between items-center pt-4 border-t-2 border-black-3">
                <Link className="btn btn-primary text-white" to={`/sellpost/${_id}`}>View More</Link>
                {email === user.email && (
                <div className="flex gap-4 items-center">
                    <Link className="btn btn-primary text-white" to={`/dashboard/editsellpost/${_id}`}>Edit</Link>
                    <a className="btn btn-primary text-white" onClick={handlePostDelete}>Delete</a>
                </div>
                )}
            </div>
        </div>
    </div>
</div>
);
};

export default SellPostCard;