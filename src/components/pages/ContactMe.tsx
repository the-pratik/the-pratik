import React from "react";

function ContactMe() {
  return (
    <>
      <div id="contact_me" className="row heading-block">
        <div className="column large-full">
          <h2 className="section-heading">Get In Touch</h2>
        </div>
      </div>

      <div className="row contact-main">
        <div className="column large-full">
          <p className="contact-email">
            <a href="mailto:pratikdeshpande65@gmail.com">
              pratikdeshpande65@gmail.com
            </a>
          </p>

          <p className="section-desc">
            I'm happy to connect, listen and help. Let's work together and build
            something awesome. Let's turn your idea to an even greater product.
          </p>
        </div>
      </div>

      <div className="row contact-infos">``
        <div className="column large-7 medium-full contact-social">
          <h4>Social</h4>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/pratik-deshpande-16065b196/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/__thepratik__19/"
                target="_blank"
                rel="noreferrer"
                title="Twitter"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/__thepratik__19/"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
