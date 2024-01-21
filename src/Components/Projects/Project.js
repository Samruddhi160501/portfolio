import React from "react";

function Project(Props) {
  const handleOnClick = (link) => {
    window.location.href = link;
  };
  return (
    <div className="column service">
      <div
        className="service-content"
        onClick={() => handleOnClick(Props.link)}
      >
        <h3>{Props.title}</h3>
        <i className={"bi service-icon " + Props.icon}></i>
        <p>{Props.details}</p>
      </div>
    </div>
  );
}

export default Project;
