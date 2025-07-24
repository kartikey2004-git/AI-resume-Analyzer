import React from "react";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaNewspaper, FaTwitter } from "react-icons/fa";

const AboutMe = () => {
  return (
    <motion.section
      className=" text-black rounded-2xl p-6 md:p-8 max-w-3xl mx-auto shadow-xl mt-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src="/images/img.jpg"
          alt="Kartikey Bhatnagar"
          className="w-24 h-24 rounded-full object-cover shadow-md"
        />

        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold">Kartikey Bhatnagar</h2>
          <p className="text-sm text-gray-700 mb-2">
            Pre-final Year Engineering Student
          </p>

          <p className="text-sm leading-relaxed text-gray-600">
            Kartikey has 1+ years in Full-stack development with hands-on
            experience in the MERN stack. Built and deployed projects like Job
            Portal, Event Scheduling App. Focused on writing clean code,
            building responsive UIs, and learning through real-world development
            challenges.
          </p>

          <div className="flex gap-4 mt-4 justify-center sm:justify-start">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-500 hover:text-white text-lg" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-sky-400 hover:text-white text-lg" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-300 hover:text-white text-lg" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
