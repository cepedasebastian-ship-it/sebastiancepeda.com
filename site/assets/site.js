const T = {
  en: {
    navWork:"Work", navExp:"Experience", navAbout:"About", navContact:"Contact",
    tagline:'Films, documentaries and brand stories, <em>from idea to final delivery.</em>',
    lede:"17 years across production, directing and cinematography. From feature films and documentaries to global brand productions for Porsche, FIFA, UBS, Siemens and On.",
    ctaWork:"Selected work", ctaAbout:"About me", base:"Based in Zürich · Switzerland · Working internationally",
    p1:"years in production", p2n:"1,500+", p2:"productions delivered", p3:"people led on set", p4n:"1st", p4:"Swiss feature film on Netflix",
    bizEy:"Business", bizH:"A film should not only look good. <em>It should have a job to do.</em>", bizP1:"Since 2017 I have also been running the business behind the work. At VIVEN AG I built and led an inbound-driven approach to new business, from positioning and content through client conversations and proposals to negotiation and closing. I then embedded the process in the team so it could scale beyond me.", bizP2:"That shaped how I think about production. Whether the goal is to build a brand, explain a product, attract talent or support a campaign, I look at every piece of content in the context of the marketing and business objective behind it.", workEy:"Work", workH:"Selected work", workP:"Different formats, different objectives, one production mindset.",
    bringEy:"Profile", bringH:"What I bring", bringP:"A filmmaker’s eye and a producer’s responsibility, in one person.",
    b1h:"Creative judgement", b1p:"A filmmaker’s eye, built through years of hands-on work in concept, producing, direction, cinematography, editing and colour grading.",
    b2h:"Production leadership", b2p:"Teams, budgets, suppliers, schedules and delivery, from lean crews to productions with 150 people on set.",
    b3h:"Business &amp; marketing", b3p:"Positioning, content, client acquisition, proposals, negotiation and closing, learned by running a production company and growing it to a team of 12.",
    b4h:"End-to-end ownership", b4p:"From business objective and creative concept through pre-production, shoot and post to final approval.",
    rangeEy:"Range", rangeH:"From 15 seconds to 92 minutes.", rangeP:"From social campaigns to Netflix feature films. Social, brand, product, documentary, feature.",
    l1:"<b>Reels &amp; cut-downs</b><small>Social-first edits for Porsche and Philips</small>",
    l2:"<b>Social campaigns</b><small>Multi-part campaigns built for the feed</small>",
    l3:"<b>Product &amp; how-to</b><small>On, Sensai, V-ZUG, SIGG</small>",
    l4:"<b>Brand &amp; employer-branding films</b><small>Siemens, UBS, KPMG, Stadtspital Zürich</small>",
    l5:"<b>Studio series</b><small>FIFA Living Football, 36 episodes across two seasons</small>",
    l6:"<b>Documentary</b><small>NCCR Robotics; Villa Málaga (95 min)</small>",
    l7:"<b>Feature film</b><small>Singularity, the first Swiss feature film released on Netflix</small>",
    disc:"That feature-film discipline (planned shots, tight schedules, clear priorities and no wasted time) is what I bring to every production.",
    howEy:"How I work", howH:"I start with the objective, not the format.",
    howP:"What does the content need to achieve? Everything else follows from the answer.",
    s1h:"Concept &amp; development", s1p:"Goal, audience, story and format.",
    s2h:"Producing", s2p:"Team, locations, schedule, suppliers and budget.",
    s3h:"Shoot", s3p:"Leading on set, with clear decisions and calm communication.",
    s4h:"Post &amp; delivery", s4p:"Edit, sound, colour, versions, localisation and final delivery.",
    expEy:"Experience", expH:"From camera to head of production.", expP:"17 years, three chapters.",
    y1:"2017 – present", r1:"Managing Director · Executive Producer · Head of Production",
    v1:"Leading the company across creative production, marketing and business development. Built and led an inbound-driven new business model, from positioning and lead generation through proposals, negotiation and closing, and embedded it in the team. Alongside, end-to-end productions for global brands and Swiss companies.",
    n1:"1,500+ productions", n2:"Crews up to 150 on set", n4:"In-house team of up to 12", eduEy:"Education",
    aboutEy:"About", aboutH:"The person behind the work.",
    a1:"I’m Sebastian, an Executive Producer and Creative Production Lead based in Zürich.",
    a2:"I’m an introvert by nature and an extrovert when the job calls for it. I like working with people, bringing teams together and making things happen. To recharge, I head outdoors, preferably into the mountains, hiking or taking photographs.",
    a3:"Born in Buenos Aires and living in Zürich since 2001, I’ve travelled to 50+ countries, lived in four and grew up between cultures: a third culture kid, open-minded and at home with different perspectives.",
    a4:"I’m curious by nature and love learning, through books, films, conversations and the occasional rabbit hole. I used to read 80 books a year; these days I’m less disciplined about it.",
    a5:"And I have one slightly ridiculous superpower: I can watch eight films in a day and genuinely consider it a productive weekend.",
    langs:"<b>Languages</b> · English · German · Swiss German · Spanish · French · Italian",
    handsEy:"Technical background", skillsEy:"Toolkit", skillsH:"Languages &amp; tools", h5:"Project management", h1:"Camera &amp; cinematography", h1d:"Cinema cameras · lighting · photography", h2:"Post-production", h4:"AI workflows", h4d:"Generative video · pre-visualisation · concept development",
    clientsEy:"Trusted by", cH:"Let’s talk.", cSub:"Good work starts with a good conversation.", copy:"Copy email", showMail:"Show email", showTel:"Show phone", copied:"Copied", selected:"Selected", foot:"Zürich, Switzerland", privacy:"Privacy", close:"Close", reelCap:"Moments from the projects below",
    role:"Role", scale:"Scale", award:"Award", play:"Play video"
  },
  de: {}
};
// capture German defaults from the page
document.querySelectorAll("[data-i]").forEach(el => { const k = el.dataset.i; if (!(k in T.de)) T.de[k] = el.innerHTML; });
Object.assign(T.de, {close:"Schliessen", copied:"Kopiert", selected:"Markiert", role:"Rolle", scale:"Umfang", award:"Award", play:"Video abspielen"});

