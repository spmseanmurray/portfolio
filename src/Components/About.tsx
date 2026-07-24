import React from "react";
import ProfileImg from "../images/SquareProfile.jpg";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="min-h-screen my-20 flex flex-col justify-center items-center bg-slate-900"
    >
      <div className="text-slate-200 text-3xl font-bold">About</div>
      <div className="flex flex-col lg:flex-row space-x-4 space-y-4 p-4 m-4 items-center border-2 bg-slate-800 border-slate-600 rounded-2xl">
        <img
          className="w-3/5 sm:max-w-xs h-auto rounded-full border-2 border-black"
          src={ProfileImg}
          alt="Sean Murray"
        />
        <div className="max-w-prose text-slate-100 space-y-4">
          <p>
            Hello, I'm Sean Murray — a software engineer in Boulder, Colorado,
            with six years of full stack experience. I started out in Aerospace
            Engineering at North Carolina State University, and an internship at
            SpaceX kindled my interest in pushing technological boundaries. After
            graduating I joined the startup world at Fathom5, a maritime
            cyber-security venture, which let me turn my aerospace roots into a
            career in software.
          </p>
          <p>
            Today I'm a Sr. Software Engineer at The Home Depot, where I work on
            the retail media platform that powers supplier advertising. Most
            recently I led the architecture and rollout of a real-time, machine
            learning-based sponsored product recommendation system, and built an
            AI agentic data portal that makes campaign performance easier for
            business stakeholders to explore. I'm also a certified Google
            Associate Cloud Engineer.
          </p>
          <p>
            Beyond coding, you'll likely find me somewhere in the great outdoors.
            Whether I'm hitting the pavement for a run, traversing hiking trails,
            or exploring the wilderness on backpacking trips, I love to be
            outside.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
