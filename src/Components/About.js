import profile from "../assets/profile.jpeg";
const About = () => {
  return (
    <div id="about" className="section dark2">
      <div className="container">
        <div className="section-title">
          <h1>
            About <span className="color-primary">Me</span>
          </h1>
          <p className="width70">
            I'm a Software Developer with over 1.6 years of
            experience.Passionate for crafting pixel-perfect user experiences.
          </p>
        </div>
        <div className="section-flex">
          <div className="section-left">
            <img className="myphoto" src={profile} alt="myphoto" />
          </div>
          <div className="section-right">
            <section>
              <h2 className="weight-light">
                Hi, I'm{" "}
                <span className="color-primary">Samruddhi Gorghate</span>
              </h2>
              <p>
                I'm a Software Developer with over 1.6 years of experience.I
                code and create stylish, modern websites, web services and
                mobile apps. My passion is to design digital user experiences
                through meaningful interactions.
              </p>
            </section>
            <hr />
            <section>
              <h2 className="weight-light">
                Personal <span className="color-primary">Info</span>
              </h2>
              <div>
                <p>
                  <strong>Name:</strong> Samruddhi Gorghate
                </p>
                <p>
                  <strong>email:</strong> gorghatesamruddhi@gmail.com
                </p>
                <p>
                  <strong>Language:</strong> English, Hindi, Marathi
                </p>
                <p>
                  <strong>Address:</strong> Nagpur, Maharashtra, India
                </p>
                <p>
                  <strong>Freelance:</strong> Available
                </p>
              </div>
            </section>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h2 className="weight-light">
              My <span className="color-primary">Skills</span>
            </h2>
            <section>JavaScript, ReactJS</section>
            <hr />
            <section>Java, PostgreSQL, Nodejs,FLutter</section>
            <hr />
            <section>HTML5, CSS3, SASS</section>
          </div>
          <div className="column">
            <h2 className="weight-light">
              My <span className="color-primary">Experience</span>
            </h2>
            <section>
              <p>
                Associate Software Engineer <br />
                Afour Technologies| Feb 2022- Present
              </p>
            </section>
            <hr />
            <section>
              <p>
                Software developer intern <br />
                ISKCON,Pune | June 2021- Dec 2021
              </p>
            </section>
            <hr />
            <section>
              <p>
                Graphic Design Marketing Intern
                <br />
                IndiTech Valves Pvt Ltd | Oct 2020 - Jun 2021
              </p>
            </section>
          </div>
          <div className="column">
            <h2 className="weight-light">
              My <span className="color-primary">Education</span>
            </h2>
            <section>
              <p>
                B.Tech. in Information Technology
                <br />
                VIIT, Pune | CGPA-9.35 | 2018-2022{" "}
              </p>
            </section>
            <hr />
            <section>
              <p>
                HSC <br />
                St. Xaviers High School | 83.4% | 2018
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
