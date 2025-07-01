import React from "react";

const projectSections = [
  {
    title: (
      <>
        Custom <span className="text-green">Headless CMS</span> Themes
      </>
    ),
    images: [
      { src: "/img/spikyblooms1.png", alt: "Project", link: "https://github.com/keatonmurray/headless-cms/" },
      { src: "/img/spikyblooms2.png", alt: "Project", link: "https://github.com/keatonmurray/headless-cms/" },
      { src: "/img/spikyblooms3.png", alt: "Project", link: "https://github.com/keatonmurray/headless-cms/" },
      { src: "/img/spikyblooms4.png", alt: "Project", link: "https://github.com/keatonmurray/headless-cms/" },
      { src: "/img/spikyblooms5.png", alt: "Project", link: "https://github.com/keatonmurray/headless-cms/" }
    ],
    description: (
      <i>
        Powerful CMS solutions built on a headless architecture using WordPress and GraphQL. Designed to scale, easy to integrate, and fully customizable for any frontend.
      </i>
    )
  },
  {
    title: (
      <>
        Custom <span className="text-green">Headless WooCommerce</span> Plugins
      </>
    ),
    images: [
      { src: "/img/hp1.png", alt: "Project", link: "https://github.com/keatonmurray/headless-payments/" },
      { src: "/img/spikyblooms5.png", alt: "Project", link: "https://github.com/keatonmurray/headless-payments/" }
    ],
    description: (
      <i>
        Engineered headless e-commerce plugins that enable seamless, secure, and flexible payment processing using modern RESTful APIs.
      </i>
    )
  },
  {
    title: (
      <>
        <span className="text-green">Laravel</span> Framework + <span className="text-green">Vue/Inertia</span>
      </>
    ),
    images: [
      { src: "/img/laravel1.png", alt: "Project", link: "https://github.com/keatonmurray/ct-laravel-v2" },
      { src: "/img/laravel2.png", alt: "Project", link: "https://github.com/keatonmurray/ct-laravel-v2" }
    ],
    description: (
      <i>
        Full-stack web apps using Laravel’s ecosystem and Inertia-powered Vue frontend — offering fast, reactive, and SEO-optimized experiences.
      </i>
    )
  },
  {
    title: (
      <>
        Vanilla <span className="text-green">PHP (OOP)</span> + <span className="text-green">React</span> + <span className="text-green">GraphQL</span>
      </>
    ),
    images: [
      { src: "/img/php1.png", alt: "Ecommerce", link: "https://github.com/keatonmurray/mini-ecommerce-app" },
      { src: "/img/php2.png", alt: "Cart", link: "https://github.com/keatonmurray/mini-ecommerce-app" }
    ],
    description: (
      <i>
        A modern eCommerce app built from scratch with vanilla PHP and a React frontend, powered by GraphQL APIs. Lightweight, fast, and modular.
      </i>
    )
  }
];

const MiddleSection = () => {
  return (
    <div className="scroll-container">
      <div className="pt-5 bg-light-custom" id="myProjects">
        <div className="container">
          <h2 className="fw-semibold display-4 text-dark text-center mb-2">
            <span className="font-purple">Open-source</span> Projects
          </h2>
          <h5 className="text-center fw-normal letter-spacing-sm mb-2">
            "Programming isn’t about what you know; it’s about what you can figure out."
            <span className="d-block">- Chris Pine</span>
          </h5>
          <hr className="line-breaker" />
          <br /><br />

          <div className="row project-row align-items-stretch">
            {projectSections.map((section, index) => (
              <React.Fragment key={index}>
                <div className="col-12">
                  <h2 className="my-3 fw-normal text-center">{section.title}</h2>
                </div>

                <div className="col-12 px-md-1 px-3">
                  <div id={`carousel-${index}`} className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      {section.images.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          data-bs-target={`#carousel-${index}`}
                          data-bs-slide-to={i}
                          className={i === 0 ? "active" : ""}
                          aria-current={i === 0 ? "true" : undefined}
                          aria-label={`Slide ${i + 1}`}
                        ></button>
                      ))}
                    </div>

                    <div className="carousel-inner">
                      {section.images.map((img, i) => (
                        <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                          <a href={img.link} target="_blank" rel="noopener noreferrer" className="d-block">
                            <figure className="project-figure text-center">
                              <img src={img.src} className="img-fluid project-image" alt={img.alt} />
                              <div className="project-hover-overlay">
                                <i className="fa-solid fa-link"></i>
                              </div>
                            </figure>
                          </a>
                        </div>
                      ))}
                    </div>

                    {section.images.length > 1 && (
                      <>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target={`#carousel-${index}`}
                          data-bs-slide="prev"
                        >
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target={`#carousel-${index}`}
                          data-bs-slide="next"
                        >
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className="col-12 text-center description-text mt-4">
                  <h5 className="fw-400 letter-spacing-sm centered-description project-text">
                    {section.description}
                  </h5>
                </div>

                <div className="col-12">
                  <hr className="line-breaker" />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
