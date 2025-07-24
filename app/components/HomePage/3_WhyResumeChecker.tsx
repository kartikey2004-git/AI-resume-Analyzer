import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const WhyUseResumeChecker = () => {
  return (
    <section className="bg-gray-50 text-gray-900 py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold leading-tight"
        >
          Why use a <span className="text-gray-900">Resume Checker</span>?
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-5 text-left text-gray-700 text-base md:text-lg"
        >
          <p>
            You could spend hours tweaking your resume — and still not know if
            applicant tracking systems (ATS) can read it properly.
          </p>

          <p>
            When you upload your resume to our tool, we parse it like real HR
            software does. If it uploads cleanly, you’re good. If not, we tell
            you exactly what to fix.
          </p>

          <p>
            Designed with recruiters and career experts, our checker scans for
            formatting, keyword strength, layout, and overall readability —
            giving you instant feedback that actually helps.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/upload"
            className="inline-block px-6 py-3 bg-[#161636] border-b border-[#2a2a50] text-white transition-all rounded-lg text-lg font-semibold shadow-lg"
          >
            Try the Resume Checker Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUseResumeChecker;
