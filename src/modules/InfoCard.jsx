import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// eslint-disable-next-line react/prop-types
const InfoCard = ({title, desc}) => {
    return (
        <div className="info-card p-[50px] lg:p-7 flex flex-col wow animate__animated animate__bounceInRight animate__slow animate__delay-0.9s">
            <div className="icon-wrapper flex gap-6 items-center">
                <div className="icon w-[61px] h-[61px] rounded-full bg-gray-2 flex items-center justify-center ">
                    <FontAwesomeIcon className="icon-star text-white text-24px" icon={faStar} />
                </div>
                <h5 className="title text-white">{title}</h5>
            </div>
            <p className="desc text-black-3 mt-6 text-18px">{desc}</p>
        </div>
    );
};

export default InfoCard;