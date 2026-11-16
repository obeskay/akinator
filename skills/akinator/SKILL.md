---
name: akinator
description: >
  Reads the user's mind with ultra-easy, one-tap questions, Akinator-style, when they are tired, stuck or vague.
  Next-step depth: scans git/TODOs, guesses what to do now and executes on one tap. Decide depth: when they are torn
  between options, a coin-flip gut check and a couple of one-tap questions, then a recommendation it acts on.
  Spec depth: turns a fuzzy idea into a complete, buildable spec through one to three rounds of simple,
  psychologist-style, via-negativa questions ("¿qué NO quieres?", everyday metaphors, pre-mortems), then builds it.
  Use it whenever the user says "tengo hueva", "no sé qué hacer", "qué sigue", "léeme la mente", "ayúdame a decidir",
  "estoy entre", "no sé cuál", "¿A o B?", "tengo una idea pero no sé", "no sé qué quiero", "hazme preguntas",
  "entrevístame", "sácame el spec", "aterriza mi idea", "what should I do", "read my mind", "should I X or Y",
  "interview me", "help me figure out what I want", "帮我决定", "/akinator", and whenever a build request is too vague
  to start and the user would rather answer than write.
---

# Akinator

Tired or stuck people can't write a good prompt, but they can tell you in a split second what they *don't* want. Akinator works with that: it never asks the user to produce, only to react, one tap per question, and keeps narrowing until it can guess what's in their head. Then it acts.

Three depths, same engine:

- **Next step**: there's work in progress and they don't know what to do now. Read the context, guess, execute. Usually zero or one question.
- **Decide**: they already have two or three options and can't pick. One short round of gut checks, a recommendation, then act on it.
- **Spec**: they have a fuzzy idea of something to build or change. One to three rounds of easy questions, then a guess that arrives together with a complete spec, then build.

Pick the depth from their words and the context. If it's genuinely unclear, make it the first question: "¿Sigues algo que ya empezaste, arrancas algo nuevo o estás entre varias opciones?"

Cards, reflections and specs go out in the user's language and register. The examples here are Mexican Spanish; translate the metaphors, the shortcut words (`ok`, `?`, `ya`) and the option labels too, don't just transliterate them.

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

Read answers generously. "la b", "b y f", "tacos", a word lifted from an option, a dictated sentence or a reply that skips questions all count: map what you can, take the default for anything left out and list it under Supuestos. Never send the card back asking them to answer properly; that's the effort this skill exists to remove.

After each round, reflect back in one line, no more, what you understood, with progress. It shows you listened, including how you read their metaphors, and lets them catch a wrong turn without being asked. Details belong in the spec, not here:

`▰▰▱▱ Va: para tu equipo, que se use desde el cel, rápido y sin adornos (taco de esquina), sin cuentas.`

## Next-step depth

1. Scan quietly, in under a minute: `git status -s`, `git log --oneline -5`, `git diff --stat`, the branch, TODO/ROADMAP/spec files, and any status or handoff note the project points to from its README, `CLAUDE.md` or `AGENTS.md` (a "next step" left by the last session is a strong hint; treat it as a lead, not an order). If `gh` or `glab` is already set up, add open PRs and the latest CI run. Skip generated noise: dependencies, build output, caches, lockfiles, logs. Outside a repo, look at what was touched most recently.
2. If the context points somewhere (uncommitted work, a failing check, an item marked in progress), skip questions and offer 3 concrete guesses, most likely first, each citing the file or item it comes from, plus "ninguna". One task per option: bundling two ("dark mode + typo fix") forces them to type what to leave out.
3. If it doesn't, ask one round of two questions, then guess:
   - "¿Con cuánta pila vienes?" poca / media / mucha → a 15-minute fix / a small feature / something deep.
   - "¿Qué se te antoja?" algo que se vea / algo por dentro / ordenar y limpiar.
