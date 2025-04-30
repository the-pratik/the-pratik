import React from "react";
import { BackgroundBeams } from "../ui/background-beams";

const works = [
  {
    title: "TTMM - Split & Settle",
    projectLink: "https://ttmm-split.vercel.app",
    githubLink: "https://github.com/the-pratik",
    altText: "TTMM",
    imageUrl: "images/projects/TTMMSplit.png",
    category: "React - Redux Project",
    description: "Simplify expense sharing with our TTMM app, a Splitwise-like solution",
  },
  {
    title: "Swabhiman Marathi Sanskruticha",
    projectLink: "https://swabhimanmarathisanskruticha.com/",
    githubLink: "https://github.com/the-pratik",
    altText: "GitInder",
    imageUrl: "images/projects/SwabhimanMarathi.png",
    category: "React x Java Project",
    description: "A full fledged ecommerce application for selling handcrafted Maharashtrian products",
  },
  {
    title: "React Advanced Filter",
    projectLink: "https://advanced-filter-component.vercel.app",
    githubLink: "https://github.com/the-pratik",
    altText: "AdvancedFilter",
    imageUrl: "images/projects/AdvancedFilter.png",
    category: "React Project",
    description: "A react library for customizable filter component with multiple filter options useful with primereact",
  },
  {
    title: "React Arrow Stepper",
    projectLink: "https://react-arrow-stepper.vercel.app",
    githubLink: "https://github.com/the-pratik",
    altText: "ArrowStepper",
    imageUrl: "images/projects/ArrowStepper.png",
    category: "React Project",
    description: "A customizable react package for stepper arrow",
  },
  {
    title: "Git Inder",
    projectLink: "https://git-inder.vercel.app",
    githubLink: "https://github.com/the-pratik/github-cards",
    altText: "GitInder",
    imageUrl: "images/projects/GitInder.png",
    category: "React App",
    description: "Find Github profile by typing random names",
  },
  {
    title: "Guess My Age",
    projectLink: "https://guess-age.vercel.app",
    githubLink: "https://github.com/the-pratik/guess-my-age",
    altText: "GuessAge",
    imageUrl: "images/projects/GuessAge.png",
    category: "JavaScript App",
    description:
      "A javascript app to generate a random person and guess his/her age",
  },
  {
    title: "Star Play",
    projectLink: "https://star-play.vercel.app",
    githubLink: "https://github.com/the-pratik/star-play",
    altText: "StarPlay",
    imageUrl: "images/projects/StarPlay.png",
    category: "React App",
    description: "A react game to count the displayed stars within 10sec",
  },
  {
    title: "Ayur Basket",
    projectLink: "https://github.com/the-pratik",
    githubLink: "https://github.com/the-pratik",
    altText: "AyurBasket",
    imageUrl: "images/projects/AyurBasket.png",
    category: "Java and React App",
    description: "A ayurvedic medicine ecommerce application",
  },
  {
    title: "Save Tube",
    projectLink: "https://save-tube.vercel.app",
    githubLink: "https://github.com/the-pratik",
    altText: "SaveTube",
    imageUrl: "images/projects/SaveTube.png",
    category: "Python Project",
    description: "Audio Video Bing or Download",
  },
  {
    title: "QR Panda",
    projectLink: "https://qr-panda.vercel.app",
    githubLink: "https://github.com/the-pratik",
    altText: "QRPanda",
    imageUrl: "images/projects/QRPanda.png",
    category: "Python Project",
    description: "QR Code Generator with customization",
  },
  {
    title: "Reachy",
    projectLink: "https://reachy.vercel.app",
    githubLink: "https://github.com/the-pratik",
    altText: "Reachy",
    imageUrl: "images/projects/Reachy.png",
    category: "Python Project",
    description:
      "Get Tags of YouTube videos with copy to clipboard and download thumbnail functionality",
  },
  {
    title: "Lost Space",
    projectLink: "https://github.com/the-pratik",
    githubLink: "https://github.com/the-pratik",
    altText: "LostSpace",
    imageUrl: "images/projects/LostSpace.png",
    category: "PHP Project",
    description: "A blog application with admin dashboard to post blogs",
  },
];

function Works() {
  return (
    <>
      <BackgroundBeams />
      <div className="row heading-block heading-block--center">
        <div className="column large-full">
          <h2 className="section-heading section-heading--centerbottom">
            Selected Works
          </h2>
          <p className="section-desc">
            Here are some of my selected works I have done lately. Feel free to
            check them out.
          </p>
        </div>
      </div>

      <div className="masonry-wrap">
        <div className="masonry">
          <div className="grid-sizer"></div>

          {works?.map((work, index) => {
            return (
              <div className="masonry__brick" key={index}>
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a
                      href={work?.projectLink}
                      target="_blank"
                      className="thumb-link"
                      title={work?.altText}
                    >
                      <img src={work?.imageUrl} alt={work?.altText} />
                    </a>
                    <a
                      href={work?.githubLink}
                      className="item-folio__project-link"
                      title={`${work?.altText} Github`}
                      target="_blank"
                    ></a>
                  </div>

                  <div className="item-folio__text">
                    <h4 className="item-folio__title">{work?.title}</h4>
                    <p className="item-folio__cat">{work?.category}</p>
                  </div>

                  <div className="item-folio__caption">
                    <p className="item-folio__description">
                      {work?.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Works;
