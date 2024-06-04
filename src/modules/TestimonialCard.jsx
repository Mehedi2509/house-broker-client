import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommaIcon from "../images/logo/comma-icon.png";


const TestimonialCard = () => {
    return (
        <div className="testimonial-card style-1 flex flex-col gap-6 px-12 py-[42px] xs:p-8 rounded-20px shadow-[0px_10px_40px_0px_rgba(0,0,0,0.02)] bg-white">
			<div className="review-icon flex items-center gap-1 text-20">
                <FontAwesomeIcon className="text-black" icon={faStar} />
                <FontAwesomeIcon className="text-black" icon={faStar} />
                <FontAwesomeIcon className="text-black" icon={faStar} />
                <FontAwesomeIcon className="text-black" icon={faStar} />
                <FontAwesomeIcon className="text-black" icon={faStar} />
			</div>
			<p className="desc font-headingFont text-18px text-text-color">Liber iriure vix cu, fugit
									dicat no qui, posse detraxit has cu. Ex sint impedit vim,autem justo oportere no
									vel. Cu esse tacimates moderatius sed. Liber iriure vix cu, fugit dicat no qui,
									posse detraxit has cu. </p>
			<div className="user-meta mt-2 flex items-center justify-between">
				<div className="image-wrapper flex items-center gap-4 ">
					<div className="image relative w-[60px] h-[60px] rounded-full overflow-hidden ">
						<img className="absolute top-0 left-0 w-full h-full object-cover" src="resource/images/testimonial-card/img-1.jpg" alt="meta"></img>
					</div>
					<div>
						<h6 className="name text-20px font-semibold text-black">Joel Yamaha, PHD</h6>
						<p className="title text-14px font-semibold leading-[19.6px] tracking-[-0.21px] text-black mt-0.5">
												DevOps Lead Engineer</p>
					</div>
				</div>
				<div className="icon">
					<img src={CommaIcon} alt="comma icon"></img>
				</div>
			</div>
		</div>
    );
};

export default TestimonialCard;