const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg split-header">
        <div className="container-fluid d-flex p-0">
          <div className="header-left d-flex align-items-center ps-3 pe-3">
            <a className="navbar-brand" href="/">
              {/* <img src={logo} alt="Logo" height="40" /> */}
              <h3 className="fw-bold text-white">dev.io</h3>
            </a>
          </div>
          <div className="header-right flex-grow-1 d-flex justify-content-end pe-3">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item me-3">
                    <a href="#" className="nav-link text-white fw-bold p-0">
                      <span className="border-bottom border-white pb-1 d-inline-block">Tech Stacks</span>
                    </a>
                  </li>
                  <li className="nav-item me-3">
                    <a href="#" className="nav-link text-white fw-bold p-0">
                      <span className="border-bottom border-white pb-1 d-inline-block">Work History</span>
                    </a>
                  </li>
                  <li className="nav-item me-3">
                    <a href="#" className="nav-link text-white fw-bold p-0">
                      <span className="border-bottom border-white pb-1 d-inline-block">Contact Me</span>
                    </a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
