import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const SkillItem = ({item, index}) => {

  return (
    <div
      className="skill-card"
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-delay={`${100 * (index + 1)}`}
    >
      <Icon icon={item.icon} className="skill-icon" />
      <span className="skill-name">{item.name}</span>
    </div>
  );
};

export default SkillItem;
