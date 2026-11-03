import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/jobs", label: "Jobs" },
  { to: "/hiring", label: "Hiring" },
  { to: "/industries", label: "Industries" },
  { to: "/support", label: "Support" },
] as const;

function Header() {
  return (
    <div className="headerHeadCont">
      <div className="logoName">
        <h1 className="urbanLogo">URBAN</h1>
        <div className="operationsManagementLogo">
          <h1 className="operationsLogo">OPERATIONS</h1>
          <h1 className="managementLogo">MANAGEMENT</h1>
        </div>
      </div>
      <nav className="headerHeadTextCont" aria-label="Main navigation">
        {navLinks.map((item) => (
          <h3 key={item.to} className="headerHeadText">
            <Link
              to={item.to}
              activeProps={{ className: "active-link" }}
              className="my-link"
            >
              {item.label}
            </Link>
          </h3>
        ))}
      </nav>
      <h3 className="HeaderLogin">Login</h3>
    </div>
  );
}

export default Header;
