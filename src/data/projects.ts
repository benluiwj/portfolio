import NativeSay from "../img/NativeSay.png";
import Bitcoin from "../img/Bitcoin.png";
import Clang from "../img/Clang-slang.png";

export type Project = {
  name: string;
  description: string;
  techStack: string[];
  thumbnail: string;
};

export const title: string = "Projects";

export const projects: Project[] = [
  {
    name: "NativeSay",
    description:
      "NativeSay is a translation app that helps users understand the context in which translations should be used, and provides culturally and contextually aware translations based on the specified context.",
    techStack: [],
    thumbnail: NativeSay,
  },
  {
    name: "Clang-slang",
    description:
      "A sublanguage of C that supports the core features of C such as pointer and array arithmetic and type safety.",
    techStack: [],
    thumbnail: Clang,
  },
  {
    name: "Bitcoin Nakamoto Client",
    description:
      "A command line interface application that demonstrates cryptocurrency mining and exchange. This was built by a team of four.",
    techStack: [],
    thumbnail: Bitcoin,
  },
];
