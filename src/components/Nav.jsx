import { Link } from "react-router-dom";

export default function Nav({ navLinks }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MyRecipes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {navLinks.map((linkNav) => (
              <Link
                key={linkNav.linkText}
                to={linkNav.route}
                className="nav-link"
              >
                {linkNav.linkText}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
