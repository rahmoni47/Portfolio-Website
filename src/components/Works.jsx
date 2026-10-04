import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  category,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.25, 0.75)}>
      <Tilt
        options={{
          max: 18,
          scale: 1.02,
          speed: 400,
        }}
        className="relative sm:w-[480px] w-full group rounded-3xl"
      >
        {/* Ambient Hover Glow */}
        <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#915EFF]/40 via-[#00cea8]/25 to-[#bf61ff]/40 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

        {/* Glassmorphic Project Card */}
        <div className="relative w-full h-full bg-gradient-to-b from-[#181335]/95 to-[#0e0924]/98 backdrop-blur-xl p-6 rounded-3xl border border-white/10 group-hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-2xl">
          <div>
            {/* Project Image Preview */}
            <div className="relative w-full h-[240px] rounded-2xl overflow-hidden group/img">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0924] via-transparent to-black/30 opacity-70" />

              {/* Category Badge */}
              {category && (
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md border border-white/15 text-white/90 shadow-md">
                  {category}
                </div>
              )}

              {/* GitHub Quick Button */}
              <div className="absolute top-3 right-3">
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source code on GitHub"
                  className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex justify-center items-center hover:bg-[#915EFF] hover:scale-110 hover:border-[#915EFF] transition-all duration-300 shadow-lg"
                >
                  <img
                    src={github}
                    alt="GitHub Repository"
                    className="w-5 h-5 object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Title & Description */}
            <div className="mt-5">
              <h3 className="text-white font-bold text-[22px] tracking-wide group-hover:text-white transition-colors">
                {name}
              </h3>
              <p className="mt-2.5 text-secondary text-[14px] leading-[24px] min-h-[72px]">
                {description}
              </p>
            </div>
          </div>

          {/* Tags & Footer Action */}
          <div className="mt-5">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`text-[11.5px] px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 font-medium ${tag.color} group-hover:border-white/20 transition-colors`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>

            <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between">
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold text-[#915EFF] hover:text-white flex items-center gap-1.5 transition-colors group/link"
              >
                <span>Explore Repository</span>
                <span className="group-hover/link:translate-x-1 transition-transform">
                  ↗
                </span>
              </a>
              <span className="text-[11px] text-secondary font-mono">
                GitHub Open Source
              </span>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Featured work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          A curated selection of real-world applications showcasing my software
          engineering capabilities across back-end distributed systems,
          compilers, networking, and high-performance embedded user interfaces.
        </motion.p>
      </div>
      <div className="mt-16 flex flex-wrap gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
