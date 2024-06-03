

const SellPostCard = () => {
    return (
        <div className="listing-card style-1 relative mx-3 group max-w-[480px]">
            <div className="image relative w-full h-[330px] rounded-t-12px overflow-hidden">
                <img className="absolute top-0 left-0 w-full h-full object-cover custom-transition scale-[1.001] group-hover:scale-105"
                    src="resource/images/listing-card/img-1.jpg" alt="image"></img>
                <div className="circle-btn-wrapper">
                    <a href="#" className="circle-btn">
                        <i className="fa-regular fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="content w-full p-6 bg-black-3 rounded-b-12px">
                <h3
                    className="title flex justify-between items-center xs:gap-5 text-[27px] xs:text-20px text-black mb-2">
                    <a href="property-details.html">South Richmond Residence</a>
                    <span
                        className="price text-18px bg-secondary text-black py-1 px-4 rounded-20px">$2000</span>
                </h3>
                <p className="desc text-16px mb-8 xs:mb-6 text-black">7251 Fulton St. South Richmond Hill,
                    FL
                    11419
                </p>
                <div className="post-meta flex xs:flex-wrap gap-6 xs:gap-4 items-center">
                    <a className="single-post-meta flex gap-2 items-center">
                        <span className="icon text-black"><i className="icon-bed text-18px"></i></span>
                        <span className="text text-14px text-black font-medium capitalize">4 bedrooms</span>
                    </a>
                    <a className="single-post-meta flex gap-2 items-center">
                        <span className="icon text-black"><i className="icon-bathtub text-18px"></i></span>
                        <span className="text text-14px text-black font-medium capitalize">2
                            bathrooms</span>
                    </a>
                    <a className="single-post-meta flex gap-2 items-center">
                        <span className="icon text-black"><i className="icon-transform text-18px"></i></span>
                        <span className="text text-14px text-black font-medium capitalize">1000 sqft</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SellPostCard;