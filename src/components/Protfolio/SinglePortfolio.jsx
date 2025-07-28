import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import "./SinglePortfolio.css";

const SinglePortfolio = ({ data, getData }) => {
  const { imgLink, imgLinkLg, title, subTitle, effect, duration, delay } = data;

  const handlePreviewClick = (e) => {
    e.stopPropagation(); // Prevents the parent div's onClick from firing
    getData(imgLinkLg, title, subTitle, imgLink);
  };

  return (
    <div className="st-portfolio-single st-style1 projects-card" onClick={() => getData(imgLinkLg, title, subTitle, imgLink)}>
      <div className="st-portfolio-item">
        <div className="st-portfolio st-zoom">
          <div className="st-portfolio-img st-zoom-in">
            <img src={imgLink} alt="portfolio" />
          </div>
          <div className="st-portfolio-item-hover">
            <Icon icon="mdi:plus-circle" />
            <h5>{title}</h5>
            <p>{subTitle}</p>
           
          </div>
        </div>
        <button className="preview-button" onClick={handlePreviewClick}>
              Preview
            </button>
      </div>
    </div>
  );
};

SinglePortfolio.propTypes = {
  data: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired,
};

export default SinglePortfolio;