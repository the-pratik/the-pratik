import { WavyBackground } from "./components/ui/wavy-background";
import { useEffect, useRef, useState } from "react";
import { SparklesCore } from "./components/ui/sparkles";

import SocialLinks from "./components/pages/SocialLinks";
import AboutMe from "./components/pages/AboutMe";
import Services from "./components/pages/Services";
import SkillSets from "./components/pages/SkillSets";
import Works from "./components/pages/Works";
import ContactMe from "./components/pages/ContactMe";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [show, setShow] = useState(true);

  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);

  const toggleMenu = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  const highlightSelectedTab = (tabIndex: number) => {
    setSelectedTab(tabIndex);
  };

  const scrollToSection = (sectionRef: any) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const highlightAndScroll = (tabIndex: number, sectionRef: any) => {
    highlightSelectedTab(tabIndex);
    scrollToSection(sectionRef);
  };

  useEffect(() => {
    let timer = setTimeout(() => setShow(false), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div id="preloader" style={{ display: show ? "" : "none" }}>
        <div id="loader"></div>
      </div>

      <header className="s-header">
        <div className="header-logo">
          <a className="site-logo" href="/">
            <h1 className="site-name">
              the-pratik<span style={{ color: "#17cf7e" }}>.</span>
            </h1>
          </a>
        </div>

        <nav
          className={`header-nav-wrap ${showMobileMenu && "mobile"}`}
          style={{ display: showMobileMenu ? "block" : "none" }}
        >
          <ul className="header-main-nav">
            <li className={`${selectedTab === 0 && "current"}`}>
              <a
                className="smoothscroll"
                onClick={() => {
                  highlightAndScroll(0, introRef);
                }}
                title="intro"
              >
                Intro
              </a>
            </li>
            <li className={`${selectedTab === 1 && "current"}`}>
              <a
                className="smoothscroll"
                onClick={() => {
                  highlightAndScroll(1, aboutRef);
                }}
                title="about"
              >
                About
              </a>
            </li>
            <li className={`${selectedTab === 2 && "current"}`}>
              <a
                className="smoothscroll"
                onClick={() => {
                  highlightAndScroll(2, serviceRef);
                }}
                title="services"
              >
                Services
              </a>
            </li>
            <li className={`${selectedTab === 3 && "current"}`}>
              <a
                className="smoothscroll"
                onClick={() => {
                  highlightAndScroll(3, workRef);
                }}
                title="works"
              >
                Works
              </a>
            </li>
            <li className={`${selectedTab === 4 && "current"}`}>
              <a
                className="smoothscroll"
                onClick={() => {
                  highlightAndScroll(4, contactRef);
                }}
                title="contact us"
              >
                Say Hello
              </a>
            </li>
          </ul>

          <SocialLinks />
        </nav>

        <a
          className={`header-menu-toggle ${showMobileMenu && "is-clicked"}`}
          onClick={toggleMenu}
        >
          <span>Menu</span>
        </a>
      </header>

      <section id="intro" className="s-intro target-section" ref={introRef}>
        <div className="row intro-content">
          <div
            className="column large-9 mob-full intro-text"
            style={{ zIndex: 3 }}
          >
            <h3>
              Hello, <span className="animate-[wave_5s_ease-in-out_2]">👋🏻</span>
              <span className="intro-name">I'm Pratik Deshpande</span>
            </h3>
            <h1>
              Software <br />
              and Web Developer <br />
              Based In Somewhere.
            </h1>
          </div>

          <div className="intro-scroll" style={{ zIndex: 3 }}>
            <a
              onClick={() => {
                highlightAndScroll(1, aboutRef);
              }}
              className="intro-scroll-link smoothscroll"
            >
              Scroll For More
            </a>
          </div>

          <div className="intro-grid"></div>
          <div className="intro-pic"></div>
        </div>
        <WavyBackground className="max-w-4xl mx-auto pb-40"></WavyBackground>
      </section>

      <section id="about" className="s-about target-section" ref={aboutRef}>
        <AboutMe />
      </section>

      <section
        id="services"
        className="s-services ss-dark target-section"
        ref={serviceRef}
      >
        <Services />
      </section>

      <section className="s-cta ss-dark">
        <div className="row heading-block heading-block--center">
          <div className="column large-full">
            <h2 className="section-desc">
              <span>Need a developer with latest skillset? </span>
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={390}
                className="w-full h-full"
                particleColor="#17cf7e"
              />
            </h2>
          </div>
        </div>

        <div className="row cta-content">
          <div className="column large-full">
            <SkillSets />
            <a
              onClick={() => {
                highlightAndScroll(4, contactRef);
              }}
              className="btn full-width"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </section>

      <section id="works" className="s-works target-section" ref={workRef}>
        <Works />
      </section>

      <section id="contact" className="ss-dark target-section" ref={contactRef}>
        <ContactMe />
      </section>

      <footer>
        <div className="row">
          <div className="column large-full ss-copyright">
            <span>
              Crafted with
              <a>💚</a>
              <a style={{ color: "#FFFFFF4D" }}> by </a>
              <a href="https://github.com/the-pratik" target="_blank">
                Pratik Deshpande
              </a>
            </span>
          </div>

          <div className="ss-go-top">
            <a
              className="smoothscroll"
              title="Back to Top"
              onClick={() => {
                highlightAndScroll(0, introRef);
              }}
            ></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
