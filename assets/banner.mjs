import fs from 'node:fs'

const OUT = process.argv[2] || 'build'

// Artwork (assets/artwork.jpg) is a generated, original mascot: a small
// mind-reading spirit in an amber headscarf, on the same graphite as the page.
// Type is drawn beside it rather than baked into the image, so the wordmark
// stays identical and crisp in every language.
const V = {
  en: {
    tag: 'One-tap questions for AI coding assistants when you are tired or stuck',
    foot: 'reads your context · guesses the next step · turns a fuzzy idea into a spec'
  },
  es: {
    tag: 'Preguntas de un toque para tu asistente de código cuando estás cansado o atorado',
    foot: 'lee tu contexto · adivina el siguiente paso · vuelve una idea vaga un spec'
  },
  zh: {
    tag: '累了或卡住时，用一键问答驱动你的 AI 编程助手',
    foot: '读取上下文 · 猜出下一步 · 把模糊的想法变成规格'
  },
}

const page = (lang, w, h) => {
  const v = V[lang]
  const big = lang === 'zh' ? 96 : 104
  const cjk = lang === 'zh'
  return `<!doctype html><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${w}px;height:${h}px;overflow:hidden}
  body{background:#08080a url("../artwork.jpg") right 3% center/auto 100% no-repeat;
       font-family:${cjk ? '"PingFang SC","Hiragino Sans GB","Noto Sans CJK SC",' : ''}-apple-system,"Helvetica Neue",Arial,sans-serif;
       color:#f4f2ee;display:flex;align-items:center;position:relative}
  /* Scrim: the artwork must never decide whether the type is readable. */
  body::before{content:"";position:absolute;inset:0;z-index:1;
    background:linear-gradient(90deg,#08080a 0%,#08080a 50%,rgba(8,8,10,0) 64%)}
  body::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;z-index:3;background:rgba(255,255,255,.07)}
  .wrap{position:relative;z-index:2;padding:0 ${Math.round(w * 0.066)}px;width:100%}
  /* Copy stays left of the mascot: it wraps instead of running under it. */
  .tag,.foot{max-width:${Math.round(w * 0.5)}px}
  /* The wordmark never inherits the CJK stack: font fallback would reshape the
     logo per language, and a logo that changes shape is not a logo. */
  h1{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:${big}px;font-weight:600;
     letter-spacing:-.045em;line-height:.95;display:flex;align-items:flex-end;gap:${Math.round(big * 0.1)}px}
  /* Drawn, not typed: a period glyph is square in one face and round in the next. */
  .dot{width:${Math.round(big * 0.19)}px;height:${Math.round(big * 0.19)}px;background:#f3a638;
       margin-bottom:${Math.round(big * 0.045)}px}
  .tag{margin-top:${Math.round(h * 0.055)}px;line-height:1.3;font-size:${cjk ? 25 : 26}px;font-weight:400;color:#c2bcb4;letter-spacing:${cjk ? '.005em' : '-.011em'}}
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
