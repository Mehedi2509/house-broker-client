import SectionTitle from "../../modules/SectionTitle";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialCard from "../../modules/TestimonialCard";


const TestimonialSection = () => {
    return (
        <div className="testimonial-area bg-bg-2 py-[120px] lg:py-[100px] sm:py-[80px]">
            <div className="container">
                <div className="section-title-area">
                    <SectionTitle shortTitle={'Short-term Rental'} title={'Client Testimonials'}/>
                </div>
                <div className="testimonial-slider-area">
                    <Swiper
                        modules={[Pagination]}
                        breakpoints={{
                        375: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        }}
                        spaceBetween={24}
                        loop={true}
                        autoplay={true}
                        slidesPerView={2}
                        pagination={{
                            clickable: true,
                        }}
                        >
                        <SwiperSlide>
                            <TestimonialCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;