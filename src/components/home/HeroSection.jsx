import heroBg from '../../images/section-bg/image-six.jpg';

const HeroSection = () => {
  return (
    <div className="hero bg-base-200 relative" style={{backgroundImage: `url(${heroBg})`,}}>
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black-40"></div>
        <div className="hero-content text-center pt-[300px] pb-[200px]">
            <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-white">Hello there</h1>
            <p className="py-6 text-20px text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="bg-bg-2 border-green text-black rounded-8px hover:bg-white hover:border-white text-18px font-semibold py-4 px-9">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;