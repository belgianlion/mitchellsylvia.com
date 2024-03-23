import LinkStyles from "./LinkStyles";
import NavLinkData from "./NavLinkData";
import "./navbar.css";

interface NavbarProps {
  brandIcon: string;
  brandAlt: string;
  pages: { [name: string]: NavLinkData };
}

function Navbar({ brandIcon, brandAlt, pages }: NavbarProps) {
  return (
    <div className="nav">
      <nav
        className="navbar bg-dark navbar-expand-lg bg-body-tertiary p-0"
        data-bs-theme="dark"
      >
        <div className="container-fluid d-flex flex-grow-1 m-0">
          <a className="navbar-brand" href="#">
            <img src={brandIcon} alt={brandAlt} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-grow-1 text-right"
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto flex-nowrap">
              {Object.entries(pages).map(([name, pageData]) => (
                <li className="nav-item">
                  <a
                    className={"nav-link " + LinkStyles[pageData.styling]}
                    href={pageData.pageDir}
                  >
                    <span
                      className={
                        "nav-link-text " + LinkStyles[pageData.styling]
                      }
                      data-content={"nav-button"}
                    >
                      {name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
