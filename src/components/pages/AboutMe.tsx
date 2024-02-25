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
              I am a seasoned Senior Software Developer with a passion for
              creating robust and scalable solutions. With extensive experience
              in Java full-stack development and expertise in React, I thrive in
              crafting innovative and efficient software solutions.
            </p>

            <p>
              In the realm of backend development, I am proficient in utilizing
              Java to build high-performance and maintainable server-side
              applications. My experience spans across designing RESTful APIs,
              implementing data models, and optimizing database queries for
              optimal performance.
            </p>

            <p>
              On the frontend, I specialize in leveraging React to create
              engaging and responsive user interfaces. I have a keen eye for
              user experience, implementing state-of-the-art frontend
              architectures, and ensuring seamless integration with backend
              services. I actively seek opportunities for professional
              development, keeping my skills up-to-date with the latest
              advancements in Java, React, and other relevant technologies.
            </p>

            <p>
              Being a full-stack developer, I bring a holistic approach to
              software development. I am adept at seamlessly connecting frontend
              and backend components, ensuring a cohesive and efficient
              end-to-end application architecture. I am excited about the
              prospect of contributing my expertise to challenging projects and
              collaborating with talented professionals. If you're looking for a
              dedicated Senior Software Developer with a strong background in
              Java full stack and React, I would love to connect and explore
              potential opportunities.
            </p>
          </div>
        </div>

        <div className="row about-me__buttons">
          <div className="column large-half tab-full">
            <a href="/" className="btn btn--stroke full-width">
              Hire Me
            </a>
          </div>
          <div className="column large-half tab-full">
            <a href="/" className="btn btn--primary full-width">
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
                    <p className="timeline__timeframe">Aug 2022 - Present</p>
                    <h3 className="item-title">Capgemini</h3>
                    <h5>Senior Software Engineer</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Joined as Full Stack Developer with the knowledge of Java,
                      Spring Boot, React, Data JPA, Hibernate, HTML, CSS, JS,
                      Bootstrap, Postgres, kubernetes and tools like Postman,
                      Jenkins, Vercel, Heroku, etc.
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
                      Got a chance to get my hands on recent technologies such
                      as Spring Boot and React. Applied the knowledge in
                      creating a end-to-end project of ecommerce called Ayur
                      Basket which is basically a store to buy and sell aurvedic
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
                      Joined as a PHP developer and learned basics of laravel to
                      develop API for the interaction between users and
                      databases. Created a functionality to generate visual map
                      from the data files.
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
