import React from "react";
import { ServicesData } from "./ProjectData";
import Service from "./Project";
function Projects(props) {
  return (
    <div id="services" className="section dark1">
      <div className="container">
        <div className="section-title">
          <h1>
            My <span className="color-primary">Projects</span>
          </h1>
          {/* <p className="width70">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, mobile apps, web
            services and online stores.
          </p> */}
        </div>
        <div className="columns">
          {ServicesData.map((item) => (
            <Service
              key={item.id}
              title={item.title}
              icon={item.icon}
              link={item.link}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
