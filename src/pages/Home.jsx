import HeroSection from "../components/home/HeroSection";
import MarketingArea from "../components/home/MarketingArea";
import TestimonialSection from "../components/home/TestimonialSection";
import SellPostCard from "../modules/SellPostCard";
import TeamCard from "../modules/TeamCard";

const Home = () => {
  
    
  return (
    <div className="home-page">
      <HeroSection/>
      <SellPostCard/>
      <MarketingArea/>
      <TeamCard/>
      <TestimonialSection/>
    </div>
    
  )
}

export default Home;