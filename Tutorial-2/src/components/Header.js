import { Link, useLocation } from "react-router-dom";
import { LOGO_URL } from "../utils/contant";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";
  };

  return (
    <div className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-8 w-auto" src={LOGO_URL} alt="Header Image" />
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className={`transition-colors duration-200 ${isActive("/")}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`transition-colors duration-200 ${isActive(
                    "/about"
                  )}`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`transition-colors duration-200 ${isActive(
                    "/contact"
                  )}`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/grocery"
                  className={`transition-colors duration-200 ${isActive(
                    "/grocery"
                  )}`}
                >
                  Grocery
                </Link>
              </li>
              <li>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  <span className="text-xl">🛒</span>
                  <span>Cart</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
