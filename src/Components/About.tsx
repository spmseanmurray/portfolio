import React from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import RailRow from "./RailRow";
import ProfileImg from "../images/SquareProfile.jpg";

const About: React.FC = () => {
  return (
    <Section id="about" title="About">
      <Reveal>
        <RailRow label="Boulder, CO" sublabel="Sr. Software Engineer">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            <img
              className="aspect-square w-40 shrink-0 rounded-full object-cover"
              src={ProfileImg}
              alt="Sean Murray"
              width={160}
              height={160}
            />
            <div className="max-w-prose space-y-4 text-body">
              <p>
                Hello, I'm Sean Murray — a software engineer in Boulder,
                Colorado, with six years of full stack experience. I started out
                in Aerospace Engineering at North Carolina State University, and
                an internship at SpaceX kindled my interest in pushing
                technological boundaries. After graduating I joined the startup
                world at Fathom5, a maritime cyber-security venture, which let
                me turn my aerospace roots into a career in software.
              </p>
              <p>
                Today I'm a Senior Software Engineer at The Home Depot, where I
                work on the retail media platform that powers supplier
                advertising. Most recently I led the architecture and rollout of
                a real-time, machine learning-based sponsored product
                recommendation system, and built an AI agentic data portal that
                makes campaign performance easier for business stakeholders to
                explore. I'm also a certified Google Associate Cloud Engineer.
              </p>
              <p>
                Beyond coding, you'll likely find me somewhere in the great
                outdoors. Whether I'm hitting the pavement for a run, traversing
                hiking trails, or exploring the wilderness on backpacking trips,
                I love to be outside.
              </p>
            </div>
          </div>
        </RailRow>
      </Reveal>
    </Section>
  );
};
export default About;
