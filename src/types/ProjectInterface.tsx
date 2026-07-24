interface ProjectInterface {
  name: string;
  /** Short rail label describing the kind of work, e.g. "Volunteer". */
  context: string;
  description: string;
  image: string;
  /** Live site, when one is still up. Omitted for retired demos. */
  link?: string;
  github?: string;
  tech: string[];
}
export default ProjectInterface;
