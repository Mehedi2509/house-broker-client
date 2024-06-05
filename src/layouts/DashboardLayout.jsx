import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import IconUser from "../images/logo/uesr-icon.png";


const DashboardLayout = () => {

  const {user} = useAuth();


  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-bg-3 py-6 px-0">
          <div className="flex-none hidden md:block">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div className="w-full grid grid-cols-12 md:flex items-center gap-6">
            <div className="col-span-2">
            <h4 className="text-black text-center">Dashboard</h4>
            </div>
            <div className="col-span-10 flex items-center">
            <Link to={"/"} className="px-4 py-2 text-20px font-semibold text-black rounded-4px hover:bg-black hover:text-white custom-transition">Home</Link>
            <Link to={"/sellpost"} className="px-4 py-2 text-20px font-semibold text-black rounded-4px hover:bg-black hover:text-white custom-transition">Sell Post</Link>
            </div>
          </div> 
        </div>
        {/* Page content here */}
        <div className="container-full">
          <div className="dashboard-page-layout grid grid-cols-12 gap-6 min-h-screen">
            <div className="md:hidden col-span-2">
              <div className="bg-bg-2 h-full pt-10">
                <div className="user-info flex flex-col items-center gap-4">
                  <div className="image relative w-20 h-20 rounded-full overflow-hidden border-4 border-black-3">
                    {
                      user?.img && (<img className="absolute top-0 left-0 w-full h-full" alt="user profile picture" src={user?.img} />)
                    }
                    {
                      !user?.img &&(<img alt="user profile picture" src={IconUser} />)
                    }
                  </div>
                  <h6 className="text-black text-24px font-semibold">{user?.name}</h6>
                </div>
                <ul className="menu p-4 bg-bg-2 mt-6">
                  <li className="text-black-2 text-20px font-semibold"><Link to={"mysellpost"}>My Sell Post</Link></li>
                  <li className="text-black-2 text-20px font-semibold"><Link to={"addsellpost"}>Add Sell Post</Link></li>
                  {/* 
                  <li className="text-black-2 text-20px font-semibold"><Link to={"mybooking"}>My Booking</Link></li>
                  <li className="text-black-2 text-20px font-semibold"><Link to={"addtestimonial"}>Add Testimonial</Link></li>
                  <li className="text-black-2 text-20px font-semibold"><Link to={"addblogpost"}>Add Blog Post</Link></li>
                  <li className="text-black-2 text-20px font-semibold"><Link to={"addteammember"}>Add Team Member</Link></li> 
                  */}
                </ul>
              </div>
            </div>
            <div className="col-span-10 md:col-span-12">
              <Outlet/>
            </div>
          </div>
        </div>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 min-h-full bg-primary">
            <div className="user-info flex flex-col items-center gap-4">
              <div className="image relative w-20 h-20 rounded-full overflow-hidden border-4 border-black-3">
                {
                  user?.img && (<img className="absolute top-0 left-0 w-full h-full" alt="user profile picture" src={user?.img} />)
                }
                {
                  !user?.img &&(<img alt="user profile picture" src={IconUser} />)
                }
              </div>
              <h6 className="text-white text-24px font-semibold">{user?.name}</h6>
            </div>

            <li className="text-black text-18px font-semibold"><Link to={""}>My Sell Post</Link></li>
            <li className="text-black text-18px font-semibold"><Link to={""}>My Booking</Link></li>
            <li className="text-black text-18px font-semibold"><Link to={""}>Add Testimonial</Link></li>
            <li className="text-black text-18px font-semibold"><Link to={""}>Add Blog Post</Link></li>
            <li className="text-black text-18px font-semibold"><Link to={""}>Add Team Member</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default DashboardLayout