import {
  CSharpSkill,
  CSkill,
  DartSkill,
  FirebaseSkill,
  FlutterSkill,
  ISkillIcon,
  JavascriptSkill,
  MSWSkill,
  MUISkill,
  NextJsSkill,
  PrismaSkill,
  PythonSkill,
  ReactSkill,
  RustSkill,
  SupabaseSkill,
  TypescriptSkill,
} from "./skills";

export type IExperience = {
  companyName: string;
  period: string;
  role: string;
  companySite: string;
  workDone: string[];
  techStack: ISkillIcon[];
};

export const title: string = "Experience";

export const experiences: IExperience[] = [
  {
    companyName: "Grasshopper Asia",
    period: "Aug 2023 - Nov 2023",
    role: "Software Engineer Intern",
    companySite: "https://grasshopperasia.com",
    workDone: [
      "Researched multiple multi-threaded loggers, gaining insights into their design choices by bench-marking their performance.",
      "Optimized and improved the functionality of a low-latency logger while maintaining a performance difference of less than 1%.",
    ],
    techStack: [RustSkill],
  },
  {
    companyName: "One X Group",
    period: "May 2023 - Jul 2023",
    role: "Software Engineer Intern",
    companySite: "https://www.onextech.com.sg/",
    workDone: [
      "Introduced a test infrastructure with integration tests and end-to-end testing, increasing code coverage from 0% to 67%.",
      "Enhanced a metrics dashboard, resulting in increased user productivity.",
      "Orchestrated the simultaneous management of 7 company websites that improved site traffic and user experience.",
    ],
    techStack: [
      NextJsSkill,
      ReactSkill,
      TypescriptSkill,
      SupabaseSkill,
      MSWSkill,
      MUISkill,
      PrismaSkill,
    ],
  },
  {
    companyName: "Cargo Community Network",
    period: "May 2022 - Aug 2022",
    role: "Software Engineer Intern",
    companySite:
      "https://www.linkedin.com/company/cargo-community-network/?originalSubdomain=sg",
    workDone: [
      "Rewrote existing modules of an internal dashboard to improve the overall performance and maintainability.",
      "Designed and implemented a library that processed and handled more than 20 load-balancers.",
      "Documented the work done by including UML diagrams and design decisions to facilitate smooth handing over of projects to other coworkers.",
    ],
    techStack: [JavascriptSkill, CSharpSkill],
  },
  {
    companyName: "National University of Singapore",
    period: "May 2022 - Aug 2022",
    role: "Teaching Assistant",
    companySite: "https://www.nus.edu.sg/",
    workDone: [
      "Tutored and mentored 10 students for CP2106 Orbital, an independent software development project module in Summer 2022.",
      "Tutored and mentored 12 students for CS1010 Programming Methodology, an introductory programming module in Fall 2023.",
    ],
    techStack: [
      PythonSkill,
      FlutterSkill,
      FirebaseSkill,
      DartSkill,
      ReactSkill,
      CSkill,
    ],
  },
];
