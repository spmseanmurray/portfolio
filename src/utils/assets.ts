// Vite replacement for Webpack's runtime `require("../images/...")` pattern.
// Eagerly import every logo so components can look one up by name at runtime.

const techIcons = import.meta.glob("../images/tech/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const employerLogos = import.meta.glob("../images/employers/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function byBasename(glob: Record<string, string>): Record<string, string> {
  const map: Record<string, string> = {};
  for (const path in glob) {
    const name = path.split("/").pop()!.replace(/\.png$/, "");
    map[name] = glob[path];
  }
  return map;
}

export const techIconMap = byBasename(techIcons);
export const employerLogoMap = byBasename(employerLogos);