const projects = [
  {v:"on-roger", c:"On", t:{de:"The Roger Kids",en:"The Roger Kids"}, f:{de:"Produktfilm",en:"Product film"}, d:{de:"Produktfilm für THE ROGER Kids, den Kinderschuh der Linie mit Roger Federer: Studioaufnahmen mit Makro-Details auf farbigen Hintergründen.",en:"Product film for THE ROGER Kids, the children’s shoe from the line created with Roger Federer: studio shots with macro details on coloured backgrounds."}, role:"Executive Producer · Producer · Director", x:"60%", y:"40%"},
  {v:"fifa", c:"FIFA", t:{de:"Living Football",en:"Living Football"}, f:{de:"Studio-Serie",en:"Studio series"}, d:{de:"Konzeption und Aufbau des gesamten technischen Studio-Setups: fünf Broadcast-Kameras, Live-Schnitt, Grafik und Livestream für die globale Serie der FIFA.",en:"Designed and built the entire technical studio setup: five broadcast cameras, live edit, graphics and live streaming for FIFA’s global series."}, role:"Executive Producer · Producer · Technical Director · Director · Editor · Colourist", scale:{de:"36 Episoden à 40 Min. · 2 Staffeln · bis zu 2 Episoden pro Tag",en:"36 episodes of 40 min · 2 seasons · up to 2 episodes a day"}, x:"70%", y:"20%"},
  {v:"ubs-gic", c:"UBS", t:{de:"Group Internal Consulting",en:"Group Internal Consulting"}, f:{de:"Employer Branding",en:"Employer branding"}, d:{de:"Humorvolle Rekrutierungskampagne: die Frustrationen externer Beratung gegenüber den Vorteilen einer internen Rolle bei der UBS. Gestaffelt lanciert auf Social Media und Website.",en:"A humorous recruitment campaign contrasting the frustrations of external consulting with an internal role at UBS. Rolled out in phases on social and web."}, role:"Executive Producer · Producer · Director · Concept", scale:{de:"Kampagne in 3 Teilen",en:"3-part campaign"}, award:{de:"Rally Awards 2021: 1. Platz Paid Social, 2. Platz Video im Recruitment Marketing",en:"Rally Awards 2021: 1st place paid social, 2nd place video in recruitment marketing"}, x:"20%", y:"80%"},
  {v:"ubs-coffee-stain", c:"UBS", t:{de:"Coffee Stain",en:"Coffee Stain"}, f:{de:"Employer Branding",en:"Employer branding"}, d:{de:"Vom Kaffeefleck am ersten Tag zur selbstbewussten Fachfrau: eine humorvolle Geschichte für die Lehrstellen der UBS.",en:"From a coffee stain on day one to a confident professional: a humorous story for UBS apprenticeships."}, role:"Executive Producer · Producer · Concept · Director", scale:{de:"Website, Social Media und Filialen",en:"Website, social media and branches"}, x:"80%", y:"60%"},
  {v:"siemens", c:"Siemens", t:{de:"Shaping the Future Together",en:"Shaping the Future Together"}, f:{de:"Employer Branding",en:"Employer branding"}, d:{de:"Multichannel-Kampagne, in der Mitarbeitende selbst die Hauptrolle spielen, ungescriptet und auf Schweizerdeutsch, zu fünf Themen: Arbeit, Diversität, Work-Life-Balance, Nachhaltigkeit und gesellschaftlicher Beitrag.",en:"A multichannel campaign with employees as the protagonists, unscripted and in Swiss German, across five themes: work, diversity, work-life balance, sustainability and social purpose."}, role:"Executive Producer", scale:{de:"121 Videos und 98 Fotos · modular für Web und Social Media",en:"121 videos and 98 photos · modular for web and social"}, x:"40%", y:"70%"},
  {v:"meteomatics", c:"Meteomatics", t:{de:"Produkt- & Markenkampagne",en:"Product & Brand Campaign"}, f:{de:"Produktfilm",en:"Product film"}, d:{de:"Fünfteilige Serie mit Drohnenaufnahmen sowie Kunden- und Mitarbeiterstimmen, gedreht an der ETH Zürich, bei BKW in Bern, bei Sunflower Labs und am Hauptsitz in St. Gallen.",en:"A five-part series with drone footage and customer and employee testimonials, shot at ETH Zürich, BKW in Bern, Sunflower Labs and the St. Gallen headquarters."}, role:"Executive Producer · Producer · Director", scale:{de:"5 Filme · Versionen à 5 Min., 2 Min. und 30 Sek. · 3 Monate vom Konzept bis zur Post",en:"5 films · 5 min, 2 min and 30 sec versions · 3 months from concept to post"}, x:"75%", y:"75%"},
  {v:"sensai", c:"Sensai", t:{de:"Cellular Performance",en:"Cellular Performance"}, f:{de:"Beauty · Anwendungsfilme",en:"Beauty · How-to films"}, d:{de:"How-to-Serie für SENSAI by Kanebo, die die Massagetechniken hinter der Pflegelinie zeigt: Casting und Set ganz auf den hochwertigen Markenauftritt abgestimmt, gedreht auf RED, für verschiedene Altersgruppen und alle Kanäle.",en:"How-to series for SENSAI by Kanebo showing the massage techniques behind the skincare line: casting and set built around the brand’s premium look, shot on RED for different age groups and every channel."}, role:"Executive Producer · Director", scale:{de:"Serie von Anwendungsfilmen · 2,5 Drehtage",en:"Series of how-to films · 2.5 shooting days"}, x:"40%", y:"30%"},
  {v:"singularity", c:"Singularity", t:{de:"Spielfilm · Netflix",en:"Feature Film · Netflix"}, f:{de:"Spielfilm · 92 Min.",en:"Feature · 92 min"}, d:{de:"Science-Fiction: In einer Zukunft, in der Roboter herrschen, sucht Calia die letzte Zuflucht der Menschen. Der erste Schweizer Spielfilm auf Netflix.",en:"Sci-fi: in a future ruled by robots, Calia searches for the last human stronghold. The first Swiss feature film released on Netflix."}, role:"Executive Producer · Producer · Director of Photography · Colourist · Screenwriter", x:"85%", y:"30%"}
];
function renderGrid(l){
  document.getElementById("grid").innerHTML = projects.map((p,i) => `
  <${p.v ? 'button type="button"' : 'div'} class="card"${p.v ? ` data-v="${p.v}" aria-label="${T[l].play}: ${p.c} · ${p.t[l]}"` : ""}>
    <div class="frame${p.v ? " has-img" : ""}" style="--x:${p.x};--y:${p.y}">
      ${p.v ? `<img src="/video/${p.v}.jpg" alt="" loading="lazy" width="1280" height="720"><video class="pv" muted loop playsinline preload="none" data-src="/video/p-${p.v}.mp4" aria-hidden="true"></video><span class="shade"></span>` : ""}
      <span class="play" aria-hidden="true"></span>
      <span class="client">${p.c}</span>
    </div>
    <h3>${p.c} · ${p.t[l]}</h3>
    <span class="meta">${p.f[l]}</span>
    <p>${p.d[l]}</p>
    <dl><dt>${T[l].role}</dt><dd>${p.role}</dd>${p.scale ? `<dt>${T[l].scale}</dt><dd>${p.scale[l]}</dd>` : ""}${p.award ? `<dt>${T[l].award}</dt><dd>${p.award[l]}</dd>` : ""}</dl>
  </${p.v ? "button" : "div"}>`).join("");
}
let lang = "de";
function setLang(l){
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i]").forEach(el => { const v = T[l][el.dataset.i]; if (v !== undefined) el.innerHTML = v; });
  document.querySelectorAll(".lang a").forEach(b => b.dataset.l === l ? b.setAttribute("aria-current", "true") : b.removeAttribute("aria-current"));
  renderGrid(l);
}
setLang(document.documentElement.lang === "en" ? "en" : "de");

