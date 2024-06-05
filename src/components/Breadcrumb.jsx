/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import BradcrumbImg from '../images/section-bg/page-breadcrumb.jpg';



const Breadcrumb = ({pageName}) => {

    return (
        <div className="page-breadcrumb-area">
        <div className="container-fulid">
            <div className="relative flex justify-center items-center bg-no-repeat bg-cover overflow-hidden"
            style={{backgroundImage: `url(${BradcrumbImg})`,}}>
            <div className="absolute top-0 left-0 w-full h-full bg-black-20"></div>
                <div className="relative z-10 pt-[242px] pb-[140px]">
                    <div className="breadcrumb-wrapper text-center">
                        <div className="page-heading">
                            <h2 className="text-white font-semibold">{pageName}</h2>
                        </div>
                        <div className="breadcrumb-list mt-4  ">
                            <ul className="flex justify-center gap-2 w-[168px] mx-auto font-bodyFont text-18px font-normal text-white">
                                <li><Link to={"/"}>Home</Link></li>
                                <li className="active flex items-center"><span>/</span><Link className="ml-2">{pageName}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Breadcrumb;