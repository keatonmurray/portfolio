const FrontSection = () => {
  return (
    <div className="row home min-vh-100">
      {/* Left Section */}
      <div className="col-12 col-lg-6 left-section m-0 d-flex flex-column">
      <div className="d-flex flex-column justify-content-center h-100">
        <h5 className="text-white text-uppercase fw-semibold letter-spacing-sm mb-2 text-lg-start text-center w-100">
          Ecommerce Developer
        </h5>
          <div className="w-100 text-lg-start text-center">
            <h1 className="text-white display-3 fw-bold mb-3" style={{ whiteSpace: "nowrap" }}>
              Keaton Murray
            </h1>
            <p className="text-white fs-5 fw-normal">
              Hi, I'm Keaton – a full-stack web developer specializing in elegant, responsive eCommerce experiences.
              Whether I'm building headless storefronts, refining interfaces in React, or diving into WordPress APIs, 
              I combine code and design to deliver smooth, scalable solutions. Clean architecture, pixel-level detail, 
              and performance-driven thinking – that's my zone.
            </p>
          </div>
          <div id="projects" className="cto-projects d-flex align-items-md-start align-items-center justify-content-center justify-content-md-start">
            <button
              type="button"
              className="btn btn-light d-flex align-items-center justify-content-center"
            >
              <span>
                <i className="fa-solid fa-eye me-2"></i>
              </span>
              <a href="#myProjects" className="text-decoration-none text-dark">
                See what I'm good at
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-6 right-section p-0 m-0 position-relative">
        <div className="image-overlay"></div>

        <div className="social-icons text-white me-md-4">
          <a
            href="https://github.com/keatonmurray"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3 text-white"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/keatonmurray/"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3 text-white"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.instagram.com/bongjovi__/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <figure className="h-100 w-100 m-0">
          <img
            src="/img/bg2.jpg"
            alt="Background"
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </figure>
      </div>

    </div>
  )
}

export default FrontSection
