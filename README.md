# AI for Smarter Schools and Student Support — YouthMentor AI

Public portfolio showcase for **YouthMentor AI** (Leo Suite).

> Full application source is in a **private** repo deployed to Vercel. This repo contains documentation, demo links, and selected non-sensitive samples for DSA-JC portfolio review.

---

## Live Demo

| Entry | URL |
|-------|-----|
| **YouthMentor home** | https://leo-suite-growth.vercel.app/youthmentor *(replace with your Production domain)* |
| **Safety walkthrough** | `{production-domain}/youthmentor/safety-demo` |
| **Character chat** | `{production-domain}/youthmentor/characters` |
| **Vercel dashboard** | [vercel.com/cenzhi](https://vercel.com/cenzhi) |

Related Leo Suite demos:

| App | URL |
|-----|-----|
| EduLens AI | [leo-suite-edutech-showcase](https://github.com/mentorkokkwa/leo-suite-edutech-showcase) |
| CampusBot AI | https://leo-suite-robot.vercel.app/campusbot |

---

## Demo Videos

- YouthMentor AI: *(add Drive / YouTube link)*
- Safety guardrail walkthrough: *(add link)*

See [demo-videos.md](demo-videos.md) for the full list.

---

## Project Purpose

Built as a **DSA-JC Computing / AI / Leadership** portfolio piece.

YouthMentor AI is a safe digital mentor prototype for student wellbeing:

- Mood check-in and structured reflection (6 prompts)
- Mentor-style responses and action plans
- **Layered safety:** keyword scan → risk classifier → crisis-only UI (no coaching LLM on high risk)
- Character chat with scenario simulations (labeled as AI, not real persons)
- All reflection data stays in the browser (`localStorage`)

**Not** therapy, diagnosis, or emergency care.

---

## Technical Highlights

- Next.js 16, React 19, TypeScript, Tailwind CSS 4
- Multi-provider LLM abstraction with **mock fallback** for reliable demos
- Structured JSON mentor outputs
- Safety guardrails designed before coaching prompts
- i18n (English / Chinese UI)
- Freemium limits and parent-mode product thinking

---

## Documentation

| Document | Description |
|----------|-------------|
| [docs/product_overview.md](docs/product_overview.md) | Product summary |
| [docs/architecture.md](docs/architecture.md) | System design |
| [docs/demo_script.md](docs/demo_script.md) | 3-minute walkthrough script |
| [docs/safety_design.md](docs/safety_design.md) | Crisis guardrail design |
| [docs/commercial_roadmap.md](docs/commercial_roadmap.md) | Pricing and roadmap |

---

## Sample Code

Non-sensitive excerpts in [sample/](sample/) — UI components and type definitions only. API routes, prompts, and classifier logic remain private.

---

## Note

Some backend implementation details are kept private for safety, API security, and product protection. The live demo runs in **mock mode** on Vercel when no API keys are configured — suitable for school review without external API costs.

---

## Author

**Liu Cenzhi** · [github.com/mentorkokkwa](https://github.com/mentorkokkwa)

MIT License · See [LICENSE](LICENSE)