4. When they pick, start working at once, with no confirmation and no preamble, and verify the result as you normally would.
5. On "ninguna", ask why, via negativa: "¿Qué falla?" no es este proyecto / no es el momento, algo más ligero / es otra parte → guess again. Only after a second miss: "Dame 3 palabras y arranco."

If their pick turns out to be something new and fuzzy, switch to spec depth.

## Decide depth

People who can't choose usually already lean one way; the questions only make the lean visible. Decide fast: one round, one recommendation, and a second round only if they reject every option.

1. **Set the options.** Name them back in one line, in their words, at most three. Four or more: the first question is a strike list down to two or three. None named ("ayúdame a decidir" and nothing else): infer two or three from the context and offer them as the first question, plus `otra`. Only one ("¿lo hago o no?"): the other option is not doing it, or not now.
2. **Read before asking.** For technical options (two libraries, two approaches), read the code, CI and docs first, and put what you found in the card's first line ("vi 2 dependencias nativas y CI en node 20"). If the evidence settles it, skip the questions and recommend with the evidence. Never ask what the context answers, reversibility included: a branch is easy to undo, a sent message or a migrated database is not.
3. **One round**, the card headed "ronda 1" with no total and the same rules as any card (letters run on across questions, never restart), the coin flip first plus one or two of the others:
   - **Coin flip**: "Lo echamos a volado y sale A. ¿Qué sientes?" alivio / decepción / me da igual. With three options, flip for the one you think they lean toward and make the strike question the second one.
   - **Strike one**: "Si tuvieras que tachar una ya, ¿cuál?"
   - **Regret**: "En un mes, ¿de cuál te arrepentirías más de no haberla elegido?"
   - **Reversibility**, only when the context can't tell: "Si sale mal, ¿se deshace?" fácil / con trabajo / no hay vuelta.
   - **What weighs most**: two criteria taken from where the options really differ (for a shop: "que venda más" / "que no te quite las tardes"), never generic ones.
4. **Weigh in this order**: the coin-flip reaction, then regret, then the strike. Reversibility and criteria only break ties. `ok` takes the option you would pick; `?` counts as "me da igual". If everything came back "me da igual", nothing weighs on them: pick the option that's cheapest to start and easiest to undo, and say so ("Nada te pesa: va A, que sale más barato probar").
5. **Recommend in one line**, with the reason taken from their answers, not from your own pros and cons: "Va B: te dio alivio que saliera y te arrepentirías de no elegirla." Always offer all three: `Dale` · `No, la otra` (`No, ¿cuál?` with three options) · `Ninguna me late`.
6. **Then act.**
   - `Dale` on something concrete you can do here: start, and verify as usual. If it's large (a migration, a rewrite), do the smallest step that's easy to undo first, on its own branch, and say what comes next.
   - `Dale` on something big or fuzzy ("abrir la tienda en línea"): go straight to spec depth, round 1, skipping what this round already answered.
   - `Dale` on keeping things as they are: say so in one line; if there's work in progress here, offer the next-step guesses for it, otherwise stop.
   - `No, la otra`: that was the answer; go with it, no questions. `No, ¿cuál?`: one tap between the ones left, then go.
   - `Ninguna me late`: there's a hidden option. Ask "¿Qué tienen las que quedan que no te late?" with options drawn from what they share, then propose a third option built to avoid it.

## Spec depth

**Round 1.** Start from this skeleton and adapt the options to their context instead of reinventing it:

1. The biggest fork: who uses it most, or where it has to live.
2. The miracle question: the core outcome.
3. The worst case: "¿Qué te chocaría más?".
4. One decontextualized question for size or feel (`references/question-bank.md` has tested ones).

**Guess as early as you can.** After every round, check what's still open. If only reversible decisions remain, stop asking and guess, even after round 1. A guess that is mostly right and arrives fast beats a perfect one after another round; `Casi` fixes the rest.

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
