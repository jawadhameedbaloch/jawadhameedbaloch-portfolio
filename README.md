# Jawad Hameed Baloch — Portfolio v2

A personal portfolio website built with a **systems architect / blueprint** design language.

The design uses a drafting-sheet visual system with a schematic hero section, revision-history timeline, bill-of-materials style skills list, technical project presentation, and responsive layouts.

## Stack

* React
* Vite
* TypeScript
* Tailwind CSS
* Framer Motion
* Vercel

## Run locally

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site will be available at the local development URL shown by Vite, typically:

```text
http://localhost:5173
```

## Build for production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploy

The portfolio is designed to be deployed on Vercel.

### GitHub → Vercel

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Vercel automatically detects the Vite project.
4. Deploy the project.
5. Connect the custom domain if required.

No API keys, serverless functions, or external backend configuration are required for the portfolio.

## Editing content

Most visitor-facing portfolio information is centralized in:

```text
src/data/profile.ts
```

This file contains the portfolio's:

* Name
* Bio
* Experience
* Projects
* Skills
* Education
* Contact information
* Social links
* Other profile information

When updating personal information, projects, skills, experience, or links, update `src/data/profile.ts` first.

## Project structure

```text
src/
├── components/
│   ├── Frame
│   ├── Navbar
│   ├── Hero
│   ├── About
│   ├── Experience
│   ├── Skills
│   ├── Projects
│   ├── Education
│   ├── Contact
│   ├── Footer
│   └── SheetHeader
│
├── data/
│   └── profile.ts
│
└── ...

public/
├── resume PDF
├── headshot
├── favicon
├── social preview
└── SEO files
```

## Design direction

The portfolio follows a **technical blueprint / systems architecture** visual language rather than a conventional modern SaaS or AI-generated portfolio style.

Key design elements include:

* Drafting-sheet inspired framing
* Technical grid and blueprint details
* Schematic-style hero presentation
* Revision-history timeline
* Bill-of-materials inspired skills section
* Technical project cards
* Structured typography
* Subtle motion and transitions
* Responsive layouts
* Minimal and professional visual hierarchy

The goal is to make the portfolio feel like an engineered system rather than a generic portfolio template.

## Security

This is a frontend portfolio application and does not currently contain a backend or server-side API.

There are no confidential API keys required by the application.

The repository may be public because the source code itself does not contain private credentials or secrets.

If sensitive credentials are added in the future, they should **never** be committed directly to the repository. Use environment variables and the hosting platform's environment-variable system instead.

## Important

The current version of the portfolio **does not include an AI chatbot or Groq integration**.

There is currently:

* No `/api/chat.ts`
* No `GROQ_API_KEY`
* No Groq API integration
* No chatbot serverless function
* No chatbot-specific rate limiting
* No chatbot prompt/system context
* No AI model dependency

If an AI chatbot is added in a future version, the README should be updated to document its API, environment variables, deployment requirements, and security considerations.

## Repository

This repository contains the source code for Jawad Hameed Baloch's personal portfolio.

The portfolio is intended to showcase:

* Software engineering skills
* Generative AI and AI engineering work
* Projects
* Technical experience
* Education
* Professional background
* Contact and social profiles
