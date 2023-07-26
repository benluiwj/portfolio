import {
  CSharpSkill,
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
  SupabaseSkill,
  TypescriptSkill,
} from "./skills"

export type IExperience = {
  companyName: string
  period: string
  role: string
  companySite: string
  workDone: string[]
  techStack: ISkillIcon[]
}

export const title: string = "Experience"

export const experiences: IExperience[] = [
  {
    companyName: "One X Group",
    period: "May 2023 - Jul 2023",
    role: "Software Engineer Intern",
    companySite: "https://www.onextech.com.sg/",
    workDone: [
      "Implemented a test infrastructure by mocking API endpoints to achieve an overall test coverage of 67% using MSW, React Testing Library and Playwright",
      "Worked closely with the CTO, senior developers and project managers to implement multiple client-facing features using NextJS in Typescript and Supabase",
      "Participated in the company's website redesign and redevelopment, maintaining 7 websites simulateneously.",
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
      "Improved the overall code quality and performance of an internal dashboard by rewriting existing modules.",
      "Designed and implemented a dynamic link library which processed and handled API consumption.",
      "Documented the work done by including UML diagrams, design decisions to facilitate smooth handing over of projects to other coworkers",
    ],
    techStack: [JavascriptSkill, CSharpSkill],
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
    techStack: [
      PythonSkill,
      FlutterSkill,
      FirebaseSkill,
      DartSkill,
      ReactSkill,
    ],
  },
]