document.body.dataset.acc = "olive";

const dlg = document.getElementById("player"), vid = document.getElementById("player-video");
document.getElementById("grid").addEventListener("click", e => {
  const c = e.target.closest("button.card"); if (!c) return;
  const p = projects.find(x => x.v === c.dataset.v); if (!p) return;
  document.getElementById("player-title").textContent = `${p.c} · ${p.t[lang]}`;
  document.getElementById("player-close").textContent = T[lang].close;
  vid.poster = `/video/${p.v}.jpg`;
  dlg.showModal();
  loadVideo(`/video/${p.v}/index.m3u8`).then(() => vid.play().catch(() => {}));
});
let hls = null;
const loadScript = src => new Promise((ok, no) => { if (window.Hls) return ok(); const t = document.createElement("script"); t.src = src; t.onload = ok; t.onerror = no; document.head.appendChild(t); });
async function loadVideo(src){
  if (hls) { hls.destroy(); hls = null; }
  if (vid.canPlayType("application/vnd.apple.mpegurl")) { vid.src = src; return; }
  await loadScript("/hls.light.min.js");
  if (window.Hls && Hls.isSupported()) { hls = new Hls({ capLevelToPlayerSize: true }); hls.loadSource(src); hls.attachMedia(vid); }
  else { vid.src = src; }
}
const stopVideo = () => { vid.pause(); if (hls) { hls.destroy(); hls = null; } vid.removeAttribute("src"); vid.load(); };
const closePlayer = () => { stopVideo(); if (dlg.open) dlg.close(); };
document.getElementById("player-close").addEventListener("click", closePlayer);
dlg.addEventListener("click", e => { if (e.target === dlg) closePlayer(); });
dlg.addEventListener("close", stopVideo);

