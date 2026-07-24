import React from "react";
import ProjectInterface from "../types/ProjectInterface";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import { techIconMap } from "../utils/assets";

const ProjectItem: React.FC<ProjectInterface> = ({
  name,
  description,
  image,
  link,
  github,
  tech,
}) => {
  return (
    <div
      className="border-slate-600 border-2 rounded-2xl bg-slate-800 my-3 mx-5"
    >
      <img
        className="object-cover rounded-t-2xl border-b-2 border-slate-600"
        src={image}
        alt={name + "image"}
      />
      <div className="justify-start align-center text-slate-200 p-3">
        <div className="flex text-xl text-sky-300 font-bold gap-x-3">
          {name}
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label={name + " GitHub repository"}
            >
              <GithubIcon className="text-slate-200" size={20} />
            </a>
          ) : null}
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={name + " live site"}
          >
            <ExternalLink className="text-slate-200" size={20} />
          </a>
        </div>
        <div className="text-m lg:h-24 xl:h-16">{description}</div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-6 mx-3 py-2 border-t-2 border-slate-600">
        {tech.map((tech) => {
          const techIcon = techIconMap[tech];
          return (
            <div
              key={tech}
              className="col-span-1 items-center flex justify-center"
            >
              <img
                className="w-10 h-10 mb-1"
                src={techIcon}
                alt={tech}
                key={tech}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProjectItem;
