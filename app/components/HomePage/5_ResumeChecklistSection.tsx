import React from "react";

const checklistItems = [
  {
    title: "Format",
    detail: "Use standard fonts (Arial, Calibri). Save as .docx or .pdf. Skip graphics.",
  },
  {
    title: "Structure",
    detail: "Use clear headings. List work history in reverse chronological order.",
  },
  {
    title: "Keywords",
    detail: "Mirror job description terms and role-specific skills.",
  },
  {
    title: "ATS Compatibility",
    detail: "Avoid tables/images. Use basic bullet points and clear formatting.",
  },
  {
    title: "Proofreading",
    detail: "Fix typos, formatting issues, and update job history.",
  },
  {
    title: "File Naming",
    detail: "Use a clean file name like John_Doe_Resume.pdf.",
  },
];

const ResumeCheckListSection = () => {
  return (
    <section className="bg-[#f9fafb] py-20 px-4 md:px-10 text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resume Optimization Checklist
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">
            A quick run-through to make your resume ATS-friendly and interview-ready.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {checklistItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeCheckListSection;
