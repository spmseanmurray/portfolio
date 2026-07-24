import React from "react";
import ProjectInterface from "../types/ProjectInterface";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import { techIcons } from "./icons/techIcons";

const ProjectItem: React.FC<ProjectInterface> = ({
  name,
  description,
  image,
  link,
  github,
  tech,
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-rule bg-surface">
      {/*
        Screenshots vary between roughly 2.1:1 and 2.25:1, so a fixed ratio
        both reserves space before load and keeps the three cards aligned.
      */}
      <img
        className="aspect-[16/7] w-full border-b border-rule object-cover"
        src={image}
        alt={`${name} screenshot`}
        loading="lazy"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start gap-x-3">
          <h3 className="font-display text-lg font-semibold text-accent">
            {name}
          </h3>
          <div className="ml-auto flex shrink-0 gap-x-3 pt-1">
            {github ? (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${name} GitHub repository`}
                className="text-muted transition-colors hover:text-accent"
              >
                <GithubIcon size={18} />
              </a>
            ) : null}
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                aria-label={`${name} live site`}
                className="text-muted transition-colors hover:text-accent"
              >
                <ExternalLink size={18} />
              </a>
            ) : null}
          </div>
        </div>
        <p className="mt-2 text-sm text-body">{description}</p>
        <div className="mt-auto flex flex-wrap gap-4 border-t border-rule pt-4 mt-4">
          {tech.map((t) => {
            const entry = techIcons[t];
            if (!entry) return null;
            const Icon = entry.icon;
            return (
              <Icon
                key={t}
                size={26}
                color={entry.color}
                title={entry.label}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;
