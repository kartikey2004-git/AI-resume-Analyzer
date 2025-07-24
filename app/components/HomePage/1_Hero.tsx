import {
  LucideCalendarRange,
  User,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.section
      className="h-[450px] px-4 flex flex-col justify-center items-center text-center"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-[#1f2937] leading-snug tracking-tighter max-w-3xl">
        AI-Powered Resume Review
        <br />
        <span className="text-[#111827]">Get Smart Feedback in Seconds</span>
      </h1>

      <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow text-sm">
          <img
            src="/images/img.jpg"
            alt="Kartikey Bhatnagar"
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-gray-800">Written by Kartikey Bhatnagar</span>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow text-sm">
          <User className="w-6 h-6 rounded-full object-cover" />
          <span className="text-gray-800">Reviewed by Peers</span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
        <LucideCalendarRange className="w-4 h-4" />
        <span>{today}</span>
      </div>
    </motion.section>
  );
};

export default Hero;
