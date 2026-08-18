import fs from 'node:fs'

const OUT = process.argv[2] || 'build'

// Background is generated artwork (assets/artwork.jpg): a glowing psychic
// crystal locus coalescing in dark graphite space. Type is drawn over it
// rather than baked into the image, so the wordmark stays identical and crisp
// in every language.
const V = {
  en: { 
    tag: 'Zero-cognitive-load mind-reading decision engine for AI assistants', 
    foot: 'context deduction · 2-click typeform triage · zero fluff' 
  },
  es: { 
    tag: 'Motor de lectura de mente y cero carga cognitiva para asistentes de código', 
    foot: 'deducción de contexto · triaje typeform en 2 clics · cero rodeos' 
  },
  zh: { 
    tag: '为 AI 编程助手打造的零认知负担意图推断引擎', 
    foot: '上下文推断 · 2步极简问卷分流 · 零废话' 
  },
}

const page = (lang, w, h) => {
  const v = V[lang]
  const big = lang === 'zh' ? 96 : 104
  const cjk = lang === 'zh'
  return `<!doctype html><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${w}px;height:${h}px;overflow:hidden}
  body{background:#08080a url("../artwork.jpg") center right/cover no-repeat;
       font-family:${cjk ? '"PingFang SC","Hiragino Sans GB","Noto Sans CJK SC",' : ''}-apple-system,"Helvetica Neue",Arial,sans-serif;
       color:#f4f2ee;display:flex;align-items:center;position:relative}
  /* Scrim: the artwork must never decide whether the type is readable. */
  body::before{content:"";position:absolute;inset:0;z-index:1;
    background:linear-gradient(90deg,#08080a 0%,rgba(8,8,10,.96) 38%,rgba(8,8,10,.68) 58%,rgba(8,8,10,.18) 78%,rgba(8,8,10,.3) 100%)}
  body::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;z-index:3;background:rgba(255,255,255,.07)}
  .wrap{position:relative;z-index:2;padding:0 ${Math.round(w * 0.066)}px;width:100%}
  /* The wordmark never inherits the CJK stack: font fallback would reshape the
     logo per language, and a logo that changes shape is not a logo. */
  h1{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:${big}px;font-weight:600;
     letter-spacing:-.045em;line-height:.95;display:flex;align-items:flex-end;gap:${Math.round(big * 0.1)}px}
  /* Drawn, not typed: a period glyph is square in one face and round in the next. */
  .dot{width:${Math.round(big * 0.19)}px;height:${Math.round(big * 0.19)}px;background:#f3a638;
       box-shadow:0 0 20px rgba(243,166,56,0.5);
       margin-bottom:${Math.round(big * 0.045)}px}
  .tag{margin-top:${Math.round(h * 0.055)}px;font-size:${cjk ? 25 : 26}px;font-weight:400;color:#c2bcb4;letter-spacing:${cjk ? '.005em' : '-.011em'}}
  .foot{margin-top:${Math.round(h * 0.075)}px;font-family:ui-monospace,"SF Mono",Menlo,monospace;font-size:15px;
        color:#7d776f;letter-spacing:.04em}
</style>
<div class="wrap">
  <h1><span>akinator</span><span class="dot"></span></h1>
  <div class="tag">${v.tag}</div>
  <div class="foot">${v.foot}</div>
</div>`
}

fs.mkdirSync(OUT, { recursive: true })
for (const lang of ['en', 'es', 'zh']) {
  fs.writeFileSync(`${OUT}/banner-${lang}.html`, page(lang, 1200, 400))
}
fs.writeFileSync(`${OUT}/social.html`, page('en', 1280, 640))
console.log('banner html generated')
