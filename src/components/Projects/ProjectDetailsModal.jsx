import PropTypes from "prop-types";
import "./Projects.css";

const ProjectDetailsModal = ({ data, modalClose }) => {
  console.log("projectDetailsmodal", data);

  const { title, subTitle, type, languages, platform, country, liveUrl, imgLinkLg, description } = data;

  const modalStyle = {
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "block",
  };

  return (
    <div className="modal show fade bd-example-modal-xl" style={modalStyle}>
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div
          className="modal-content flex-row"
        //   style={{ backgroundColor: "#e6e6fa", color: "#333" }}
        >

            {/* <div className="row"> */}
                <div className="col-md-7">
                    <div className="st-flex-center">
                        <img
                            src={imgLinkLg}
                            style={{ height: "100%", objectFit: "cover" }}
                            alt={title}
                        />
                    </div>
                </div>
                <div className="col-md-5 ps-3">
                    <div className="modal-header">
                        <h4 className="modal-title">{title}</h4>
                        <button
                        type="button"
                        className="btn-close"
                        onClick={modalClose}
                        ></button>
                    </div>

                    <div className="modal-body">
                        <p className="modal-subtitle">{subTitle}</p>
                        <p className="modal-subtitle">{description}</p>
                        <div className="project-details">
                            <p>
                                <strong>Type:</strong> {type}
                            </p>
                            <p>
                                <strong>Languages:</strong> {languages}
                            </p>
                            <p>
                                <strong>Platform:</strong> {platform}
                            </p>
                            <p>
                                <strong>Country:</strong> {country}
                            </p>
                            <p>
                                <strong>Live URL:</strong>{" "}
                                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                                {liveUrl}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            {/* </div> */}
          {" "}
          {/* Light purple background */}
          
            
        </div>
      </div>
    </div>
  );
};

ProjectDetailsModal.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    type: PropTypes.string,
    languages: PropTypes.string,
    platform: PropTypes.string,
    country: PropTypes.string,
    liveUrl: PropTypes.string,
  }).isRequired,
  modalClose: PropTypes.func.isRequired,
};

export default ProjectDetailsModal;
