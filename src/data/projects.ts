import type { Project } from "../types";

export const projects: Project[] = [
  {
    tag: "PROCON-RJ / SEDCON",
    title: "Device Register PROCON-RJ - SEDCON",
    desc: "Sistema de inventário e gestão de dispositivos criado para a equipe SEDCON, com autenticação via Spring Security e interface em shadcn/ui.",
    stack: ["Spring Boot", "React", "TypeScript", "PostgreSQL", "shadcn/ui"],
    url: "https://github.com/GuilhermeCosM/DEVICE-REGISTER-PROCON-RJ-SEDCON",
    image: `${import.meta.env.BASE_URL}projects/device-register-sedcon.png`,
  },
  {
    tag: "PROCON-RJ / SEDCON",
    title: "Sistema de Chamados SEDCON",
    desc: "Sistema de chamados técnicos com atualização de status, definição de prioridade, atribuição de técnico e histórico de auditoria. A API REST é consumida por um aplicativo mobile em Flutter.",
    stack: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Flutter"],
    url: "https://sistema-de-chamados-sedcon.netlify.app",
    image: `${import.meta.env.BASE_URL}projects/sistema-chamados-sedcon.png`,
  },
  {
    tag: "PROJETO PESSOAL",
    title: "Financial Manager",
    desc: "Aplicação web de finanças pessoais com login, usuários, transações e painel de projeções financeiras. Ambiente containerizado com Docker.",
    stack: ["FastAPI", "React", "Vite", "PostgreSQL", "Docker"],
    url: "https://github.com/GuilhermeCosM/Financial-Manager",
    image: `${import.meta.env.BASE_URL}projects/financial-manager.png`,
  },
];
