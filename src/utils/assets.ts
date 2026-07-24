// Vite replacement for Webpack's runtime `require("../images/...")` pattern.
// Employer logos stay as real (multi-color) company PNGs, looked up by name.
// Tech/skill logos are rendered from simple-icons (see Components/icons/techIcons).

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

export const employerLogoMap = byBasename(employerLogos);
