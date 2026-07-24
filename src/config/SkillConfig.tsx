import SkillInterface from "../types/SkillInterface";

const skillCategories: SkillInterface[] = [
  {
    category: "Languages",
    skills: [
      "golang",
      "javascript",
      "typescript",
      "java",
      "python",
      "sql",
      "html5",
      "css3",
    ],
  },
  {
    category: "Frameworks and Libraries",
    skills: ["react", "nodejs", "express", "springboot", "tailwindcss"],
  },
  {
    category: "Data",
    skills: ["postgresql", "mongodb"],
  },
  {
    category: "CI/CD, Cloud, and Observability",
    skills: ["git", "gh-actions", "gcp", "prometheus", "grafana"],
  },
  {
    category: "AI Tooling",
    skills: ["claude", "github-copilot"],
  },
  {
    category: "Testing",
    skills: ["jest", "cypress", "react-testing"],
  },
];
export default skillCategories;
