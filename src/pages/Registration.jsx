import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

const Registration = () => {
  const [passMatch, setPassMatch] = useState(true);
  const {googleLogin, createUser, user} = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const handleCreateUser = async (e) =>{
    e.preventDefault();

    const form = e.target;
    // const name = form.name.value;
    // const img_uri = form.img_url.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password === confirm_password){
      setPassMatch(true);
      await createUser(email, password);
      form.reset();
      alert('Creating accout successful')
    }else{
      setPassMatch(false);
    }
  }

  const handleGoogleLogin = () =>{
    googleLogin();
  }

  useEffect(() => {
    if(user){
      navigate(from, {replace: true});
    }
  },[user, from, navigate]);

  return (
    <div className="registration-area">
      <div className="container">
        <div className="hero pt-[250px] pb-[160px]">
          <div className="hero-content md:flex-col flex-row-reverse gap-16">
            <div className="md:text-center text-left">
              <h2 className="text-5xl font-bold">Registration</h2>
              <p className="py-6 text-18px">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                a id nisi.
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleCreateUser}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="Type your name..."
                    className="input input-bordered"
                    name="name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Profile Photo Url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your image url"
                    className="input input-bordered"
                    name="img_url"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered"
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="input input-bordered"
                    name="password"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Re-enter your password"
                    className="input input-bordered"
                    name="confirm_password"
                  />
                  {
                    !passMatch && (<p className="mt-3 px-4 py-3 rounded-4px text-18px font-medium text-black bg-red-100">Password is not matched</p>)
                  }
                  <label className="label flex justify-between mt-2">
                    <Link to={"/forget-password"} className="label-text-alt link link-hover text-16px">
                      Forgot password?
                    </Link>
                    <Link to={"/login"} className="label-text-alt link link-hover text-16px">
                      Already have an account?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input type="submit" value="Submit" className="btn btn-primary text-18px font-semibold" />
                </div>
                <p className="text-18px text-center">Or</p>
                <button onClick={handleGoogleLogin} className="btn btn-gray text-18px font-semibold">Login With Google</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration;