import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TeamCard = () => {
    return (
        <div className="team-member-card relative rounded-25px overflow-hidden group max-w-[460px]">
			<div className="image relative w-full h-[496px] overflow-hidden">
				<img className="absolute top-0 left-0 w-full h-full object-cover custom-transition scale-[1.001] group-hover:scale-105"
					src="resource/images/team/img-1.jpg" alt="portfolio image"></img>
			</div>
			<div
				className="content-wrapper absolute top-0 left-0 w-full h-full transition-all duration-700 invisible opacity-0 -translate-y-full group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
				<div className="overlay absolute top-0 left-0 w-full h-full bg-primary bg-opacity-90"></div>
				<div
					className="content relative top-1/2 left-20 xl:left-10 lg:left-5 md:left-10 -translate-y-1/2">
					<h3 className="name font-headingFont text-42px font-semibold text-white"><a href="#">Jason
							Roy</a></h3>
					<p className="title font-headingFont text-18px font-medium text-white">Buying Agent</p>
					<div className="social-profile flex gap-3 items-center mt-6">
						<a className="w-[34px] h-[34px] flex justify-center items-center border border-white rounded-full text-14px text-white custom-transition hover:bg-secondary hover:text-black hover:border-secondary"
							href="#"><FontAwesomeIcon icon={faInstagram} /></a>
						<a className="w-[34px] h-[34px] flex justify-center items-center border border-white rounded-full text-14px text-white custom-transition hover:bg-secondary hover:text-black hover:border-secondary"
							href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
						<a className="w-[34px] h-[34px] flex justify-center items-center border border-white rounded-full text-14px text-white custom-transition hover:bg-secondary hover:text-black hover:border-secondary"
							href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
					</div>
				</div>
			</div>
		</div>
    );
};

export default TeamCard;