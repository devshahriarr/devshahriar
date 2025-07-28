import Slider from "react-slick";
import PropTypes from "prop-types";
import "./Carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleBlog from "../Blog/SingleBlog";
import SingleReview from "../Review/SingleReview";
import SinglePortfolio from "../Protfolio/SinglePortfolio";
import ProjectItem from "../Projects/ProjectItem";

const Carousel = ({ data, getData, getDetails }) => {
  const { useFor, informations, sliderSetting, sliderImages } = data;

  if (useFor === "blog") {
    return (
      <Slider {...sliderSetting}>
        {informations.map((element, index) => (
          <SingleBlog element={element} key={index} />
        ))}
      </Slider>
    );
  } else if (useFor === "review") {
    return (
      <Slider {...sliderSetting}>
        {informations.map((element, index) => (
          <SingleReview element={element} key={index} />
        ))}
      </Slider>
    );
  } else if (useFor === "image-slider") {
    return (
      <Slider {...sliderSetting}>
        {sliderImages.map((item, index) => (
          <img src={item.imgLink} key={index} alt="" />
        ))}
      </Slider>
    );
  } else if (useFor === "projects") {
    return (
      <Slider {...sliderSetting}>
        {informations.map((element, index) => (
          <ProjectItem
            key={index}
            data={element}
            getData={getData}
            getDetails={getDetails}
          />
        ))}
      </Slider>
    );
  } else {
    <Slider {...sliderSetting}></Slider>;
  }
};

Carousel.propTypes = {
  variant: PropTypes.string,
  data: PropTypes.object,
  settings: PropTypes.object,
  getData: PropTypes.func,
};

export default Carousel;
