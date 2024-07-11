import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Login = () => {

  const {googleLogin, loginUser, user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/';

  const handleLoginUser = async (e) =>{
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    await loginUser(email, password);

    form.reset();
    toast.success('Login Successful');
  }

  const handleGoogleLogin = () =>{
    googleLogin().then((data) =>{
      if(data?.user?.email){
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
          img: data?.user?.photoURL,
          role: 'user',
        };

        fetch('http://localhost:4000/users', {
          method: "POST",
          headers: {
            'Content-Type':"application/json"
          },
          body: JSON.stringify(userInfo)
        })
        .then((res) => res.json())
        .then((data) => console.log(data?.email))
      }
    })
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
          <div className="hero-content lg:flex-col flex-row-reverse gap-16">
            <div className="lg:text-center text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6 text-18px">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                a id nisi.
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleLoginUser}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
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
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                  />
                  <label className="label flex justify-between mt-2">
                    <Link to={"/forget-password"} className="label-text-alt link link-hover text-16px">
                      Forgot password?
                    </Link>
                    <Link to={"/registration"} className="label-text-alt link link-hover text-16px">
                      You have no account?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-16px">Login</button>
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

export default Login;