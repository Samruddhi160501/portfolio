import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div id="contact" className="section dark2">
      <div className="container contact">
        <div className="section-title">
          <h1>
            Contact <span className="color-primary">Me</span>
          </h1>
          <p className="width70">
            Feel free to get in touch with me. I am always open to discuss new
            projects, creative ideas or opportunities to be part of your
            visions.
          </p>
        </div>
        <div>
          <ul className="social-icons">
            <li>
              <a
                href="https://github.com/Samruddhi160501"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="mailto:gorghatesamruddhi@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <CgMail />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/samruddhi-gorghate/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
