const BottomSection = () => {
  const techStacks = [
    "node",
    "bootstrap",
    "ci",
    "vue",
    "react",
    "js",
    "laminas",
    "wp",
    "shopify",
    "woo"
  ];
  return (
    <div className="py-5">
      <div className="container">
        <h2 className="fw-semibold display-4 text-dark text-center mb-2">Why <span className="font-purple">work</span> with me</h2>
        <h5 className="text-center fw-500 letter-spacing-sm mb-2">
          I Learn by Doing — Fast.
        </h5>
        <hr className="line-breaker" />
        <div className="col-12 text-center description-text my-4">
          <h5 className="fw-400 letter-spacing-sm centered-description">
            <i>
              I dive into unfamiliar codes head-first. Since 2024, I’ve been picking up advanced theme templating systems and working comfortably across different frameworks — from Laravel to React, WordPress to headless WordPress, GraphQL to custom REST APIs. 
            </i>
          </h5>
          <br />
          <h5 className="fw-400 letter-spacing-sm centered-description">
            <i>
              I don’t just aim for code that “works” — I build with clarity and intention. Whether it’s figuring out complex plugin conflicts, integrating third-party services, or obsessing over UI details, I enjoy connecting the dots and making things better. Fast learner, clean builder, and never afraid to troubleshoot deeply.
            </i>
          </h5>
        </div>
        <br />
        <div className="tech-stacks-wrapper overflow-hidden mt-4">
          <div className="tech-stacks d-flex align-items-center gap-4 animate-scroll">
            {/* Original + Duplicate for seamless loop */}
            {[...techStacks, ...techStacks].map((stack, index) => (
              <img
                key={index}
                src={`/img/${stack}.png`}
                alt={`${stack} logo`}
                className="img-fluid"
                style={{ width: "60px" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
