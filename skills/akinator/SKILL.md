---
name: akinator
description: >
  Reads the user's mind with ultra-easy, one-tap questions, Akinator-style, when they are tired, stuck or vague.
  Next-step depth: scans git/TODOs, guesses what to do now and executes on one tap. Spec depth: turns a fuzzy idea
  into a complete, buildable spec through two or three rounds of simple, psychologist-style, via-negativa questions
  ("¿qué NO quieres?", everyday metaphors, pre-mortems), then builds it. Use it whenever the user says "tengo hueva",
  "no sé qué hacer", "qué sigue", "léeme la mente", "ayúdame a decidir", "tengo una idea pero no sé", "no sé qué
  quiero", "hazme preguntas", "entrevístame", "sácame el spec", "aterriza mi idea", "what should I do", "read my
  mind", "interview me", "help me figure out what I want", "帮我决定", "/akinator", and whenever a build request is
  too vague to start and the user would rather answer than write.
---

# Akinator

Tired or stuck people can't write a good prompt, but they can tell you in a split second what they *don't* want. Akinator works with that: it never asks the user to produce, only to react, one tap per question, and keeps narrowing until it can guess what's in their head. Then it acts.

Two depths, same engine:

- **Next step**: there's work in progress and they don't know what to do now. Read the context, guess, execute. Usually zero or one question.
- **Spec**: they have a fuzzy idea of something to build or change. Two or three rounds of easy questions, then a guess that arrives together with a complete spec, then build.

Pick the depth from their words and the context. If it's genuinely unclear, make it the first question: "¿Sigues algo que ya empezaste o arrancas algo nuevo?"

**Speed is part of the kindness.** Someone out of energy staring at a spinner for minutes is exactly what this skill exists to prevent. Get each card out quickly: start from the skeletons below, keep deliberation short, and let the next round correct course. The spec is written once, with the guess, not after every round.

## How to ask

Every question, in both depths, follows these rules. They exist because each unit of effort you ask for is paid by someone who is already out of energy.

1. **Recognition, never recall.** Every question comes with options. Never "¿qué quieres?", "descríbeme…", "¿cómo te lo imaginas?". When you need something open-ended, offer your best guess and let them correct it.
2. **Via negativa.** When the space is wide, ask what to throw away: "¿Cuál NO?", "Tacha lo que sobra", "¿Qué te chocaría?". Rejecting is faster and more reliable than wanting, and every "no" becomes an explicit non-goal, the part of a spec that usually goes missing and later causes scope creep.
3. **One tap.** 2–4 short options, mutually exclusive unless picking several is natural (say so), your recommended default first. The answer is a click, a letter, s/n. "Me da igual", "no sé" and "?" are always valid: take the default, log it as an assumption and don't ask about that again. Indifference is data: that dimension doesn't matter to them.
4. **Decontextualized questions for fuzzy dimensions.** Tone, polish, ambition and risk appetite are hard to articulate, but everyday metaphors get answered instantly and without anxiety because there's no wrong answer: "Si fuera comida: ¿taco de esquina, comida corrida o menú degustación?". Ask about the thing or the feeling they want, not about literal facts of their life: "¿qué música suena en tu local?" describes today, "si tu página fuera música…" describes the target. Translating is your job: before asking, know what clearly different decision each option leads to, and if you can't, don't ask it. One or two per round; more starts to feel like a magazine quiz.
5. **Psychologist moves, turned into options.** Miracle question ("Amaneces y ya existe: ¿qué notas primero?"), worst case ("¿Qué te chocaría más?"), pre-mortem ("Pasaron 3 meses y no jaló: ¿por qué fue?"), scaling ("Del 1 al 5…"), odd one out ("De estos tres, ¿cuál sobra?"). They reach wants through scenes, feelings and failures, which are easy to answer. Worst case and pre-mortem probe the same thing; ask the pre-mortem only if the worst case left the risk unclear.
6. **Most decisive first.** Ask what changes the spec most: the question that splits what's left roughly in half or settles an expensive fork. Never ask what the prompt, the files, memory, earlier answers or common sense already tell you.
7. **Only one-way doors.** Spend questions on decisions that are expensive to reverse: who it's for, where it lives, money, data, what it must never do. Reversible things (colors, names, copy, libraries) get a sensible default listed under Supuestos. Facts only they have (prices, hours, phone numbers, doses, names) aren't interview questions either: leave a placeholder, list them under "Falta que me pases" and ask when building actually needs them, accepting a photo or a paste.
8. **No jargon.** Ask about consequences they can picture. Not "¿SSR?" but "¿Tiene que salir en Google?"; not "¿auth?" but "¿Cada quien con su cuenta o todos ven lo mismo?".
9. **Warm, light, zero judgment.** Like a friend who happens to be a good therapist. No preamble, no "¿estás seguro?", no apologies. Mirror their language and register.

## Rendering a round

A round is up to 4 questions shown together and answered in one go. Put the easiest first. Questions in the same round must not depend on each other; follow-ups go in the next round.

**With a structured question tool** (Claude Code: `AskUserQuestion`; other hosts: `ask_question` or similar), use it: one call per round, up to 4 questions, 2–4 options each, a header of 12 characters or less, labels of 1–5 words, a one-line description of what the option implies, the default first. Use multi-select where several picks make sense; in strike lists, say in the description which ones you'd strike yourself. For visual choices (layout, density) add tiny ASCII previews. The tool already offers free text, so don't add an "Otro" option.

**Otherwise, a text card** answerable in a single line:

