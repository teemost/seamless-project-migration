import { Link } from "@tanstack/react-router";

const exploreLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/jobs", label: "Jobs" },
  { to: "/hiring", label: "Hiring" },
  { to: "/industries", label: "Industries" },
] as const;

const resourceLinks = [
  { to: "/support", label: "Support" },
  { to: "/faqs", label: "FAQs" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
] as const;

function Footer() {
  return (
    <footer className="siteFooter">
      <div className="siteFooterCont">
        <div>
          <h2 className="footerBrandHead">URBAN</h2>
          <p className="footerBrandSub">OPERATIONS MANAGEMENT</p>
          <p className="footerText">
            Connecting people with opportunities and helping organizations
            build dependable, capable teams.
          </p>
        </div>
        <div>
          <h3 className="footerColTitle">Explore</h3>
          {exploreLinks.map((item) => (
            <Link key={item.to} to={item.to} className="footerLink">
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h3 className="footerColTitle">Resources</h3>
          {resourceLinks.map((item) => (
            <Link key={item.to} to={item.to} className="footerLink">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="footerBottom">
        © {new Date().getFullYear()} Urban Operations Management. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
