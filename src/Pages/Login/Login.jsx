import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="flex items-center">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 py-2 focus:outline-none"
                onClick={handleTogglePassword}
              >
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </button>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              {"Don't"} have an account?{" "}
              <Link to="/register" className="text-blue-600">
                Register here
              </Link>
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Or log in with:</p>
            <div className="flex justify-center">
              <button
                type="button"
                className="btn btn-accent btn-circle mx-1"
                // Add social login functionality
              >
                <i className="fab fa-facebook-f"></i>
              </button>
              <button
                type="button"
                className="btn btn-accent btn-circle mx-1"
                // Add social login functionality
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                type="button"
                className="btn btn-accent btn-circle mx-1"
                // Add social login functionality
              >
                <i className="fab fa-google"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
