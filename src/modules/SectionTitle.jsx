
// eslint-disable-next-line react/prop-types
const SectionTitle = ({shortTitle, title}) => {
    return (
        <div className="section-title-wrapper flex flex-col justify-center items-center mb-[60px]">
			<div className="section-title flex flex-col items-center gap-4">
				<div className="content flex flex-col items-center gap-1 wow animate__animated animate__flipInX animate__slow"
						data-wow-delay="0s">
					<h6 className="short-title font-short leading-[26px] tracking-normal font-normal text-[#FF6732]">{shortTitle}</h6>
					<h2 className="title font-semibold text-center">{title}</h2>
				</div>
				<div className="divider self-center w-64 h-[3px] bg-[linear-gradient(90deg,#FF6732_0%,#FFC132_100%)] wow animate__animated animate__bounceInLeft animate__fast"
						data-wow-delay=".4s"></div>
			</div>
		</div>
    );
};

export default SectionTitle;