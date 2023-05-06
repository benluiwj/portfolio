export type IExperience = {
  companyName: string;
  period: string;
  role: string;
  companySite: string;
  workDone: string[];
  techStack: string[];
};

export const title: string = "Experience";

export const experiences: IExperience[] = [
  {
    companyName: "Cargo Community Network",
    period: "May 2022 - Aug 2022",
    role: "Software Engineer Intern",
    companySite:
      "https://www.linkedin.com/company/cargo-community-network/?originalSubdomain=sg",
    workDone: [
      "Improved the overall code quality and performance of an internal dashboard by rewriting existing modules.",
      "Designed and implemented a dynamic link library which processed and handled API consumption.",
      "Documented the work done by including UML diagrams, design decisions to facilitate smooth handing over of projects to other coworkers",
    ],
    techStack: [],
  },
  {
    companyName: "National University of Singapore",
    period: "May 2022 - Aug 2022",
    role: "Orbital Advisor",
    companySite: "https://www.nus.edu.sg/",
    workDone: [
      "Tutored and mentored 10 students for CP2106 Orbital, an independent software development project module.",
      "Conducted weekly zoom meetings to provide a platform for teams to share and learn from another.",
    ],
    techStack: [],
  },
];
