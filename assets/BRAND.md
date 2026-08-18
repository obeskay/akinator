# Brand

The name is the concept. In folklore and web history, *Akinator* is the all-knowing genie that guesses what you are thinking through a series of minimal, targeted questions.

For AI coding assistants (Claude Code, Antigravity, Codex), `akinator` is a mind-reading & zero-cognitive-load decision engine designed for developers experiencing cognitive fatigue, decision paralysis, or the universal feeling of *"tengo hueva"* (unwillingness to write extensive prompts).

The visual identity embodies this transition from fuzzy chaos to crystalline clarity: on the right, an ethereal golden-amber telepathic crystal coalesces within cosmic energy rings on deep near-black graphite (`#08080a`).

The background (`artwork.jpg`) is generated; the type is drawn over it in HTML, never baked into the image. That keeps the wordmark pixel-identical across languages and crisp at any screen density.

## Palette

| Token | Hex | Use |
|---|---|---|
| Ink | `#08080a` | Background. Near-black, never pure `#000`. |
| Paper | `#f4f2ee` | Wordmark and primary text. Warm off-white. |
| Cognitive Amber | `#f3a638` | The accent block dot, glowing telepathic crystal focal point. |
| Telepathic Aura | `#7a7db8` | Cosmic energy rings and psychic frequency currents. |
| Muted | `#c2bcb4` | Tagline. |
| Faint | `#7d776f` | Monospace footnote. |

## Wordmark

`akinator` set in Helvetica Neue Medium at `-0.045em` tracking, followed by a **drawn glowing square block**, never a typed period.

That block is a rule, not a preference. A `.` glyph changes geometry between font stacks, so drawing it as a dedicated element ensures identical visual weight across Latin, CJK, and mixed environments. The wordmark also pins its own font stack and never inherits the CJK stack used for body copy.

## Regenerating

```bash
node assets/banner.mjs build
```

Render at 2× with headless Chrome:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1200,400 --screenshot=assets/banner-en.png "file://$PWD/assets/build/banner-en.html"
```

Banners are 1200×400 (rendered at 2×). The social card is 1280×640.
