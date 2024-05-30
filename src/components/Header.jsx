import { Link } from "react-router-dom";
import headerLogo from "../images/logo/logo.png";

function Header() {
    return (
      <div className="header-area fixed w-full top-0 left-0 z-50">
        <div className="container-fluid max-w-[1920px] mx-auto">
         <div className="navbar bg-primary py-4 px-8 rounded-12px">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost hidden lg:flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a>Home</a>
                    <ul className="p-2">
                      <li><Link to={"/"}>Home Style 1</Link></li>
                      <li><Link to={"/home-2"}>Home Style 2</Link></li>
                    </ul>
                  </li>
                  <li><Link to={"/dashboard"}>Dashboard</Link></li>
                  <li><Link to={"/about"}>About</Link></li>
                  <li><Link to={"/product"}>Product</Link></li>
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
              <Link to={"/"}>
                <img src={headerLogo} alt="Logo"></img>
              </Link>
            </div>
            <div className="navbar-center flex lg:hidden">
              <ul className="menu menu-horizontal px-1 text-18px gap-4 text-black">
                <li>
                  <details>
                    <summary>Home</summary>
                    <ul className="p-2 w-[150px] z-10">
                      <li><Link to={"/"} className="w-full">Home Style 1</Link></li>
                      <li><Link to={"/home-2"} className="w-full">Home Style 2</Link></li>
                    </ul>
                  </details>
                </li>
                <li><Link to={"/dashboard"}>Dashboard</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/product"}>Product</Link></li>
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
                    <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <ul tabIndex={0} className="mt-6 z-[1] p-4 shadow menu menu-sm dropdown-content bg-primary rounded-box w-52">
                  <li><Link to={"/login"}>Log In</Link></li>
                  <li><Link to={"/registration"}>Registration</Link></li>
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a>Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
}

export default Header;
