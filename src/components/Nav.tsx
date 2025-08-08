import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="mt-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:underline">
            خانه
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">
            درباره ما
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            تماس
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
