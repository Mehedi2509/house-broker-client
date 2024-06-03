import HeroSection from "../components/home/HeroSection";
import MarketingArea from "../components/home/MarketingArea";
import SectionTitle from "../modules/SectionTitle";
import SellPostCard from "../modules/SellPostCard";
import TeamCard from "../modules/TeamCard";
import TestimonialCard from "../modules/TestimonialCard";

const Home = () => {
  
    
  return (
    <div className="home-page">
      <HeroSection/>
      <SellPostCard/>
      <MarketingArea/>
      <TeamCard/>
      <SectionTitle shortTitle={'Short-term Rental'} title={'Client Testimonials'}/>
      <TestimonialCard/>
    </div>
    
  )
}

export default Home;