import React from "react";
import ProjectInterface from "../types/ProjectInterface";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import RailRow from "./RailRow";
import { techIcons } from "./icons/techIcons";

const ProjectItem: React.FC<ProjectInterface> = ({
  name,
  context,
  description,
  image,
  link,
  github,
  tech,
}) => {
  return (
    <RailRow label={context}>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <img
          className="aspect-[16/10] w-full shrink-0 rounded border border-rule object-cover object-top sm:w-56"
          src={image}
          alt={`${name} screenshot`}
          loading="lazy"
        />
        <div className="min-w-0">
          <h3 className="font-display text-xl font-semibold text-ink">
            {name}
          </h3>
          <p className="mt-2 text-body">{description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-x-2 text-sm text-accent transition-colors hover:text-ink"
              >
                <ExternalLink size={15} />
                Visit site
              </a>
            ) : null}
            {github ? (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-x-2 text-sm text-accent transition-colors hover:text-ink"
              >
                <GithubIcon size={15} />
                Source
              </a>
            ) : null}
            <div className="flex flex-wrap items-center gap-x-3">
              {tech.map((t) => {
                const entry = techIcons[t];
                if (!entry) return null;
                const Icon = entry.icon;
                return (
                  <Icon
                    key={t}
                    size={20}
                    color={entry.color}
                    title={entry.label}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </RailRow>
  );
};
export default ProjectItem;
