import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaCopy,
  FaCheck,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const contactLinks = [
  {
    name: "Email",
    value: "ghedjatirahmoni@gmail.com",
    subtitle: "Direct Inquiries & Project Discussion",
    href: "mailto:ghedjatirahmoni@gmail.com",
    icon: FaEnvelope,
    accentColor: "#EA4335",
    glowGradient: "from-[#EA4335]/30 via-[#FBBC05]/20 to-[#4285F4]/30",
    borderHover: "group-hover:border-[#EA4335]/60",
    badge: "Direct Mail",
    isEmail: true,
  },
  {
    name: "LinkedIn",
    value: "Abderrahim Ghedjati",
    subtitle: "Professional Profile & Network",
    href: "https://www.linkedin.com/in/abderrahim-ghedjati-435b74281/?isSelfProfile=true",
    icon: FaLinkedinIn,
    accentColor: "#0A66C2",
    glowGradient: "from-[#0A66C2]/35 via-[#0077B5]/20 to-[#00A0DC]/35",
    borderHover: "group-hover:border-[#0A66C2]/60",
    badge: "Connect",
    isEmail: false,
  },
  {
    name: "GitHub",
    value: "@rahmoni47",
    subtitle: "Open Source Code & Repositories",
    href: "https://github.com/rahmoni47",
    icon: FaGithub,
    accentColor: "#915EFF",
    glowGradient: "from-[#915EFF]/35 via-[#7042f8]/20 to-[#bf61ff]/35",
    borderHover: "group-hover:border-[#915EFF]/60",
    badge: "Repositories",
    isEmail: false,
  },
  {
    name: "Instagram",
    value: "@rahmoni.dev",
    subtitle: "Tech Content & Dev Updates",
    href: "https://www.instagram.com/rahmoni.dev/",
    icon: FaInstagram,
    accentColor: "#E1306C",
    glowGradient: "from-[#f09433]/30 via-[#e6683c]/25 to-[#bc1888]/30",
    borderHover: "group-hover:border-[#E1306C]/60",
    badge: "Follow",
    isEmail: false,
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e, email) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Contact Cards Hub */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.85] bg-gradient-to-b from-[#110c28]/95 to-[#090518]/95 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#915EFF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wide mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Opportunities & Projects</span>
          </div>

          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact Me.</h3>
          <p className="mt-2 text-secondary text-[15px] max-w-lg leading-[26px]">
            Have an exciting opportunity, project inquiry, or just want to chat tech? Connect with me directly on any of the platforms below:
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {contactLinks.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-2xl p-[1.5px] transition-all duration-300 hover:-translate-y-1 block"
                >
                  {/* Glowing background aura */}
                  <div
                    className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${contact.glowGradient} opacity-20 group-hover:opacity-100 blur-md transition duration-500`}
                  />

                  {/* Card Container */}
                  <div
                    className={`relative bg-[#151030]/90 backdrop-blur-xl rounded-2xl p-4 sm:p-5 flex items-center justify-between border border-white/10 ${contact.borderHover} transition-all duration-300 shadow-lg overflow-hidden`}
                  >
                    {/* Diagonal Light Sweep */}
                    <div className="pointer-events-none absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[300%] transition-all duration-1000 ease-in-out" />

                    <div className="flex items-center gap-4 min-w-0">
                      {/* Brand Icon Chamber */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300"
                        style={{
                          backgroundColor: `${contact.accentColor}18`,
                          border: `1px solid ${contact.accentColor}40`,
                        }}
                      >
                        <Icon
                          className="text-[20px]"
                          style={{ color: contact.accentColor }}
                        />
                      </div>

                      {/* Text Details */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-white font-bold text-[17px] tracking-wide group-hover:text-white">
                            {contact.name}
                          </h4>
                          <span
                            className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md"
                            style={{
                              backgroundColor: `${contact.accentColor}18`,
                              color: contact.accentColor,
                            }}
                          >
                            {contact.badge}
                          </span>
                        </div>
                        <p className="text-white-100 font-medium text-[14px] truncate mt-0.5">
                          {contact.value}
                        </p>
                        <p className="text-secondary text-[12px] truncate hidden sm:block">
                          {contact.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                      {contact.isEmail && (
                        <button
                          onClick={(e) => handleCopyEmail(e, contact.value)}
                          title="Copy Email Address"
                          type="button"
                          className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-secondary hover:text-white transition-all duration-200"
                        >
                          {copied ? (
                            <FaCheck className="text-emerald-400 text-[14px]" />
                          ) : (
                            <FaCopy className="text-[14px]" />
                          )}
                        </button>
                      )}

                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.04] group-hover:bg-white/[0.12] border border-white/10 text-secondary group-hover:text-white transition-all duration-300">
                        <FaExternalLinkAlt className="text-[12px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* 3D Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
