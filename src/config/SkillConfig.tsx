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
    skills: ["react", "nodejs", "express", "springboot", "graphql", "tailwindcss"],
  },
  {
    category: "Data and Pipelines",
    skills: ["postgresql", "mongodb", "bigquery", "pubsub", "airflow", "dataflow"],
  },
  {
    category: "Cloud and Infrastructure",
    skills: ["gcp", "docker", "kubernetes", "terraform"],
  },
  {
    category: "CI/CD and Observability",
    skills: ["git", "gh-actions", "prometheus", "grafana"],
  },
  {
    category: "Build and Dev Tooling",
    skills: ["nx", "vite", "storybook"],
  },
  {
    category: "AI Tooling",
    skills: ["claude", "github-copilot", "codex"],
  },
  {
    category: "Testing",
    skills: ["jest", "cypress", "react-testing", "postman"],
  },
];
export default skillCategories;
