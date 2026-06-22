# YouthMentor AI — Architecture

## System overview

```mermaid
flowchart LR
  UI[React UI /youthmentor/*] --> API[Next.js API Routes]
  API --> SVC[YouthMentor Service]
  SVC --> SAFETY[Safety Pipeline]
  SAFETY -->|normal| LLM[LLM Provider Chain]
  SAFETY -->|high_risk| CRISIS[Crisis Response]
  LLM --> MOCK[Mock Fallback]
  SVC --> STORE[Browser localStorage]
```

## Safety pipeline

```mermaid
flowchart TD
  IN[User text] --> KW[Keyword scan]
  KW -->|high_risk| BLOCK[Crisis panel only]
  KW -->|watch / normal| CLS[Risk classifier]
  CLS -->|high_risk| BLOCK
  CLS -->|normal| MENTOR[Structured mentor JSON]
  MENTOR --> PLAN[Action plan]
  BLOCK --> RES[Crisis resources + helplines]
```

**Design principle:** Never rely on LLM alone for safety. Keyword layer runs first; high-risk blocks before any coaching prompt.

## AI provider layer

Uses shared `EDULENS_*` environment variables for LLM configuration:

| Mode | Behavior |
|------|----------|
| `mock` | Seeded demo responses — no external API |
| `auto` | Provider chain: Groq → Gemini → OpenRouter → … |
| `gemini` / `groq` | Single provider |

Configured via Vercel environment variables (never in git).

## Character chat

```mermaid
flowchart LR
  MSG[User message] --> LIM[Usage limits]
  LIM --> RAG[Knowledge chunk search]
  RAG --> MEM[Memory summary]
  MEM --> LLM[Character prompt]
  LLM --> OUT[Reply + AI attribution]
```

## Deployment

| Component | Location |
|-----------|----------|
| Source (private) | `mentorkokkwa/leo-suite-growth` |
| Vercel project | `leo-suite-growth` @ vercel.com/cenzhi |
| Public docs | `mentorkokkwa/leo-suite-growth-showcase` |

Root directory: `.` (repo root is the Next.js app).

## Data & privacy

| Data | Storage | Server DB |
|------|---------|-----------|
| Reflections, mood | `localStorage` | None |
| Character memory | `localStorage` | None |
| LLM requests | Transient API call | Not persisted |

## Tech stack

- Next.js 16 (App Router)
- React 19, TypeScript
- Tailwind CSS 4
- Multi-provider LLM abstraction
