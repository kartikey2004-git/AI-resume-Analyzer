import React from "react";
import { AlertTriangle } from "lucide-react";

const ResumeWarningSection = () => {
  return (
    <section className="w-full bg-[#1e1e3f] text-white py-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Worried your resume might be overlooked by corporate HR software?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Instantly check its ATS compatibility with our powerful resume
            scanner.
          </p>
        </div>

        <div className="border-t border-[#2a2a50] pt-8 mt-10 text-gray-400 space-y-4">
          <p className="text-lg">
            <span className="inline-flex items-center gap-2  text-white  font-medium">
              <AlertTriangle className="w-5 h-5" /> Still not getting interview
              calls?
            </span>
          </p>
          <p className="max-w-3xl mx-auto">
            Your resume might have small issues that hold you back — poor
            formatting, missing keywords, or generic language. Our checker helps
            spot those and gives you suggestions to fix them fast.
          </p>
          <p className="max-w-3xl mx-auto">
            Use it to make sure every section of your resume works to highlight
            your strengths and beat the ATS filters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeWarningSection;
