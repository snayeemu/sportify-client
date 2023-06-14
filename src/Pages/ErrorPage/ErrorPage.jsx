import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="mb-4">
      <Link to={"/"}>
        <button className="btn btn-warning w-full relative top-10 hover:bg-green-600">
          Go Home
        </button>
      </Link>
      <img
        className="w-full"
        src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png"
        alt=""
      />
    </div>
  );
};

export default ErrorPage;
