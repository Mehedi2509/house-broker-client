import HeroSection from "../components/home/HeroSection";
import SectionTitle from "../modules/SectionTitle";

const Home = () => {
  
    
  return (
    <div className="home-page">
      <HeroSection/>
      <SectionTitle shortTitle={'Short-term Rental'} title={'Client Testimonials'}/>
    </div>
    
  )
}

export default Home;