import { Link, useLocation } from "react-router-dom";
import { LOGO_URL } from "../utils/contant";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={LOGO_URL} alt="Header Image" />
        </Link>
      </div>

      <div className="nav-items">
        <ul>
          <li className={isActive("/")}>
            <Link to="/">Home</Link>
          </li>
          <li className={isActive("/about")}>
            <Link to="/about">About Us</Link>
          </li>
          <li className={isActive("/contact")}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={isActive("/grocery")}>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <span className="cart-icon">🛒</span>
            Cart
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
