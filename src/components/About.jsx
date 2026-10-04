import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({
  index,
  title,
  icon,
  subtitle,
  tags = [],
  accentColor = '#915EFF',
  gradient = 'from-[#00cea8] to-[#bf61ff]',
  badge = '01',
}) => (
  <Tilt
    options={{
      max: 20,
      scale: 1.03,
      speed: 400,
    }}
    className="xs:w-[260px] w-full"
  >
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.35, 0.75)}
      className="relative w-full rounded-[24px] group"
    >
      {/* Ambient background glow matching each tech's signature color */}
      <div
        className={`absolute -inset-0.5 rounded-[24px] bg-gradient-to-r ${gradient} opacity-20 group-hover:opacity-75 blur-lg transition duration-500`}
      />

      {/* Card Border wrapper */}
      <div className={`relative w-full rounded-[24px] bg-gradient-to-br ${gradient} p-[1.5px] shadow-card`}>
        {/* Inner Glassmorphic Card Container */}
        <div className="relative bg-[#0d0924]/90 backdrop-blur-xl rounded-[23px] py-6 px-5 min-h-[300px] flex flex-col justify-between items-center overflow-hidden border border-white/5 group-hover:border-white/20 transition-all duration-300">
          
          {/* Top Status & Tech Subtitle */}
          <div className="w-full flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: accentColor }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: accentColor }}
                />
              </span>
              <span className="text-[10.5px] tracking-wider uppercase text-secondary font-medium truncate max-w-[170px]">
                {subtitle}
              </span>
            </span>
            <span className="text-secondary/40 font-mono text-[12px] font-bold">
              {badge}
            </span>
          </div>

          {/* Interactive Icon Chamber */}
          <div className="relative my-4 flex items-center justify-center">
            {/* Soft inner radial aura */}
            <div
              className="absolute w-20 h-20 rounded-full blur-md opacity-25 group-hover:opacity-75 transition-opacity duration-300"
              style={{ backgroundColor: accentColor }}
            />
            <div className="relative w-20 h-20 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-3 shadow-inner group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ease-out">
              <img
                src={icon}
                alt={title}
                className="w-12 h-12 object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.6)]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Title & Tags */}
          <div className="text-center w-full">
            <h3 className="text-white text-[22px] font-bold tracking-wide group-hover:text-white transition-colors">
              {title}
            </h3>

            {/* Tech Tags / Badges */}
            <div className="flex flex-wrap justify-center gap-1.5 mt-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-secondary group-hover:text-white group-hover:border-white/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Diagonal Glass Sweep / Shimmer on hover */}
          <div className="pointer-events-none absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent rotate-45 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex flex-col gap-4"
      >
        <p>
          I am a 4th-year Computer Science and Software Engineering student at{' '}
          <a
            href="https://univ-constantine2.dz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#915EFF] font-medium underline underline-offset-4 hover:text-white transition-colors"
          >
            جامعة قسنطينة 2 – عبد الحميد مهري
          </a>
          . I am bilingual, speaking Arabic natively and English at a B2 proficiency level.
        </p>
        <p>
          I specialize in back-end engineering and DevOps using Spring Boot, with a focus on building robust, scalable services. In addition, I have hands-on experience working with a variety of other technologies and frameworks, including Qt (C++), React.js, PostgreSQL, and MongoDB.
        </p>
      </motion.div>

      <div className="mt-16 flex flex-wrap gap-7 justify-center sm:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
