import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import SectionTitle from "../modules/SectionTitle";
import SellPostCard from "../modules/SellPostCard";


const SellPost = () => {
    const [sellPosts, setSellPosts] = useState([]);
    console.log(sellPosts);

    // Fatching sell posts
    useEffect(()=>{
        fetch("http://localhost:4000/sellposts")
        .then((res) => res.json())
        .then((data) => setSellPosts(data));
    }, []);

    return (
        <div className="sell-page-area">
            <Breadcrumb pageName={'Sell Post'} />
            <div className="sell-posts-area bg-bg-2 py-[120px] lg:py-[100px] sm:py-[80px]">
                <div className="container">
                    <SectionTitle shortTitle={'Our sell post here'} title={'All Sell Posts'} />
                    <div className="grid grid-cols-12">
                        {/* {sellPosts.map((sellPost)=> (
                            <SellPostCard
                                key={sellPost._id}
                                sellPost={sellPost}
                            />
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellPost;