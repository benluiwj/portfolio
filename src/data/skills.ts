import { ReactElement } from "react";

import { Antlr } from "../svg/skills/Antlr";
import { Typescript } from "../svg/skills/Typescript";
import { MUI } from "../svg/skills/MUI";
import { Rust } from "../svg/skills/Rust";
import { Python } from "../svg/skills/Python";
import { Flutter } from "../svg/skills/Flutter";
import { Dart } from "../svg/skills/Dart";
import { Firebase } from "../svg/skills/Firebase";
import { Java } from "../svg/skills/Java";
import { NextJs } from "../svg/skills/NextJs";
import { Javascript } from "../svg/skills/Javascript";
import { CSharp } from "../svg/skills/CSharp";
import { React } from "../svg/skills/React";

export type ISkillIcon = {
  icon: ReactElement<void, "svg">;
  iconName: string;
};

export const AntlrSkill: ISkillIcon = { icon: Antlr(), iconName: "Antlr" };

export const TypescriptSkill: ISkillIcon = {
  icon: Typescript(),
  iconName: "Typescript",
};

export const MUISkill: ISkillIcon = { icon: MUI(), iconName: "MUI" };

export const RustSkill: ISkillIcon = { icon: Rust(), iconName: "Rust" };

export const PythonSkill: ISkillIcon = { icon: Python(), iconName: "Python" };

export const FlutterSkill: ISkillIcon = {
  icon: Flutter(),
  iconName: "Flutter",
};

export const DartSkill: ISkillIcon = { icon: Dart(), iconName: "Dart" };

export const FirebaseSkill: ISkillIcon = {
  icon: Firebase(),
  iconName: "Firebase",
};

export const JavaSkill: ISkillIcon = { icon: Java(), iconName: "Java" };

export const NextJsSkill: ISkillIcon = { icon: NextJs(), iconName: "Nextjs" };

export const JavascriptSkill: ISkillIcon = {
  icon: Javascript(),
  iconName: "Javascript",
};

export const CSharpSkill: ISkillIcon = {
  icon: CSharp(),
  iconName: "C#",
};

export const ReactSkill: ISkillIcon = {
  icon: React(),
  iconName: "React",
};
