import React from "react";

function SocialLinks() {
  return (
    <ul className="header-social">
      <li>
        <a href="https://github.com/the-pratik/" target="_blank">
          <i className="fab fa-github" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/pratik-deshpande-16065b196/"
          target="_blank"
        >
          <i className="fab fa-linkedin" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/__thepratik__19/" target="_blank">
          <i className="fab fa-twitter" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/__thepratik__19/" target="_blank">
          <i className="fab fa-instagram" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
