import React from "react";

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let badgeColor = "";
  let textColor = "";

  if (score > 69) {
    badgeColor = "bg-badge-green";
    textColor = "text-green-600";
  } else if (score > 49) {
    badgeColor = "bg-badge-yellow";
    textColor = "text-yellow-600";
  } else {
    badgeColor = "bg-badge-red";
    textColor = "text-red-600";
  }

  const badgeText =
    score > 69 ? "Strong" : score > 49 ? "Good Start" : "Needs Work";

  return (
    <div className={`score-badge ${badgeColor} rounded-full px-3 py-1`}>
      <p className={`text-xs ${textColor} font-semibold`}>{badgeText}</p>
    </div>
  );
};

export default ScoreBadge;
