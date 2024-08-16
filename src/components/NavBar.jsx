import { useNavigate } from "react-router-dom";

function NavBar() {

  const navigate = useNavigate();
  
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item" onClick={() => navigate("/")}>
          Home
        </li>
        <li className="nav-item" onClick={() => navigate("/about")}>
          About
        </li>
        <li className="nav-item" onClick={() => navigate("/cars")}>
          Cars
        </li>
        <li className="nav-item" onClick={() => navigate("/contact")}>
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
