import React from "react";

function Services() {
  return (
    <>
      <div className="shadow-overlay"></div>

      <div className="row heading-block heading-block--center">
        <div className="column large-full">
          <h2 className="section-heading section-heading--centerbottom">
            Capabilities
          </h2>

          <p className="section-desc">
            My passion is to deliver high quality services!
          </p>
        </div>
      </div>

      <div className="row services-list block-large-1-3 block-medium-1-2 block-tab-full">
        <div className="column item-service">
          <div className="item-service__content">
            <h4 className="item-title">Maintainability and Code Quality</h4>
            <p>
              Writing clean, modular, and well-documented code that is easy to
              maintain, promoting long-term sustainability and facilitating
              collaboration with other developers.
            </p>
          </div>
        </div>

        <div className="column item-service">
          <div className="item-service__content">
            <h4 className="item-title">Cross-Browser Compatibility</h4>
            <p>
              Writing code that functions consistently across different web
              browsers, ensuring a consistent experience for all users.
            </p>
          </div>
        </div>

        <div className="column item-service">
          <div className="item-service__content">
            <h4 className="item-title">Performance Optimization</h4>
            <p>
              Implementing techniques to improve website speed and performance,
              such as code splitting, lazy loading, and optimizing assets.
            </p>
          </div>
        </div>

        <div className="column item-service">
          <div className="item-service__content">
            <h4 className="item-title">Security Measures</h4>
            <p>
              Implementing security best practices, such as using HTTPS,
              validating inputs, and protecting against common vulnerabilities,
              to safeguard user data and ensure a secure web environment.
            </p>
          </div>
        </div>

        <div className="column item-service">
          <div className="item-service__content">
            <h4 className="item-title">UI/UX Design</h4>
            <p>
              Creating visually appealing and user-friendly interfaces, focusing
              on the overall user experience to enhance satisfaction and
              usability.
            </p>
          </div>
        </div>

        <div className="column item-service">
          <div className="item-service__content">
            <h4 className="item-title">Responsive Design</h4>
            <p>
              Ensuring that websites work seamlessly on various devices and
              screen sizes, providing an optimal viewing experience for users.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
