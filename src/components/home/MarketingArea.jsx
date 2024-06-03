import InfoCard from "../../modules/InfoCard";


const MarketingArea = () => {
    return (
        <div className="marketing-area bg-black ">
            <div className="container">
                <div className="border-x border-solid border-[#373737] py-[140px] lg:py-[120px] md:py-[100px] sm:py-20">
                    <div className="section-title wow animate__animated animate__jello animate__slow animate__delay-0.5s">
                        <div className="content flex items-center text-center flex-col gap-2">
                            <h2 className="title font-semibold text-white">Put the power of the worlds largest <br
                                    className="xxl:hidden"/> CRE marketing platform </h2>
                            <p className="desc font-headingFont text-18px text-black-3">Discover the most trending villas
                                worldwide for an unforgettable experience.</p>
                        </div>
                    </div>
                    <div className="info-card-wrapper mt-16 flex md:flex-wrap border-y-2 border-x-0 border-solid border-gray-3">
                        <InfoCard title={'More Exposure'} desc={'With 96% of the Fortune 1000 searching LoopNet and over 12 million monthly global unique visitors - you will reach nearly every qualified prospect searching for space.'} />                       
                        <div className="divider w-[2px] h-auto md:w-full md:h-[2px] bg-gray-3 mt-0 mb-0"></div>
                        <InfoCard title={'More Impact'} desc={'With 96% of the Fortune 1000 searching LoopNet and over 12 million monthly global unique visitors - you will reach nearly every qualified prospect searching for space.'} />
                        <div className="divider w-[2px] h-auto md:w-full md:h-[2px] bg-gray-3 mt-0 mb-0"></div>
                        <InfoCard title={'More Opportunity'} desc={'With 96% of the Fortune 1000 searching LoopNet and over 12 million monthly global unique visitors - you will reach nearly every qualified prospect searching for space.'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketingArea;