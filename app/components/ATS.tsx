import React from "react";
import { cn } from "~/lib/utils";

const ATS = ({
  score,
  suggestions,
}: {
  score: number;
  suggestions: { type: "good" | "improve"; tip: string }[];
}) => {
  const bgColor =
    score > 69 ? "bg-green-50" : score > 49 ? "bg-yellow-50" : "bg-red-50";

  return (
    <div
      className={cn(
        "rounded-xl w-full p-5 flex flex-col gap-4 border",
        bgColor
      )}
    >
      {/* HEADER */}
      <div className="flex items-center gap-3">
        <img
          src={
            score > 69
              ? "/icons/ats-good.svg"
              : score > 49
              ? "/icons/ats-warning.svg"
              : "/icons/ats-bad.svg"
          }
          alt="ATS"
          className="w-8 h-8"
        />
        <p className="text-lg font-semibold">ATS Score — {score}/100</p>
      </div>

      {/* DESCRIPTION */}
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium text-gray-700">
          How well does your resume pass through Applicant Tracking Systems?
        </p>

        <p className="text-sm text-gray-600 leading-relaxed">
          Your resume was scanned like an employer would. Here's how it
          performed:
        </p>

        {/* Suggestions */}
        <div className="flex flex-col gap-2">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="flex items-start gap-2">
              <img
                src={
                  suggestion.type === "good"
                    ? "/icons/check.svg"
                    : "/icons/warning.svg"
                }
                alt="tip"
                className="w-4 h-4 mt-0.5 flex-shrink-0"
              />
              <p className="text-sm text-gray-700">{suggestion.tip}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          Want a better score? Improve your resume using the suggestions above.
        </p>
      </div>
    </div>
  );
};

export default ATS;
