import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import "./Projects.css";

const ProjectItem = ({ getData, data, getDetails }) => {
  const { imgLink, imgLinkLg, title, subTitle, effect, duration, delay } = data;

  const handlePreviewClick = (e) => {
    e.stopPropagation();
    getDetails(data);
  };
  return (
    <div
      className="sh-projects-single st-style1 projects-card"
      
    >
      <div className="sh-projects-item">
        <div className="sh-projects st-zoom" onClick={() => getData(imgLinkLg, title, subTitle, imgLink)} >
          <div className="sh-projects-img st-zoom-in">
            <img src={imgLink} alt="portfolio" />
          </div>
          <div className="sh-projects-item-hover">
            <Icon icon="mdi:plus-circle" />
          </div>
        </div>
        <div className="d-flex justify-content-between align-item-center">
          <div>
            <h5>{title}</h5>
            <p>{subTitle}</p>
          </div>
          <div>
            <button className="preview-button" onClick={handlePreviewClick}>
              <Icon icon="maki:arrow" width="25" height="25" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
