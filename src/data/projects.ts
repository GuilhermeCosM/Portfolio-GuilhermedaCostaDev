import type { Project } from "../types";

export const projects: Project[] = [
  {
    tag: "PROCON-RJ / SEDCON",
    title: "Device Register PROCON-RJ - SEDCON",
    desc: "Sistema de inventário e gestão de dispositivos construído para a equipe SEDCON. Autenticação via Spring Security, sessão gerenciada no frontend, interface com shadcn/ui.",
    stack: ["Spring Boot", "React", "TypeScript", "PostgreSQL", "shadcn/ui"],
    image: "/projects/device-register-sedcon.png",
  },
  {
    tag: "PROCON-RJ / SEDCON",
    title: "Sistema de Chamados SEDCON",
    desc: "Sistema de chamados técnicos da SEDCON/PROCON-RJ: cadastro, atualização de status, definição de prioridade, atribuição de técnico e histórico de auditoria. API REST com Node.js, Express e Prisma, consumida por app mobile em Flutter.",
    stack: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Flutter"],
    url: "https://sistema-de-chamados-sedcon.netlify.app",
    image: "/projects/sistema-chamados-sedcon.png",
  },
  {
    tag: "PROJETO PESSOAL",
    title: "Financial Manager",
    desc: "Aplicação web de finanças pessoais com sistema de login, modelagem de usuários e transações, e dashboard com projeções financeiras. Ambiente containerizado com Docker.",
    stack: ["FastAPI", "React", "Vite", "PostgreSQL", "Docker"],
    image: "/projects/financial-manager.png",
  },
];
