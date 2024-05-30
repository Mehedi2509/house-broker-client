import { Link } from "react-router-dom";

const Registration = () => {
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
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="Type your name..."
                    className="input input-bordered"
                    required
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
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
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
                    required
                  />
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
                  <button className="btn btn-primary text-18px font-semibold">Submit</button>
                </div>
                <p className="text-18px text-center">Or</p>
                <button className="btn btn-gray text-18px font-semibold">Login With Google</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration;