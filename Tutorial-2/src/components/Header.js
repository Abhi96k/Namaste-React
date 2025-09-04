import { Link, useLocation } from "react-router-dom";
import { LOGO_URL } from "../utils/contant";

import UserContext from "../Context/UserContext.js";
import { useContext } from "react";
import { useSelector } from "react-redux";

//selector subscribe to the store and select the required slice of state
// whenever the selected slice of state changes the component will re-render
// if we don't use selector the component will not re-render when the state changes
// selector is a function that takes the entire store state and returns the required slice of state
const Header = () => {
  const location = useLocation();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  console.log(loggedInUser);

  // Calculate total items in cart (sum of quantities)
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isActive = (path) => {
    return location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";
  };

  return (
    <div className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-12 w-auto" src={LOGO_URL} alt="Header Image" />
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
                <Link
                  to="/cart"
                  className={`flex items-center space-x-1 transition-colors duration-200 ${isActive(
                    "/cart"
                  )}`}
                >
                  <span className="text-xl">🛒</span>
                  <span>Cart {totalItems > 0 && `(${totalItems})`}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
