import PropTypes from 'prop-types';
import './Skill.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import SkillItem from './SkillItem';

const MySkill = ({ data }) => {
  const {
    languages = [],
    frameworksAndLibraries = [],
    toolsAndPlatforms = [],
    coreCompetencies = [],
  } = data || {};

  console.log('data:', data); // For debugging

  return (
    <section id="skill" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Skills" />

      <div className="container">
        

        {/* Frameworks & Libraries Section */}
        {frameworksAndLibraries.length > 0 && (
          <div className="skill-category" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <h2 className="skill-category-title">Frameworks & Libraries</h2>
            <div className="skill-card-container">
              {frameworksAndLibraries.map((item, index) => (
                <SkillItem key={index} item={item} index={index}>

                </SkillItem>
              ))}
            </div>
          </div>
        )}

        {/* Languages Section */}
        {languages.length > 0 && (
          <div className="skill-category" data-aos="fade-up" data-aos-duration="800">
            <h2 className="skill-category-title">Languages</h2>
            <div className="skill-card-container">
              {languages.map((item, index) => (
                <SkillItem key={index} item={item} index={index}>

                </SkillItem>
              ))}
            </div>
          </div>
        )}
        {/* Tools & Platforms Section */}
        {toolsAndPlatforms.length > 0 && (
          <div className="skill-category" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
            <h2 className="skill-category-title">Tools & Platforms</h2>
            <div className="skill-card-container">
              {toolsAndPlatforms.map((item, index) => (
                <SkillItem key={index} item={item} index={index}>

                </SkillItem>
              ))}
            </div>
          </div>
        )}

        {/* Core Competencies Section */}
        {coreCompetencies.length > 0 && (
          <div className="skill-category" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
            <h2 className="skill-category-title">Core Competencies</h2>
            <div className="skill-badge-container">
              {coreCompetencies.map((item, index) => (
                <span
                  className="skill-badge"
                  key={`competency-${index}`}
                  data-aos="fade-in"
                  data-aos-duration="500"
                  data-aos-delay={`${100 * (index + 1)}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

MySkill.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      languages: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          icon: PropTypes.string,
        })
      ),
      frameworksAndLibraries: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          icon: PropTypes.string,
        })
      ),
      toolsAndPlatforms: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          icon: PropTypes.string,
        })
      ),
      coreCompetencies: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};

export default MySkill;