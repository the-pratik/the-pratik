import React from "react";

function ContactMe() {
  return (
    <>
      <div className="row heading-block">
        <div className="column large-full">
          <h2 className="section-heading">Get In Touch</h2>
        </div>
      </div>

      <div className="row contact-main">
        <div className="column large-full">
          <p className="contact-email">
            <a href="mailto:#0">sanketdeshpande68@gmail.com</a>
          </p>

          <p className="section-desc">
            I'm happy to connect, listen and help. Let's work together and build
            something awesome. Let's turn your idea to an even greater product.
          </p>
        </div>
      </div>

      <div className="row contact-infos">
        <div className="column large-5 medium-full contact-phone">
          <h4>Call Me</h4>
          <a href="tel:9146365317">+91 9146365317</a>
        </div>

        <div className="column large-7 medium-full contact-social">
          <h4>Social</h4>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/pratik-deshpande-16065b196/"
                target="_blank"
                title="LinkedIn"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/__thepratik__19/"
                target="_blank"
                title="Twitter"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/__thepratik__19/"
                target="_blank"
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
