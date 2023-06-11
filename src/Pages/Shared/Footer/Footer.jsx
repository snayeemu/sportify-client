import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#333439] text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Sportify Summer Camp</h2>
          <p className="mt-2">1234 Main Street, City, State, ZIP</p>
        </div>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/programs" className="hover:text-gray-300">
            Programs
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
