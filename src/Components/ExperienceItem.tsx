import React from "react";
import ExperienceInterface from "../types/ExperienceInterface";
import RailRow from "./RailRow";
import { employerLogoMap } from "../utils/assets";

const ExperienceItem: React.FC<ExperienceInterface> = ({
  company,
  dates,
  position,
  bullets,
}) => {
  return (
    <RailRow label={dates} sublabel={company}>
      <div className="flex items-center gap-x-3">
        <img
          className="aspect-square w-7 shrink-0 rounded object-contain"
          src={employerLogoMap[company.replaceAll(" ", "").toLowerCase()]}
          alt=""
          width={28}
          height={28}
          loading="lazy"
        />
        <h3 className="font-display text-xl font-semibold text-ink">
          {position}
        </h3>
      </div>
      <ul className="mt-3 list-outside list-disc space-y-2 pl-4 text-body marker:text-faint">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </RailRow>
  );
};
export default ExperienceItem;
