import { Link } from "react-router-dom";
import headerLogo from "../images/logo/logo.png";
import useAuth from "../hooks/useAuth";
import IconUser from "../images/logo/uesr-icon.png";
import toast from "react-hot-toast";

function Header() {
  const {user, logoutUser} = useAuth();

  console.log(user);

  const handleLogoutUser = () =>{
    logoutUser();
    toast.success('Logout successful');
  }

    return (
      <div className="header-area fixed w-full top-0 left-0 z-50">
        <div className="container-fluid max-w-[1920px] mx-auto">
         <div className="navbar bg-bg-3 py-4 px-8 rounded-12px">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="navbar-start">
              <div className="flex-none hidden md:block">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
              </div>
              <Link to={"/"}>
                <img src={headerLogo} alt="Logo"></img>
              </Link>
            </div>
            <div className="navbar-center flex lg:hidden">
              <ul className="menu menu-horizontal px-1 text-18px gap-4 text-black">
                <li><Link to={"/"} className="w-full">Home</Link></li>
                <li><Link to={"/dashboard"}>Dashboard</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/sellpost"}>Sell Post</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li>
                  <details>
                    <summary>Pages</summary>
                    <ul className="p-2 w-[150px] z-10">
                      <li><Link to={"/blog"} className="w-full">Blog</Link></li>
                      <li><Link to={"/team"} className="w-full">Our Team</Link></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
            <div className="flex-none gap-2">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {
                      user?.img && (<img alt="user profile picture" src={user?.img} />)
                    }
                    {
                      !user?.img &&(<img alt="user profile picture" src={IconUser} />)
                    }
                  </div>
                </div>
                <ul tabIndex={0} className="mt-6 z-[1] p-4 shadow menu menu-sm dropdown-content bg-bg-3 text-black rounded-box w-52">
                  {!user && (
                    <>
                      <li><Link to={"/login"}>Log In</Link></li>
                      <li><Link to={"/registration"}>Registration</Link></li>
                    </>
                  )}
                  {user && (
                    <>
                      <li>
                        <a className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </a>
                      </li>
                      <li><a>Edit Profile</a></li>
                      <li><a onClick={handleLogoutUser}>Logout</a></li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 min-h-full bg-bg-3 text-black">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/dashboard"}>Dashboard</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/sellpost"}>Product</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li>
            <a>Pages</a>
            <ul className="p-2">
              <li><Link to={"/blog"}>Blog</Link></li>
              <li><Link to={"/team"}>Our Team</Link></li>
            </ul>
          </li>
        </ul>
      </div>
        </div>
        </div>
      </div>
    )
}

export default Header;
