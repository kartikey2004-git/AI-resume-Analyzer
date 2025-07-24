import React from "react";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "Upload your resume",
      description:
        "Upload your resume or CV in PDF, Word Doc, or plain text format. Our software parses it in seconds.",
    },
    {
      step: "2",
      title: "Review your information",
      description:
        "Check each section of your resume to confirm everything parsed correctly. If it looks good here, ATS systems can read it.",
    },
    {
      step: "3",
      title: "Get actionable suggestions",
      description:
        "We’ll suggest improvements — from fixing grammar to adding high-impact skills — so you can update and apply with confidence.",
    },
  ];

  return (
    <section className="bg-white text-gray-900 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            How to use our resume checker{" "}
            <span className="text-gray-900">for free</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our resume scanner checks all the key elements to ensure your
            resume is as competitive as possible — and unlike others, it’s
            completely free.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {steps.map(({ step, title, description }) => (
            <div
              key={step}
              className="group p-6 border rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="text-5xl font-bold text-gray-900 group-hover:scale-105 transition">
                {step}
              </div>
              <h3 className="text-xl font-semibold mt-4">{title}</h3>
              <p className="text-gray-700 mt-2 text-base leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
