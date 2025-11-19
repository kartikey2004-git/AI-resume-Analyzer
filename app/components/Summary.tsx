import React from "react";
import ScoreGauge from "./ScoreGauge";
import ScoreBadge from "./ScoreBadge";

const Category = ({ title, score }: { title: string; score: number }) => {
  const textColor =
    score > 69
      ? "text-green-600"
      : score > 49
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <div className="w-full">
      <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4">
        <div className="flex items-center gap-3">
          <p className="text-lg font-medium">{title}</p>
          <ScoreBadge score={score} />
        </div>

        <p className="text-lg font-semibold">
          <span className={textColor}>{score}</span>/100
        </p>
      </div>
    </div>
  );
};

const Summary = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="w-full flex flex-col gap-10">
      {/* SCORE CARD */}
      <div className="bg-white rounded-3xl w-full flex flex-col gap-6 px-6 py-6 shadow-sm">
        <div className="flex items-center gap-6 max-sm:flex-col">
          <ScoreGauge score={feedback.overallScore} />

          <div className="flex flex-col gap-1 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Your Resume Score
            </h2>
            <p className="text-sm text-gray-500 leading-snug max-w-sm">
              This score is calculated based on the key areas listed below.
            </p>
          </div>
        </div>
      </div>

      {/* CATEGORY LIST */}
      <div className="flex flex-col gap-4">
        <Category title="Tone & Style" score={feedback.toneAndStyle.score} />
        <Category title="Content" score={feedback.content.score} />
        <Category title="Structure" score={feedback.structure.score} />
        <Category title="Skills" score={feedback.skills.score} />
      </div>
    </div>
  );
};

export default Summary;
