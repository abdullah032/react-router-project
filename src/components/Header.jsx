import { Link, NavLink } from "react-router-dom";

export default function Header() {
  let selectedLinkStyle = {
    color: "#161616",
    fontWeight: "bold",
    textDecoration: "underline",
  };
  return (
    <header>
      <Link className="site-logo" to={"/"}>
        #VanLife
      </Link>
      <nav>
        <NavLink
          to={"/about"}
          style={({ isActive }) => (isActive ? selectedLinkStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to={"/vans"}
          style={({ isActive }) => (isActive ? selectedLinkStyle : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to={"/host"}
          style={({ isActive }) => (isActive ? selectedLinkStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to={"/host/income"}
          style={({ isActive }) => (isActive ? selectedLinkStyle : null)}
        >
          Income
        </NavLink>
      </nav>
    </header>
  );
}
