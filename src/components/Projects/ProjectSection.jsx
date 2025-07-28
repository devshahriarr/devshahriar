import PropTypes from "prop-types";
import "./Projects.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Carousel from "../Slider/Carousel";
import ProjectDetailsModal from "./ProjectDetailsModal";

const myDetails = {
  imgLink: "./images/portfolio/portfolio2.jpg",
  imgLinkLg: "./images/portfolio/portfolio2_lg.jpg",
  title: "Mobile App Design",
  subTitle: "Web Design, App Design",
  effect: "zoom",
  duration: 500,
  delay: 200,
  type: "Mobile App",
  languages: "React, CSS, JS",
  platform: "iOS, Android",
  country: "USA",
  liveUrl: "https://example.com",
};

const ProjectSection = ({ data }) => {
  // Modal
  const [modal, setModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [tempData, setTempData] = useState([]);
  const [detailsData, setDetailsData] = useState([]);

  const getData = (imgLink, title, subTitle) => {
    let tempData = [imgLink, title, subTitle];
    setTempData((item) => [1, ...tempData]);
    setModal(true);
  };

  const getDetails = (data) => {
    let tempData = [data];
    setDetailsData((item) => [...tempData]);
    setDetailsModal(true);
  };

  const modalClose = () => {
    setModal(false);
    setDetailsModal(false);
  };

  // Load Items
  const { informations } = data;
  const itemsPerPage = 6;
  const [visibleItems, setVisibleItems] = useState(
    informations.slice(0, itemsPerPage)
  );

  const [showLoadMore, setShowLoadMore] = useState(true);

  const loadMoreItems = () => {
    const currentLength = visibleItems.length;
    const nextChunk = informations.slice(
      currentLength,
      currentLength + itemsPerPage
    );
    setVisibleItems((prevItems) => [...prevItems, ...nextChunk]);

    if (currentLength + itemsPerPage >= informations.length) {
      setShowLoadMore(false);
    }
  };
  console.log("projects", data);

  return (
    <>
      <section id="projects">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SectionHeading title={"My Recent Works"} />
        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          <Carousel data={data} getData={getData} getDetails={getDetails} />
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
      {modal === true ? (
        <Modal
          img={tempData[1]}
          title={tempData[2]}
          subTitle={tempData[3]}
          modalClose={modalClose}
        />
      ) : (
        ""
      )}
      {detailsModal === true ? (
        <ProjectDetailsModal data={detailsData[0]} modalClose={modalClose} />
      ) : (
        ""
      )}
    </>
  );
};

ProjectSection.propTypes = {
  data: PropTypes.object,
};

export default ProjectSection;
