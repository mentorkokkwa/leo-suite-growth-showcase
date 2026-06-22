# YouthMentor AI — Product Overview

## Problem

Students face exam stress and emotional pressure but often hesitate to seek help early. Generic AI chat apps can give unsafe advice without guardrails.

## Solution

YouthMentor AI provides **structured reflection** with **hard safety boundaries**:

1. Mood check-in and stress source selection
2. Six guided reflection prompts
3. Safety pipeline before any coaching response
4. Mentor-style JSON response + action plan (normal risk)
5. Crisis resources only (high risk — no coaching LLM)

## Key Features

| Feature | Description |
|---------|-------------|
| Reflection flow | Check-in → reflection → mentor response → action plan |
| Safety demo | Pre-loaded high-risk sample triggers guardrail walkthrough |
| Character chat | Scenario-based AI simulations with attribution labels |
| Privacy | Browser `localStorage` only — no account required |
| i18n | English and Chinese UI |
| Demo mode | Seeded mock responses when no API key configured |

## User Flow

```
Mood check-in → Stress source → Mentor persona → 6 reflection prompts
    → Safety pipeline → [Crisis panel | Mentor response] → Action plan
```

## What it is NOT

- Not therapy or medical advice
- Not an emergency hotline replacement
- Not official communication from any real person or faith leader

## Target Users

- Secondary school students (13–18)
- Parents exploring wellbeing tools (parent mode)
- School counsellors reviewing anonymous aggregate insights (future B2B)
