import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    setErrors([]);

    const passwordErrors = [];
    if (password.length < 6) {
      passwordErrors.push("Password should be at least 6 characters long");
    }
    if (!/[A-Z]/.test(password)) {
      passwordErrors.push(
        "Password should contain at least one capital letter"
      );
    }
    if (!/[!@#$%^&*()]/.test(password)) {
      passwordErrors.push(
        "Password should contain at least one special character"
      );
    }

    if (passwordErrors.length > 0) {
      setErrors(passwordErrors);
      return;
    }

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password2 = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photoURL = form.photoURL.value;

    if (password2 != confirmPassword) {
      setErrors("Password does not matched");
      return;
    }

    createUser(email, password2)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);

        updateUserProfile(name, photoURL)
          .then(() => {
            // Profile updated!
            // ...

            navigate("/");
          })
          .catch((error) => {
            // An error occurred
            // ...
            console.log(error.message);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter your name"
            />
          </div>
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
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password2"
              type="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="input input-bordered w-full"
              placeholder="Confirm your password"
            />
          </div>
          <div>
            <label
              htmlFor="photoURL"
              className="text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              id="photoURL"
              name="photoURL"
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter your photo URL"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-full">
              Sign up
            </button>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Login here
              </Link>
            </p>
          </div>
        </form>
        <p className="text-red-600">{errors}</p>
      </div>
    </div>
  );
};

export default Register;
