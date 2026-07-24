import React from "react";
import ExperienceInterface from "../types/ExperienceInterface";
import { employerLogoMap } from "../utils/assets";

const ExperienceItem: React.FC<ExperienceInterface> = ({
  company,
  dates,
  position,
  bullets,
}) => {
  return (
    <div className="rounded-xl border border-rule bg-surface p-5">
      <div className="flex flex-col items-center gap-2 border-b border-rule pb-3 md:flex-row md:justify-between md:gap-x-8">
        <div className="flex flex-row items-center gap-x-3">
          {/*
            All employer logos are square. The explicit ratio reserves the box
            before the file arrives -- without it the image collapses to zero
            height, which also stops lazy loading from ever firing.
          */}
          <img
            className="aspect-square w-10 rounded-lg object-contain md:w-14"
            src={employerLogoMap[company.replaceAll(" ", "").toLowerCase()]}
            alt={`${company} logo`}
            width={56}
            height={56}
            loading="lazy"
          />
          <span className="font-display text-xl font-semibold text-ink">
            {company}
          </span>
        </div>
        <span className="font-semibold text-accent">{position}</span>
        <span className="text-sm text-muted tabular-nums">{dates}</span>
      </div>
      <ul className="mt-3 list-outside list-disc space-y-2 pl-4 text-body marker:text-faint">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};
export default ExperienceItem;
