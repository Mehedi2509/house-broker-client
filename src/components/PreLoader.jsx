import preLoader from '../images/logo/preloader.gif';

const PreLoader = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <img src={preLoader} alt="preloader"></img>
        </div>
    );
};

export default PreLoader;