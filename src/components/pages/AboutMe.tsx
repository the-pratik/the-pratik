import React from "react";
import { TracingBeam } from "../ui/tracing-beam";

function AboutMe() {
  return (
    <>
      <div className="about-me">
        <div className="row heading-block">
          <div className="column large-full">
            <h2 className="section-heading">About Me</h2>
          </div>
        </div>

        <div className="row about-me__content">
          <div className="column large-full about-me__text">
            <p className="lead">
              I am a software engineer who enjoys building robust, scalable
              products. My experience spans full-stack development and
              AI-enabled healthcare solutions, with a focus on making complex
              technology useful in everyday workflows.
            </p>

            <p>
              I build maintainable backend services and RESTful APIs, design
              data models, and optimize database queries. I have used Java and
              related technologies to deliver reliable server-side
              applications.
            </p>

            <p>
              On the frontend, I use React to create responsive, intuitive
              interfaces and integrate them seamlessly with backend services.
              I continuously develop my skills and keep up with advances in
              software engineering.
            </p>

            <p>
              As a full-stack developer, I bring a holistic perspective to
              software development, connecting frontend and backend components
              into cohesive end-to-end solutions. I enjoy tackling challenging
              problems and collaborating with talented teams to build useful,
              dependable products.
            </p>
          </div>
        </div>

        <div className="row about-me__buttons">
          <div className="column large-half tab-full">
            <a href="#contact_me" className="btn btn--stroke full-width">
              Hire Me
            </a>
          </div>
          <div className="column large-half tab-full">
            <a href="/docs/Pratik_Deshpande_Full_Stack_SDE.pdf" download className="btn btn--primary full-width">
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="about-experience">
        <div className="row heading-block">
          <div className="column large-full">
            <h2 className="section-heading">Work & Education</h2>
          </div>
        </div>

        <div className="row about-experience__timeline">
          <div className="column large-half tab-full">
            <div className="timeline">
              <div className="timeline__icon-wrap">
                <span className="timeline__icon timeline__icon--work"></span>
              </div>
              <TracingBeam>
                <div className="timeline__block">
                  <div className="timeline__bullet"></div>
                  <div className="timeline__header">
                    <p className="timeline__timeframe">Oct 2025 - Present</p>
                    <h3 className="item-title">Wolters Kluwer</h3>
                    <h5>Product Software Engineer II</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Build AI-enabled medical products that help clinicians
                      with their day-to-day work. Contribute to UpToDate Expert
                      AI by developing semantic indexing for hospital and
                      university content to support relevant retrieval.
                    </p>
                    <p>
                      Develop modules for complex content pipelines, supporting
                      the content processing and retrieval use cases behind
                      these products.
                    </p>
                  </div>
                </div>

                <div className="timeline__block">
                  <div className="timeline__bullet"></div>
                  <div className="timeline__header">
                    <p className="timeline__timeframe">Aug 2022 - Oct 2025</p>
                    <h3 className="item-title">Capgemini</h3>
                    <h5>Senior Software Engineer</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Worked across the full stack with Java, Spring Boot,
                      React, Spring Data JPA, Hibernate, HTML, CSS, JavaScript,
                      Bootstrap, and PostgreSQL. Used tools including Postman
                      and Jenkins to build and deliver software.
                    </p>
                  </div>
                </div>

                <div className="timeline__block">
                  <div className="timeline__bullet"></div>
                  <div className="timeline__header">
                    <p className="timeline__timeframe">Mar 2022 - May 2022</p>
                    <h3 className="item-title">Capgemini (Internship)</h3>
                    <h5>Full Stack Developer</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Gained hands-on experience with Spring Boot and React,
                      applying these technologies to build Ayur Basket, an
                      end-to-end e-commerce application for Ayurvedic
                      medicines.
                    </p>
                  </div>
                </div>

                <div className="timeline__block">
                  <div className="timeline__bullet"></div>
                  <div className="timeline__header">
                    <p className="timeline__timeframe">Aug 2021 - Nov 2021</p>
                    <h3 className="item-title">Earth Solutions Pvt. Ltd.</h3>
                    <h5>API Developer</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Started as a PHP developer, learning Laravel while
                      building APIs that connected users with data. Also
                      developed a feature to generate visual maps from data
                      files.
                    </p>
                  </div>
                </div>
              </TracingBeam>
            </div>
          </div>

          <div className="column large-half tab-full">
            <div className="timeline">
              <div className="timeline__icon-wrap">
                <span className="timeline__icon timeline__icon--education"></span>
              </div>
              <TracingBeam>
                <div className="timeline__block">
                  <div className="timeline__bullet"></div>
                  <div className="timeline__header">
                    <p className="timeline__timeframe">Jul 2018 - Aug 2022</p>
                    <h3 className="item-title">SVERI's COEP</h3>
                    <h5>B. Tech (CSE)</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>Grade: 89.78% and CGPA: 9.91 </p>
                  </div>
                </div>

                <div className="timeline__block">
                  <div className="timeline__bullet"></div>
                  <div className="timeline__header">
                    <p className="timeline__timeframe">Jul 2017 - Jul 2018</p>
                    <h3 className="item-title">KBP College</h3>
                    <h5>Higher Secondary School Certificate</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>Grade: 86.31%</p>
                  </div>
                </div>

                <div className="timeline__block">
                  <div className="timeline__bullet"></div>
                  <div className="timeline__header">
                    <p className="timeline__timeframe">Jul 2015 - Jul 2016</p>
                    <h3 className="item-title">
                      Pancharatna English Medium School
                    </h3>
                    <h5>Secondary School Certificate</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>Grade: 87.80%</p>
                  </div>
                </div>
              </TracingBeam>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
