import NativeSay from "../img/NativeSay.png";
import Bitcoin from "../img/Bitcoin.png";
import Clang from "../img/Clang-slang.png";
import Profedex from "../img/Profedex.png";
import Sellah from "../img/Sellah.png";
import FoodTheBill from "../img/FoodTheBill.png";

import {
  AntlrSkill,
  MUISkill,
  PythonSkill,
  TypescriptSkill,
  RustSkill,
  FlutterSkill,
  FirebaseSkill,
  DartSkill,
  JavaSkill,
} from "./skills";
import { ISkillIcon } from "./skills";

export type Project = {
  name: string;
  description: string;
  techStack: ISkillIcon[];
  thumbnail: string;
  links: Links | undefined;
};

export type Links = {
  Github?: string;
  Devpost?: string;
  Website?: string;
};

export const title: string = "Projects";

export const projects: Project[] = [
  {
    name: "NativeSay",
    description:
      "NativeSay is a translation app that helps users understand the context in which translations should be used, and provides culturally and contextually aware translations based on the specified context. Won Top 8 in Hack&Roll 2023.",
    techStack: [MUISkill, TypescriptSkill],
    thumbnail: NativeSay,
    links: {
      Devpost: "https://devpost.com/software/nativesay",
      Website: "https://www.nativesay.com/",
    },
  },
  {
    name: "Clang-slang",
    description:
      "A sublanguage of C that supports the core features of C such as pointer and array arithmetic and type safety.",
    techStack: [AntlrSkill, TypescriptSkill],
    thumbnail: Clang,
    links: {
      Github: "https://github.com/cs4215-2023/c-interpreter",
      Website: "https://cs4215-2023.github.io/CS4215-frontend/",
    },
  },
  {
    name: "Bitcoin Nakamoto ",
    description:
      "A command line interface application that demonstrates cryptocurrency mining and exchange. This was built in a team of four.",
    techStack: [RustSkill],
    thumbnail: Bitcoin,
    links: undefined,
  },
  {
    name: "Profedex",
    description:
      "Profédex hopes to allow students to help better understand the background of their professors. ",
    techStack: [PythonSkill],
    thumbnail: Profedex,
    links: {
      Devpost: "https://devpost.com/software/profedex",
      Github: "https://github.com/benluiwj/Prof-dex",
    },
  },
  {
    name: "FoodTheBill",
    description:
      "A mobile application that provides food choices for users to alleviate pre-meal stress",
    techStack: [FlutterSkill, DartSkill, FirebaseSkill],
    thumbnail: FoodTheBill,
    links: { Github: "https://github.com/benluiwj/FoodTheBill" },
  },
  {
    name: "Sellah",
    description:
      "An address book that maintains contacts and orders between clients and partners.",
    techStack: [JavaSkill],
    thumbnail: Sellah,
    links: { Github: "https://github.com/AY2122S1-CS2103T-T12-1/tp" },
  },
];
