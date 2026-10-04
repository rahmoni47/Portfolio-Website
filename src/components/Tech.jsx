import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => (
  <>
    <motion.div variants={textVariant()} className="mb-14 text-center">
      <p className={styles.sectionSubText}>My technical stack & toolset</p>
      <h2 className={styles.sectionHeadText}>Skills & Technologies</h2>
    </motion.div>

    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map(({ name, icon }) => (
        <div
          className="w-28 flex flex-col items-center justify-center group"
          key={name}
        >
          <div className="w-28 h-28">
            <BallCanvas icon={icon} />
          </div>
          <p className="text-secondary text-[13px] font-medium text-center mt-2 group-hover:text-white transition-colors">
            {name}
          </p>
        </div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Tech, "");
