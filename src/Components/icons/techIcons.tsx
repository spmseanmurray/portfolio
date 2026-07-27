import {
  SiJavascript,
  SiJavascriptHex,
  SiHtml5,
  SiHtml5Hex,
  SiCss,
  SiCssHex,
  SiTypescript,
  SiTypescriptHex,
  SiPython,
  SiPythonHex,
  SiGo,
  SiGoHex,
  SiReact,
  SiReactHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiMui,
  SiMuiHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiExpress,
  SiExpressHex,
  SiSpringboot,
  SiSpringbootHex,
  SiPostgresql,
  SiPostgresqlHex,
  SiMongodb,
  SiMongodbHex,
  SiGit,
  SiGitHex,
  SiGithubactions,
  SiGithubactionsHex,
  SiGooglecloud,
  SiGooglecloudHex,
  SiPrometheus,
  SiPrometheusHex,
  SiGrafana,
  SiGrafanaHex,
  SiClaude,
  SiClaudeHex,
  SiGithubcopilot,
  SiGithubcopilotHex,
  SiGraphql,
  SiGraphqlHex,
  SiGooglebigquery,
  SiGooglebigqueryHex,
  SiGooglepubsub,
  SiGooglepubsubHex,
  SiApacheairflow,
  SiApacheairflowHex,
  SiGoogledataflow,
  SiGoogledataflowHex,
  SiDocker,
  SiDockerHex,
  SiKubernetes,
  SiKubernetesHex,
  SiTerraform,
  SiTerraformHex,
} from "@icons-pack/react-simple-icons";
import type React from "react";
import { Coffee, Database, Terminal } from "lucide-react";

type IconComponent = React.ComponentType<{
  size?: number;
  color?: string;
  className?: string;
  title?: string;
}>;

export type TechIcon = {
  icon: IconComponent;
  color?: string;
  label: string;
};

// Some brand colors (Express, GitHub Copilot) are near-black and disappear
// against the dark ground, so any mark whose contrast is too low falls back
// to the page's ink tone.
// Keep these in sync with --color-ground and --color-ink in index.css.
const PAGE_BG = "#16161b";
const DARK_FALLBACK = "#f2f1ef";
const MIN_CONTRAST = 3;

function luminance(hex: string): number {
  const c = hex.replace("#", "");
  const channel = (i: number) => {
    const v = parseInt(c.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * channel(0) + 0.7152 * channel(2) + 0.0722 * channel(4);
}

function readableColor(hex: string): string {
  const a = luminance(hex);
  const b = luminance(PAGE_BG);
  const contrast = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  return contrast < MIN_CONTRAST ? DARK_FALLBACK : hex;
}

function brand(icon: IconComponent, hex: string, label: string): TechIcon {
  return { icon, color: readableColor(hex), label };
}

// Maps the tech slugs used in SkillConfig / ProjectConfig to a display label
// and (where one exists) a simple-icons brand mark. Slugs with no entry here
// render nothing, so keep this in sync with the configs.
export const techIcons: Record<string, TechIcon> = {
  // Languages
  javascript: brand(SiJavascript, SiJavascriptHex, "JavaScript"),
  typescript: brand(SiTypescript, SiTypescriptHex, "TypeScript"),
  python: brand(SiPython, SiPythonHex, "Python"),
  golang: brand(SiGo, SiGoHex, "Go"),
  html5: brand(SiHtml5, SiHtml5Hex, "HTML"),
  css3: brand(SiCss, SiCssHex, "CSS"),
  java: { icon: Coffee, color: DARK_FALLBACK, label: "Java" },
  sql: { icon: Database, color: DARK_FALLBACK, label: "SQL" },

  // Frameworks and libraries
  react: brand(SiReact, SiReactHex, "React"),
  tailwindcss: brand(SiTailwindcss, SiTailwindcssHex, "Tailwind CSS"),
  "material-ui": brand(SiMui, SiMuiHex, "MUI"),
  nodejs: brand(SiNodedotjs, SiNodedotjsHex, "Node.js"),
  express: brand(SiExpress, SiExpressHex, "Express"),
  springboot: brand(SiSpringboot, SiSpringbootHex, "Spring Boot"),
  graphql: brand(SiGraphql, SiGraphqlHex, "GraphQL"),

  // Data and pipelines
  postgresql: brand(SiPostgresql, SiPostgresqlHex, "PostgreSQL"),
  mongodb: brand(SiMongodb, SiMongodbHex, "MongoDB"),
  bigquery: brand(SiGooglebigquery, SiGooglebigqueryHex, "BigQuery"),
  pubsub: brand(SiGooglepubsub, SiGooglepubsubHex, "Pub/Sub"),
  airflow: brand(SiApacheairflow, SiApacheairflowHex, "Airflow"),
  dataflow: brand(SiGoogledataflow, SiGoogledataflowHex, "Dataflow"),

  // Cloud and infrastructure
  gcp: brand(SiGooglecloud, SiGooglecloudHex, "Google Cloud"),
  docker: brand(SiDocker, SiDockerHex, "Docker"),
  kubernetes: brand(SiKubernetes, SiKubernetesHex, "Kubernetes"),
  terraform: brand(SiTerraform, SiTerraformHex, "Terraform"),

  // CI/CD and observability
  git: brand(SiGit, SiGitHex, "Git"),
  "gh-actions": brand(SiGithubactions, SiGithubactionsHex, "GitHub Actions"),
  prometheus: brand(SiPrometheus, SiPrometheusHex, "Prometheus"),
  grafana: brand(SiGrafana, SiGrafanaHex, "Grafana"),

  // AI tooling
  claude: brand(SiClaude, SiClaudeHex, "Claude Code"),
  "github-copilot": brand(
    SiGithubcopilot,
    SiGithubcopilotHex,
    "GitHub Copilot",
  ),
  codex: { icon: Terminal, color: DARK_FALLBACK, label: "Codex" },
};
