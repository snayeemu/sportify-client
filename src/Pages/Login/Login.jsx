import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { signIn, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((userCredential) => {
        setError("");
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user);
        const toSave = {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        };
        fetch("https://summer-camp-server-two-delta.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(toSave),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        // ...
        console.log(errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
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
                name="password"
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
            <div className="flex justify-center mt-1">
              <button
                onClick={handleGoogleLogin}
                type="button"
                className="btn btn-accent btn-circle mx-1"
                // Add social login functionality
              >
                <FaGoogle></FaGoogle>
              </button>
            </div>
          </div>
        </form>
        {error && <p className="text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
