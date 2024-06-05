import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const EditSellPost = () => {
    const oldPost = useLoaderData();
    const {_id, title, price, post_img, category, desc, location: {address, city, state, zipcode},others: {bedroom,
        bathroom, sqft}} = oldPost;

const handlePostEdit = async (e) =>{
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const post_img = form.img.value;
    const address = form.address.value;
    const city = form.city.value;
    const state = form.state.value;
    const zipcode = form.zipcode.value;
    const category = form.category.value;
    const bedroom = form.bedroom.value;
    const bathroom = form.bathroom.value;
    const sqft = form.sqft.value;
    const desc = form.desc.value;

    const data = {title, price, post_img, category, desc, location: {address, city, state, zipcode},others: {bedroom, bathroom, sqft}};
    console.log(data);
    await fetch(`http://localhost:4000/sellposts/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data){
            toast.success('Updated Your Post');
        }else{
            toast.error('Somthing is wrong! Please try again')
        }
      });
}

    return (
        <div className="edit-sell-page min-h-screen">
            <h2 className="text-center my-10">Edit Sell Post</h2>
            <div className="form-area w-3/4 mx-auto">
                <form onSubmit={handlePostEdit} className="sell-post-form">
                    <div className="grid grid-cols-12 gap-x-[18px] lg:gap-x-3 gap-y-4 sm:gap-y-3">
                        <div className="col-span-6 xs:col-span-12">
                            <input
                                className="w-full px-6 py-4 font-bodyFont text-black-4 text-18px font-medium border border-solid border-black-20 rounded-12px"
                                name="title" type="text" placeholder="Post title..." defaultValue={title} required/>
                        </div>
                        <div className="col-span-6 xs:col-span-12">
                            <input
                                className="w-full px-6 py-4 font-bodyFont text-black-4 text-18px font-medium border border-solid border-black-20 rounded-12px"
                                name="price" type="number" placeholder="Price..." defaultValue={price} required/>
                        </div>
                        <div className="col-span-6 xs:col-span-12">
                            <input
                                className="w-full px-6 py-4 font-bodyFont text-black-4 text-18px font-medium border border-solid border-black-20 rounded-12px"
                                name="img" type="text" placeholder="Img url..." defaultValue={post_img} required/>
                        </div>
                        <div className="col-span-6 xs:col-span-12">
                            <input
                                className="w-full px-6 py-4 font-bodyFont text-black-4 text-18px font-medium border border-solid border-black-20 rounded-12px"
                                name="address" type="text" placeholder="Address..." defaultValue={address} required/>
                        </div>
                        <div className="col-span-6 xs:col-span-12">
                            <input
                                className="w-full px-6 py-4 font-bodyFont text-black-4 text-18px font-medium border border-solid border-black-20 rounded-12px"
                                name="city" type="text" placeholder="City..." defaultValue={city} required/>
                        </div>
                        <div className="col-span-6 xs:col-span-12">
                            <input
                                className="w-full px-6 py-4 font-bodyFont text-black-4 text-18px font-medium border border-solid border-black-20 rounded-12px"
                                name="state" type="text" placeholder="State..." defaultValue={state} required/>
                        </div>
                        <div className="col-span-6 xs:col-span-12">
                            <input
                                className="w-full px-6 py-4 font-bodyFont text-black-4 text-18px font-medium border border-solid border-black-20 rounded-12px"
                                name="zipcode" type="text" placeholder="Zip code..." defaultValue={zipcode} required/>
                        </div>
                        <div className="col-span-6 xs:col-span-12">
                            <input
                                className="w-full px-6 py-4 font-bodyFont text-black-4 text-18px font-medium border border-solid border-black-20 rounded-12px"
                                name="category" type="text" placeholder="Type category..." defaultValue={category} required/>
                        </div>
                        <div className="col-span-4 xs:col-span-12">
                            <input
                                className="w-full px-6 py-4 font-bodyFont text-black-4 text-18px font-medium border border-solid border-black-20 rounded-12px"
                                name="bedroom" type="text" placeholder="How many badroom..." defaultValue={bedroom} required/>
                        </div>
                        <div className="col-span-4 xs:col-span-12">
                            <input
                                className="w-full px-6 py-4 font-bodyFont text-black-4 text-18px font-medium border border-solid border-black-20 rounded-12px"
                                name="bathroom" type="text" placeholder="How many bathroom..." defaultValue={bathroom} required/>
                        </div>
                        <div className="col-span-4 xs:col-span-12">
                            <input
                                className="w-full px-6 py-4 font-bodyFont text-black-4 text-18px font-medium border border-solid border-black-20 rounded-12px"
                                name="sqft" type="text" placeholder="How many sqft..." defaultValue={sqft} required/>
                        </div>
                        <div className="col-span-12">
                            <textarea
                                className="px-6 py-3 bg-white w-full h-full border border-solid border-black-20 rounded-12px placeholder:font-normal placeholder:text-18px placeholder:text-black-4"
                                name="desc" type="text" cols="20" rows="9" placeholder="Comment" defaultValue={desc} required>
                                                    </textarea>
                        </div>
                        <div className="col-span-12 mt-2">
                            <button
                                className="theme-btn bg-primary relative px-14 py-6 rounded-[100px] text-black font-bodyFont text-18px leading-none font-semibold"
                                type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditSellPost;