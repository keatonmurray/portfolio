const FrontSection = () => {
  return (
    <div className="row home min-vh-100">
      <div className="col-12 col-md-6 left-section m-0 d-flex flex-column">
        <div className="d-flex align-items-start flex-wrap">
          <h5 className="text-white text-uppercase fw-semibold letter-spacing-sm mb-2">Ecommerce Developer</h5>
          <div className="w-100">
            <h1 className="text-white display-3 fw-bold mb-3">Keaton Murray</h1>
            <p className="text-white fs-5 fw-normal">
              Hi, I'm Keaton – a full-stack web developer specializing in elegant, responsive eCommerce experiences.
              Whether I'm building headless storefronts, refining interfaces in React, or diving into WordPress APIs, 
              I combine code and design to deliver smooth, scalable solutions. Clean architecture, pixel-level detail, 
              and performance-driven thinking – that's my zone.
            </p>
          </div>
          <div className="w-100 mt-4 d-flex flex-column flex-md-row justify-content-md-between justify-content-center socials text-center text-md-start">
            <div className="mb-3 mb-md-0">
              <i className="fa-brands fa-github me-3"></i>
              <i className="fa-brands fa-linkedin-in me-3"></i>
              <i className="fa-brands fa-instagram me-3"></i>
            </div>
            <div id="projects" className="cto-projects pt-2">
              <a href="#" className="cto-projects pt-2 d-inline-block text-white text-decoration-none">
                <p className="fw-bold border-bottom text-uppercase d-inline-flex align-items-center gap-2 thick-bottom-border">
                  See what I'm good at
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 right-section p-0 m-0">
        <figure className="h-100 w-100 m-0">
          <img src="/img/bg2.jpg" alt="Background Image" className="img-fluid w-100 h-100 object-fit-cover" />
        </figure>
      </div>
  </div>

  )
}

export default FrontSection
