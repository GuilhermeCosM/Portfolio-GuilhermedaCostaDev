# Portfolio

Personal portfolio site — dark tech / terminal aesthetic. Built with React, TypeScript, Vite, and Tailwind CSS.

## Structure

```
src/
  components/     Reusable UI pieces (Nav, SectionEyebrow, ViaDot)
  sections/       One file per page section (Hero, Sobre, Projetos, Skills, Formacao, Contato, Footer)
  data/           Content as data (projects, skills, boot sequence lines) — edit here, not in components
  hooks/          useTypewriter (hero terminal animation)
  types.ts        Shared TypeScript interfaces
  App.tsx         Composes all sections
  main.tsx        React entry point
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Before deploying

- Update the email and social links in `src/sections/Contato.tsx`
- Edit your projects in `src/data/projects.ts`
- Edit your skills in `src/data/skills.ts`
- Edit the terminal boot lines in `src/data/bootLines.ts`

## Build

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages.
