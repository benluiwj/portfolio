export type Props = {
  icon: string;
};

export default function SkillIcon({ icon }: Props) {
  return <i className={icon} />;
}
