# Jawad Hameed Baloch — Portfolio v2

Rebuilt with a "systems architect / blueprint" design language: drafting-sheet frame,
schematic hero diagram, revision-history timeline, bill-of-materials skills list, and an
AI chatbot (Groq-powered) that answers visitor questions about Jawad using only his public info.

Stack: React + Vite + TypeScript + Tailwind + Framer Motion, deployed on Vercel with a
serverless function for the chatbot.

## Run locally

The chatbot needs the Vercel dev server (plain `vite` won't run the `/api` function):

```bash
npm install
npm install -g vercel   # if you don't already have it
cp .env.example .env    # then paste your Groq key into .env
vercel dev
```

If you just want the UI without the chatbot working, `npm run dev` is enough.

## Deploy (GitHub → Vercel, same as before)

1. Push this repo to GitHub (replace the contents of your existing
   `jawadhameedbaloch-portfolio` repo, or create a new one and repoint the Vercel project).
2. In the Vercel dashboard → your project → **Settings → Environment Variables**, add:
   - `GROQ_API_KEY` = your key from https://console.groq.com/keys
3. Redeploy. Vercel auto-detects the Vite frontend and the `/api/chat.ts` serverless function —
   no extra config needed.

## Editing content

Everything visitor-facing (name, bio, experience, projects, skills, links) lives in
`src/data/profile.ts`. The chatbot's knowledge is a separate copy inside `api/chat.ts`
(`SYSTEM_CONTEXT`) — serverless functions can't easily share code with the Vite app, so
**update both files when a fact changes** (new job, new project, etc).

## Security

There's no truly "confidential" data in a portfolio by design — the resume, contact info,
and projects are things you want public. The one real secret is `GROQ_API_KEY`, and it's
handled correctly: it lives only in `api/chat.ts`, runs server-side on Vercel, and is never
sent to the browser or bundled into the frontend JS. You can verify this yourself after
building — `grep -r "GROQ_API_KEY" dist/` will return nothing.

Beyond that, `api/chat.ts` has a few hardening measures baked in:
- **Origin allowlist** — only requests from `jawadhameedbaloch.com` (and localhost, for dev)
  are served. **If you deploy to a different domain or a Vercel preview URL, add it to
  `ALLOWED_ORIGINS` in `api/chat.ts` or those requests will get a 403.**
- **Rate limiting** — max 8 chatbot requests per IP per 60 seconds, to stop someone from
  spamming the endpoint and burning through your Groq quota. This is in-memory and resets
  on cold start, so it's a deterrent, not a guarantee — for stronger limits under real
  traffic, wire in Upstash Ratelimit or Vercel's Firewall rate-limiting rules.
- **Prompt-injection resistance** — the system prompt explicitly refuses to be repeated,
  overridden, or role-played around, and treats all chat messages as untrusted input.
- **Response headers** (`vercel.json`) — `X-Frame-Options`, `X-Content-Type-Options`, a
  locked-down `Permissions-Policy`, and `no-store` caching on `/api/*`.
- `.env` is git-ignored, so your local key never gets committed; only `.env.example` ships.

None of this touches your GitHub repo's visibility — the source code (including this
README) is public if your repo is public, same as before. That's normal for a portfolio;
nothing in the repo itself is a secret.

## Model note

The chatbot calls Groq's `openai/gpt-oss-120b` model. Groq deprecated
`llama-3.3-70b-versatile` and `llama-3.1-8b-instant` in June 2026 — if you were using either
of those in other projects (like ATS Resume Maker), this is the same migration you'll want
to make there too. Check https://console.groq.com/docs/models if Groq's lineup changes again.

## Structure

```
api/chat.ts              serverless chatbot endpoint (Groq)
src/data/profile.ts       all content — single source of truth for the UI
src/components/           Frame, Navbar, Hero, About, Experience, Skills, Projects,
                           Education, Contact, Footer, Chatbot, SheetHeader
public/                   resume PDF, headshot, favicon, social preview, SEO files
```
