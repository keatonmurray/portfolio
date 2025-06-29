import React, { useEffect } from 'react';
import { Carousel } from 'bootstrap';

const FooterSection = () => {
  useEffect(() => {
    const el = document.getElementById('testimonialCarousel');
    let carouselInstance;

    if (el) {
      carouselInstance = Carousel.getInstance(el) || new Carousel(el, {
        interval: 8000,
        ride: 'carousel',
      });
    }

    const handleHashChange = () => {
      if (carouselInstance) {
        carouselInstance.dispose();
        carouselInstance = new Carousel(el, {
          interval: 8000,
          ride: 'carousel',
        });
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      if (carouselInstance) {
        carouselInstance.dispose();
      }
    };
  }, []);

  return (
    <div>
      <div className="py-md-5 py-0 col-12 my-md-3 my-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
              <h1 className="fw-semibold testimonial-heading display-4 text-dark text-md-start text-center mb-2">
                50+ <span className="font-purple">full-stack projects </span>delivered
              </h1>
            </div>
            <div className="col-12 testimonials col-md-6 d-flex align-items-center justify-content-center">
              <div
                id="testimonialCarousel"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                data-bs-interval="8000"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <h5 className="fw-400 letter-spacing-sm centered-description text-md-start text-center">
                      “Working with Keaton was an absolute game-changer. He didn’t just meet expectations — he redefined them.”<br />
                      <strong>- Arlo James</strong>
                    </h5>
                  </div>
                  <div className="carousel-item">
                    <h5 className="fw-400 letter-spacing-sm centered-description text-md-start text-center">
                      “Keaton delivers fast and with precision. His code is clean, and his attitude is even better.”<br />
                      <strong>- Leo Hartman</strong>
                    </h5>
                  </div>
                  <div className="carousel-item">
                    <h5 className="fw-400 letter-spacing-sm centered-description text-md-start text-center">
                      “Smart, efficient, and a great eye for UI. Keaton made our site feel as good as it looks.”<br />
                      <strong>- Silas Dean</strong>
                    </h5>
                  </div>
                  <div className="carousel-item">
                    <h5 className="fw-400 letter-spacing-sm centered-description text-md-start text-center">
                      “Keaton’s attention to detail is rare. Every component was thoughtful, responsive, and pixel-perfect.”<br />
                      <strong>- Ivy Reign</strong>
                    </h5>
                  </div>
                  <div className="carousel-item">
                    <h5 className="fw-400 letter-spacing-sm centered-description text-md-start text-center">
                      “His work helped us wow investors at demo day. Truly a behind-the-scenes hero.”<br />
                      <strong>- Miles Ashton</strong>
                    </h5>
                  </div>
                  <div className="carousel-item">
                    <h5 className="fw-400 letter-spacing-sm centered-description text-md-start text-center">
                      “He took a half-baked idea and shipped a full-stack product that felt enterprise-grade.”<br />
                      <strong>- Nina Cole</strong>
                    </h5>
                  </div>
                  <div className="carousel-item">
                    <h5 className="fw-400 letter-spacing-sm centered-description text-md-start text-center">
                      “Keaton is the rare developer who gets both design and engineering. That made him indispensable to our team.”<br />
                      <strong>- Theo Monroe</strong>
                    </h5>
                  </div>
                  <div className="carousel-item">
                    <h5 className="fw-400 letter-spacing-sm centered-description text-md-start text-center">
                      “Timely, reliable, and talented — Keaton saved our launch more than once.”<br />
                      <strong>- Clara Wilde</strong>
                    </h5>
                  </div>
                  <div className="carousel-item">
                    <h5 className="fw-400 letter-spacing-sm centered-description text-md-start text-center">
                      “You rarely find a developer who communicates this clearly and codes this cleanly.”<br />
                      <strong>- Jasper Lane</strong>
                    </h5>
                  </div>
                  <div className="carousel-item">
                    <h5 className="fw-400 letter-spacing-sm centered-description text-md-start text-center">
                      “Keaton didn’t just build us a site — he brought strategy, structure, and soul to the project.”<br />
                      <strong>- Mira Jude</strong>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 col-12 my-md-3 my-0">
        <div className="container">
          <h1 className="fw-semibold display-4 text-dark text-md-start text-center mb-2">
            Contact me
          </h1>
          <h5 className="fw-400 letter-spacing-sm centered-description text-md-start text-center">
            <strong>Phone:</strong> +1 450 233 7755
            <span className="d-block">
              <strong>Email Address: </strong>murraykeaton422@gmail.com
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
