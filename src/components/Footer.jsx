import { useAuth } from "../context/auth.context";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const { user } = useAuth();
  const { checked } = useAuth();

  return (
    <footer
      className={`py-3 my-1 text-primary opacity-75  w-100 ${
        checked ? "" : `bg-dark text-light opacity-100`
      } `}
    >
      <ul className="nav justify-content-center border-bottom pb-3 mb-1">
        <li className="nav-item pe-5">
          <i className="bi bi-info-circle ps-3 fs-5"></i>
          <NavLink to="/about" className="nav-link px-2 text-primary p-0">
            About
          </NavLink>
        </li>
        {user && (
          <li className="nav-item pe-5">
            <i className="bi bi-heart ps-3 fs-5"></i>
            <NavLink to="/favorites" className="nav-link px-2 text-primary p-0">
              Favorite
            </NavLink>
          </li>
        )}
        {user && user.isBusiness && (
          <li className="nav-item pe-5">
            <i className="bi bi-person-rolodex ps-4 fs-5"></i>
            <NavLink to="/my-cards" className="nav-link px-2 text-primary p-0">
              My-Cards
            </NavLink>
          </li>
        )}
      </ul>
      <div className="copyRight text-center pe-5">
        Eliezer Bauer
        <span className="mx-2">&copy;</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};
export default Footer;