export interface BootLine {
  prompt: string;
  output: string;
}

export interface Project {
  tag: string;
  title: string;
  desc: string;
  stack: string[];
  url?: string;
  image?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}
