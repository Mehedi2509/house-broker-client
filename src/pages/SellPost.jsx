import Breadcrumb from "../components/Breadcrumb";
import useAuth from "../hooks/useAuth";
import SectionTitle from "../modules/SectionTitle";
import SellPostCard from "../modules/SellPostCard";


const SellPost = () => {
    const {sellPosts} = useAuth();

    return (
        <div className="sell-page-area">
            <Breadcrumb pageName={'Sell Post'} />
            <div className="sell-posts-area bg-bg-2 py-[120px] lg:py-[100px] sm:py-[80px]">
                <div className="container">
                    <SectionTitle shortTitle={'Our sell post here'} title={'All Sell Posts'} />
                    <div className="grid grid-cols-12 gap-6">
                        {sellPosts.map((sellPost)=> (
                            <SellPostCard
                                key={sellPost._id}
                                sellPost={sellPost}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellPost;