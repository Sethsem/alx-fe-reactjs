import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
        <li>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link>
        </li>
        <li>
          <Link to="/services" style={{ color: "#fff", textDecoration: "none" }}>Services</Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
