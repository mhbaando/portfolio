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
    date: "2025 - 2026",
    company: "Hoyhub · Kenya",
    description:
      "Leading frontend architecture and development for Hoyhub's web platform, building scalable React applications with TypeScript and integrating Python/Django backends.",
    technology: ["Next.js", "TypeScript", "React", "Python", "Django", "PostgreSQL"],
  },
  {
    expID: 2,
    title: "Lead Engineer",
    date: "2024 - 2025",
    company: "GuriX · Somalia",
    description:
      "Leading engineering efforts at GuriX, driving technical strategy, mentoring developers, and shipping production-grade software across the stack.",
    technology: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    expID: 3,
    title: "Lead Front End Developer",
    date: "2022 - Present",
    company: "Adeegso - Norway",
    description:
      "I lead front-end framework design, stack management, code quality, standards, mentoring, Git workflows, & project planning.",
    technology: ["React", "Typescript", "GraphQL", "Leadership"],
  },
  {
    expID: 4,
    title: "Assistance team lead & Developer",
    date: "2021 - 2022",
    company: "Oluadepe Farms - Nigeria",
    description:
      "I supported day-to-day operations, staff coordination, mentoring, queue management, & policy recommendations for the Technical Support Team.",
    technology: ["React", "Typescript", "Electron", "HTML", "CSS"],
  },
];

export const startUp: Data[] = [
  {
    expID: 5,
    title: "Full Stack Developer",
    date: "2025 - 2026",
    company: "NextOne Website - Somalia",
    description:
      "Built the NextOne corporate website from the ground up — a modern, performant platform with Next.js, TypeScript, and PostgreSQL.",
    technology: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    expID: 6,
    title: "Full Stack Developer",
    date: "2025 - 2026",
    company: "HISS Website - Somalia",
    description:
      "Developed the HISS web platform with a focus on clean architecture, responsive design, and robust data handling with PostgreSQL.",
    technology: ["Next.js", "TypeScript", "PostgreSQL", "React"],
  },
  {
    expID: 7,
    title: "Web Developer & UI/UX Designer",
    date: "2019 - 2019",
    company: "SIMADiLab - Somalia",
    description:
      "I've designed from scratch the SIMADiLab website and built it with Webflow, created CMS based and well designed website with user first approach.",
    technology: ["HTML5", "CSS", "Javascript", "Webflow", "Figma"],
  },
  {
    expID: 8,
    title: "Web Developer & UI/UX Designer",
    date: "2023 - 2023",
    company: "SITCO - Somalia",
    description:
      "I've designed from scratch the SITCO website and built it with Nextjs with headless Wordpress, a CMS based and well designed website.",
    technology: ["Nextjs", "Typescript", "Wordpress", "Figma"],
  },
];

export const Companies: Data[] = [
  {
    expID: 9,
    title: "Co-Founder & Full Stack developer",
    date: "2022 - Present",
    company: "NextOne - Somalia",
    description:
      "As a co-founder & full-stack developer, I guide technical direction, manage software development, & integrate advertising for client success.",
    technology: ["React", "Nextjs", "Python", "Django"],
  },
  {
    expID: 10,
    title: "Co-Founder & Full Stack developer",
    date: "2018 - 2021",
    company: "@deeroAdvert - Somalia",
    description:
      "As a co-founder & full-stack developer, I guide technical direction, manage software development, & integrate advertising for client success.",
    technology: ["Design", "UI/UX", "Animation"],
  },
];