const _d = a => String.fromCharCode(...a.slice().reverse().map(n => n - 7));
const _m = [116, 118, 106, 53, 115, 112, 104, 116, 110, 71, 117, 104, 112, 123, 122, 104, 105, 108, 122, 53, 104, 107, 108, 119, 108, 106], _t = [64, 59, 39, 61, 58, 39, 62, 62, 59, 39, 61, 62, 39, 56, 59, 50];
document.getElementById("show-mail").addEventListener("click", e => {
  const el = document.getElementById("mail"); el.textContent = _d(_m); el.hidden = false;
  e.currentTarget.hidden = true; document.getElementById("copy-mail").hidden = false;
});
document.getElementById("show-tel").addEventListener("click", e => {
  const el = document.getElementById("tel"); el.textContent = _d(_t); el.hidden = false; e.currentTarget.hidden = true;
});
document.getElementById("copy-mail").addEventListener("click", async (e) => {
  const btn = e.currentTarget, el = document.getElementById("mail");
  try { await navigator.clipboard.writeText(el.textContent); btn.textContent = T[lang].copied; }
  catch { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); btn.textContent = T[lang].selected; }
  setTimeout(() => btn.textContent = T[lang].copy, 1800);
});

/* ---- motion ---- */
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const touch = matchMedia("(hover: none)").matches;
  const load = v => { if (!v.getAttribute("src") && v.dataset.src) v.src = v.dataset.src; };
  const play = v => { load(v); const p = v.play(); if (p) p.then(() => v.classList.add("on")).catch(() => {}); };
  const stop = v => { v.pause(); v.classList.remove("on"); };

  // showreel: plays only while visible
  const reel = document.querySelector(".reel-v");
  if (reel && !reduce) {
    new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? play(e.target) : e.target.pause()), { threshold: 0.25 }).observe(reel);
  }

  // card previews: hover on desktop, in view on touch devices
  const grid = document.getElementById("grid");
  if (!reduce && grid) {
    if (touch) {
      const io = new IntersectionObserver(es => es.forEach(e => { const v = e.target.querySelector(".pv"); if (!v) return; e.intersectionRatio > 0.65 ? play(v) : stop(v); }), { threshold: [0, 0.65, 1] });
      grid.querySelectorAll("button.card .frame").forEach(f => io.observe(f));
    } else {
      grid.addEventListener("mouseover", e => { const c = e.target.closest("button.card"); if (c && !c.contains(e.relatedTarget)) { const v = c.querySelector(".pv"); v && play(v); } });
      grid.addEventListener("mouseout", e => { const c = e.target.closest("button.card"); if (c && !c.contains(e.relatedTarget)) { const v = c.querySelector(".pv"); v && stop(v); } });
    }
  }

  // reveal on scroll (only for things below the first screen)
  if (!reduce && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js");
    const sel = ".biz h2, .biz-cols p, .sec-head, #grid > *, .bring > *, .steps > li, .legend li, .cv > li, .about > *, .logos, .contact h2, .contact .sub, .reach, .how-head";
    const items = [...document.querySelectorAll(sel)].filter(el => el.getBoundingClientRect().top > innerHeight * 0.9);
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
    items.forEach(el => {
      const sib = el.parentElement ? [...el.parentElement.children].filter(x => items.includes(x)) : [];
      el.style.setProperty("--d", (Math.min(Math.max(sib.indexOf(el), 0), 3) * 0.08) + "s");
      el.classList.add("rv"); io.observe(el);
    });
  }

  // count-up for the key figures
  const nums = [...document.querySelectorAll(".proof b")].filter(b => /\d/.test(b.textContent));
  if (!reduce && nums.length) {
    const run = b => {
      const txt = b.textContent, n = parseInt(txt.replace(/\D/g, ""), 10), sep = (txt.match(/[’',.]/) || [""])[0], suf = txt.replace(/[\d’',.]/g, "");
      const fmt = x => (sep && x >= 1000 ? Math.floor(x / 1000) + sep + String(x % 1000).padStart(3, "0") : String(x)) + suf;
      const t0 = performance.now(), dur = 1400;
      const step = t => { const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3); b.textContent = fmt(Math.round(n * e)); if (k < 1) requestAnimationFrame(step); else b.textContent = txt; };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } }), { threshold: 0.6 });
    nums.forEach(b => io.observe(b));
  }
})();
