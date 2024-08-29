import { AuthContext } from "../Providers/AuthProviders";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  console.log('location in the login page', location);
  const navigate = useNavigate();

  // toggle show password
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget); // will render whole form's html structure
    const form = new FormData(e.currentTarget); // will render form data
    console.log(form);

	const email = form.get("email");
    const password = form.get("password");
    console.log(email, password); // test

    signIn(email, password) // calling signIn function from Authprovider.jsx
      .then((result) => {
        console.log(result.user);
        // Auth redirect after login with password
        navigate(location?.state? location.state : '/');  
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Google Sign In
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    console.log('google mama is coming');
    signInWithPopup(auth,GoogleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      // Auth redirect after login with password
      navigate(location?.state? location.state : '/');  
    })
    .catch(error => {
      console.log('error',error.message);
    })
  }

  return (
      <div>
        <h2 className="text-3xl my-10 text-center font-bold">Please Login</h2>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            {/* toggle show password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
              <span
                className="absolute top-4 right-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
		  {/* google sign in */}
          <div>  
            <button className="btn btn-secondary m-2 item-center" onClick={handleGoogleSignIn}>Google Sign In</button>
          </div>
        </form>
		<p className="text-center mt-4">
          Do not have an account?
          <Link className="text-blue-600 font-bold" to="/register">
            Register
          </Link>
        </p>
      </div>
  );
};

export default Login;
