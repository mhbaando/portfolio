interface Data {
  expID: number;
  title: string;
  date: string;
  company: string;
  description: string;
  technology: string[];
}

export const agencies: Data[] = [
  {
    expID: 1,
    title: "Lead Front End Developer",
    date: "2022 - Present",
    company: "Adeegso",
    description:
      "I lead front-end framework design, stack management, code quality, standards, mentoring, Git workflows, & project planning.",
    technology: ["React", "Typescript", "GraphQL", "Leadership"],
  },
  {
    expID: 2,
    title: "Assistance team lead & Developer",
    date: "2021 - 2022",
    company: "Oluadepe Farms",
    description:
      "I supported day-to-day operations, staff coordination, mentoring, queue management, & policy recommendations for the Technical Support Team.",
    technology: ["React", "Typescript", "Electron", "HTML", "CSS"],
  },
];

export const startUp: Data[] = [
  {
    expID: 3,
    title: "Web Developer & UI/UX Designer",
    date: "2019 - 2019",
    company: "SIMADiLab",
    description:
      "I&abos;ve designed from scratch the SIMADiLab website and built it with Webflow, created CMS based and well designed website with user first approach.",
    technology: ["HTML5", "CSS", "Javascript", "Webflow", "Figma"],
  },
  {
    expID: 3,
    title: "Web Developer & UI/UX Designer",
    date: "2023 - 2023",
    company: "SITCO",
    description:
      "I&abos;ve designed from scratch the SITCO website and built it with Nextjs with headless Wordpress, a CMS based and well designed website.",
    technology: ["Nextjs", "Typescript", "Wordpress", "Figma"],
  },
];
