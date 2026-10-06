import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
  { label: "Backend", items: ["Java / Spring Boot", "Python / FastAPI", "Spring Security"] },
  { label: "Frontend", items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "React Query", "shadcn/ui"] },
  { label: "Mobile", items: ["React Native", "Expo Go", "Flutter", "Dart", "Provider"] },
  { label: "Infra & CI/CD", items: ["PostgreSQL", "Docker", "Git", "GitHub Actions", "REST APIs"] },
];
