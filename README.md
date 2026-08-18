<div align="center">

<img src="assets/banner-en.jpg" alt="akinator — Zero-cognitive-load mind-reading decision engine for AI assistants" width="100%">

Stop fighting prompt paralysis. When you are tired, overwhelmed, or have zero energy to type, Akinator reads your codebase context, runs a 2-click Typeform triage, and starts executing.

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Plugin-black)](https://code.claude.com/docs)
[![Antigravity](https://img.shields.io/badge/Antigravity-Skill-black)](https://antigravity.google)
[![Typeform Style](https://img.shields.io/badge/UI-Typeform%20Aesthetic-black)](#-the-typeform-experience)

English · [Español](README.es.md) · [中文](README.zh-CN.md)

</div>

---

## The Problem

Every developer knows the state of **cognitive exhaustion** — in Spanish, *"tener hueva"*: you sit down at the terminal after hours of context switching, you know work needs to be done, but formulating a 500-word prompt explaining the current state feels impossible.

When you give a standard AI assistant a vague prompt like *"what should I do?"* or *"continue"*, two bad things usually happen:
1. **The Interrogation Trap:** The model responds with an overwhelming 10-point numbered list and asks you 5 open-ended questions.
2. **The Hallucination Guess:** The model latches onto temporary files or random cached logs and starts fixing irrelevant code.

**Akinator solves this by changing the interaction paradigm.**

---

## How It Works

Akinator turns intent deduction into a frictionless, zero-cognitive-load pipeline:

- **Deep Context Pre-Scan:** Reads `git status`, recent commits (`git log -n 5`), active diffs, and project trackers (`TODO.md`, `ROADMAP.md`, `ESTADO.md`).
- **Strict Noise Filtering:** Automatically ignores ephemeral clutter (`.cache`, `tmp`, `node_modules`, `dist`, `build`, lockfiles) before analyzing intent.
- **2-Click Typeform Triage:** Synthesizes the exact state into clean, spaced cards (`[ 1 ]`, `[ 2 ]`, `[ 3 ]`). You only type a single number.
- **Immediate Autonomous Execution:** Once you select `1`, `2`, or `3`, Akinator skips all conversational pleasantries and starts implementing immediately.

---

## 🎨 The Typeform Experience

Instead of dense, messy walls of text, Akinator delivers high-whitespace cards engineered for zero cognitive strain:

```markdown
✨  **AKINATOR**  •  Question 1 of 2


### What domain are we tackling right now?

---


   [ 1 ]   Core Feature Work
           Implement next pending capability, API endpoints, or user flows.




   [ 2 ]   Refactoring & Code Quality
           Clean up technical debt, improve type safety, or simplify complex modules.




   [ 3 ]   Testing, Tooling & Infrastructure
           Fix failing tests, verify CI/CD pipelines, or optimize builds.


---

👉 *Reply with `1`, `2`, or `3`*
```

After your 1-character reply (e.g. `1`), Akinator presents concrete hypotheses:

```markdown
✨  **AKINATOR**  •  Question 2 of 2


### Based on your recent diffs, here is what needs to be done:

---


   [ 1 ]   Complete Authentication Middleware
           Finish the JWT verification handler started in `src/auth/guard.ts`.




   [ 2 ]   Fix Webhook Signature Validation
           Address the failing signature comparison in the Stripe webhook endpoint.




   [ 3 ]   Run Migration & Integration Suite
           Apply database schema updates and verify against the test suite.


---

👉 *Reply with `1`, `2`, or `3` to start immediately*
```

---

## How It Compares

| Feature | Akinator | Vanilla Assistant | Manual Prompting |
|---|---|---|---|
| **Cognitive Effort** | **Zero (2 keypresses)** | High (Reading walls of text) | Maximum (Typing full context) |
| **Response Friction** | `1`, `2`, or `3` | Multi-paragraph back-and-forth | Long prompt drafting |
| **Noise Filtering** | Drops temp/cache/build artifacts | Often gets misled by logs/tmp | Manual curation |
| **Execution Trigger** | **Immediate upon click 2** | Requires extra confirmation | Requires follow-up prompts |
| **Visual Layout** | Typeform-style high whitespace | Dense bullet lists | Raw chat stream |

---

## Installation

### Method 1: Claude Code Plugin (Recommended)

```
/plugin marketplace add obeskay/akinator
```
```
/plugin install akinator@akinator
```

> [!NOTE]
> Send these as two separate prompts. Start a fresh session after installation to load the plugin.

---

### Method 2: Direct Skill Installation

Clone or copy `skills/akinator/` into your skills directory:

**For Claude Code:**
```bash
git clone https://github.com/obeskay/akinator.git ~/.claude/skills/akinator
```

**For Antigravity (AGY):**
```bash
git clone https://github.com/obeskay/akinator.git ~/.gemini/config/skills/akinator
```

**For Codex / Agentic Environments:**
```bash
mkdir -p .agents/skills && cp -r /path/to/akinator/skills/akinator .agents/skills/
```

---

## Triggers & Usage

You don't need to configure commands. Simply talk naturally when you don't feel like typing:

```
tengo hueva
```
```
léceme la mente
```
```
what should I work on next?
```
```
I'm tired, take the wheel
```
```
/akinator
```

---

## Architecture

```
  ┌───────────────────────────────────────────────────────────┐
  │  Developer: "tengo hueva" / "what's next?" / "/akinator"   │
  └─────────────────────────────┬─────────────────────────────┘
                                │
                                ▼
  ┌───────────────────────────────────────────────────────────┐
  │  1. Deep Context Pre-Scan                                 │
  │     • git status -s & git log -n 5                        │
  │     • active diffs & uncommitted work                     │
  │     • TODO.md / ROADMAP.md / state trackers               │
  └─────────────────────────────┬─────────────────────────────┘
                                │
                                ▼
  ┌───────────────────────────────────────────────────────────┐
  │  2. Strict Noise Filter                                   │
  │     • Ignore: tmp/, .cache/, node_modules/, dist/, build/ │
  └─────────────────────────────┬─────────────────────────────┘
                                │
                                ▼
  ┌───────────────────────────────────────────────────────────┐
  │  3. Progressive 2-Click Typeform Triage                   │
  │     • Click 1: Macro Domain ([ 1 ], [ 2 ], [ 3 ])         │
  │     • Click 2: Concrete Action Hypotheses                 │
  └─────────────────────────────┬─────────────────────────────┘
                                │ (User types '1', '2', or '3')
                                ▼
  ┌───────────────────────────────────────────────────────────┐
  │  4. Immediate Autonomous Execution                        │
  │     • Zero conversational preamble                        │
  │     • Full production-grade implementation                │
  └───────────────────────────────────────────────────────────┘
```

---

## Contributing

Pull requests, discussions, and feature ideas are welcome. Please maintain the core design philosophy: **zero cognitive load, minimal friction, and clean aesthetics.**

---

## License

[MIT](LICENSE) © [obeskay](https://github.com/obeskay)