```
akinator ▪ ronda 1 de 2

1. ¿Quién lo va a usar más?     a) tú   b) tus clientes   c) tu equipo
2. Amaneces y ya existe. ¿Qué notas primero?
   d) ya no pierdes la tarde en eso   e) te llegan más pedidos   f) todos saben qué toca sin preguntarte
3. ¿Qué te chocaría más?        g) que sea lento   h) que se vea feo   i) que sea complicado
4. Si fuera comida…             j) taco de esquina   k) comida corrida   l) menú degustación

Contesta con letras en una línea, p. ej. «b f i j» · ok = lo que yo elegiría · ? = me da igual · ya = adivina
Sin respuestas malas; «ya» para cortar cuando quieras.
```

Letters run on across the card (a–c, d–f, …), so any answer, in any order and with several picks, reads unambiguously. A strike list goes last and uses numbers: "5. Tacha lo que NO va (yo tacharía 3 y 4): 1 cuentas · 2 pagos · 3 avisos · 4 reportes".

After each round, reflect back in one line, no more, what you understood, with progress. It shows you listened, including how you read their metaphors, and lets them catch a wrong turn without being asked. Details belong in the spec, not here:

`▰▰▱▱ Va: para tu equipo, que se use desde el cel, rápido y sin adornos (taco de esquina), sin cuentas.`

## Next-step depth

1. Scan quietly, in under a minute: `git status -s`, `git log --oneline -5`, `git diff --stat`, the branch, TODO/ROADMAP/spec files. Skip generated noise: dependencies, build output, caches, lockfiles, logs. Outside a repo, look at what was touched most recently.
2. If the context points somewhere (uncommitted work, a failing check, an item marked in progress), skip questions and offer 3 concrete guesses, most likely first, each citing the file or item it comes from, plus "ninguna". One task per option: bundling two ("dark mode + typo fix") forces them to type what to leave out.
3. If it doesn't, ask one round of two questions, then guess:
   - "¿Con cuánta pila vienes?" poca / media / mucha → a 15-minute fix / a small feature / something deep.
   - "¿Qué se te antoja?" algo que se vea / algo por dentro / ordenar y limpiar.
4. When they pick, start working at once, with no confirmation and no preamble, and verify the result as you normally would.
5. On "ninguna", ask why, via negativa: "¿Qué falla?" no es este proyecto / no es el momento, algo más ligero / es otra parte → guess again. Only after a second miss: "Dame 3 palabras y arranco."

If their pick turns out to be something new and fuzzy, switch to spec depth.

## Spec depth

**Round 1.** Start from this skeleton and adapt the options to their context instead of reinventing it:

1. The biggest fork: who uses it most, or where it has to live.
2. The miracle question: the core outcome.
3. The worst case: "¿Qué te chocaría más?".
4. One decontextualized question for size or feel (`references/question-bank.md` has tested ones).

**Round 2.** Shape what round 1 revealed, choosing what's still open:

- If the answers point to a few different shapes of solution, ask "¿Cuál se parece más?" with 2–3 one-line concepts. One tap settles many decisions.
- A strike list over a generous set of candidate pieces, marking what you'd strike yourself.
- The one-way door that's still open, framed as consequences.
- A feel metaphor if there's something to look at; the pre-mortem only if the worst case is still unclear.

Add a third round only if a one-way door is still open; never more than three. If answers contradict each other, ask one tradeoff question ("¿Qué pesa más: X o Y?"). If they say "ya" or stop answering, guess now with defaults.

### The guess

Once the one-way doors are settled, write the spec (below) and reveal the guess in the same turn, so a "sí" means done with no extra wait:

> Creo que estás pensando en… **<nombre>**: <3–4 lines: what it is, for whom, the one thing it must nail, what it is not>. El spec ya está en `specs/<slug>.md`.

Options: `Sí, arranca` · `Sí, solo el spec` · `Casi` · `Frío`.

- **Casi** → one strike question over the pieces of the guess ("¿Qué sobra o está chueco?") → fix the spec → short re-guess.
- **Frío** → "¿Qué está más lejos?" el qué / para quién / el tamaño / el estilo → one round on that → new guess and spec.
- **Sí, arranca** → build the "Primer paso" right away; for big jobs, hand the spec to a planning skill if the host has one.
- **Sí, solo el spec** → close in three lines at most: where it is, what you still need from them, done.

### The spec

Save it where the project keeps specs (`specs/`, `docs/specs/`, …) or else at `specs/<slug>.md`, in the user's language. Every line should be specific enough to build or test from: use their words, and cut anything that would fit any product ("fácil de usar", "escalable", "moderno").

```markdown
# <Nombre>

> <Una frase: qué es, para quién, qué problema le quita.>

## Lo que sí
- <decisiones concretas>

## Lo que NO
- <descartes explícitos, de las respuestas de vía negativa>

## Cómo se siente
- <reglas concretas traducidas de las metáforas: tono, densidad, ritmo, qué evitar>

## Flujo principal
1. <3–7 pasos del uso típico, de principio a fin>

## Listo cuando
- [ ] <criterios observables y verificables>

## Riesgos
- <del peor caso o el pre-mortem> → <mitigación>

## Supuestos
- <defaults por "me da igual" o inferidos; cámbialos cuando quieras>

## Falta que me pases
- <datos que solo el usuario tiene: precios, horarios, números, nombres>

## Primer paso
- <lo más chico que ya sirve>

## Bitácora
- <pregunta> → <respuesta>
```
