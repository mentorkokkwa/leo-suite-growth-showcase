# YouthMentor AI — Safety Design

## Design goal

Prevent unsafe coaching responses when students express self-harm, suicide, or severe crisis language.

## Layered approach

| Layer | Method | Action on high risk |
|-------|--------|---------------------|
| 1 | Keyword scan | Immediate block |
| 2 | Risk classifier | Block if high_risk |
| 3 | Crisis UI | Helplines, trusted adult — **no coaching LLM** |

## What users see (high risk)

- Crisis message with regional helplines
- Instruction to talk to a trusted adult
- Safety page explaining why normal coaching was blocked
- Demo mode: `/youthmentor/safety-demo` walks through triggers

## What we never do

- Diagnose mental health conditions
- Tell users to keep secrets from adults
- Present AI character replies as official statements from real persons
- Replace professional counselling or emergency services

## Demo verification

Acceptance test for deployment:

1. Open `/youthmentor/safety-demo`
2. Use pre-loaded high-risk sample
3. Submit reflection → **Get mentor response**
4. Expect: crisis panel only, no normal mentor coaching text

## Privacy

Reflection text is processed server-side for safety classification but **not stored in a server database**. History stays in browser `localStorage`.

## Disclaimer (shown in app)

YouthMentor AI is reflective wellbeing support — not therapy, diagnosis, or emergency care.
