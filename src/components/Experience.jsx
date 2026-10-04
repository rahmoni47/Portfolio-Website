import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { FaGraduationCap, FaServer, FaRocket } from "react-icons/fa";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const getExperienceIcon = (experience) => {
  if (experience.iconType === "university") {
    return <FaGraduationCap className="text-[26px] text-[#915EFF]" />;
  }
  if (experience.iconType === "backend") {
    return <FaServer className="text-[22px] text-[#00cea8]" />;
  }
  if (experience.iconType === "work") {
    return <FaRocket className="text-[22px] text-[#f89820]" />;
  }
  if (experience.icon) {
    return (
      <img
        src={experience.icon}
        alt={experience.company_name}
        className="w-[60%] h-[60%] object-contain"
      />
    );
  }
  return <FaRocket className="text-[22px] text-white" />;
};

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#151030",
      color: "#fff",
      boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: "16px",
    }}
    contentArrowStyle={{ borderRight: "7px solid #151030" }}
    date={experience.date}
    iconStyle={{
      background: experience.iconBg,
      boxShadow: "0 0 0 4px rgba(145, 94, 255, 0.25)",
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {getExperienceIcon(experience)}
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        My academic & professional journey
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Study Path</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Experience, "work");
