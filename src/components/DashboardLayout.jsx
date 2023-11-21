import { NavLink, Outlet } from "react-router-dom";
export default function DashboardLayout() {
  let selectedLinkStyle = {
    color: "red",
    fontWeight: "900",
    textDecoration: "underline",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to={"."}
          end
          style={({ isActive }) => (isActive ? selectedLinkStyle : null)}
        >
          DashBoard
        </NavLink>
        <NavLink
          to={"income"}
          style={({ isActive }) => (isActive ? selectedLinkStyle : null)}
        >
          Income
        </NavLink>
        <NavLink
          to={"vans"}
          style={({ isActive }) => (isActive ? selectedLinkStyle : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to={"reviews"}
          style={({ isActive }) => (isActive ? selectedLinkStyle : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
