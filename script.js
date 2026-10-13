// ============ TEXTS (4 languages) ============
const I18N = {
  es: {
    skip:"Saltar al contenido", navMain:"Principal", about:"Sobre mí", skills:"Habilidades", projects:"Proyectos", education:"Formación", contact:"Contacto",
    menuOpen:"Abrir menú", theme:"Cambiar modo oscuro", langLabel:"Idioma", avatarAlt:"Foto de Ohiosimuan Ileogben Peter",
    metaDesc:"Portfolio de Ohiosimuan Ileogben Peter, desarrollador de aplicaciones multiplataforma.",
    hello:"Hola, soy", lead:"Desarrollador de aplicaciones multiplataforma. Creo aplicaciones web con Angular, Laravel y MySQL.",
    seeWork:"Ver proyectos", email:"Correo",
    aboutP1:"Estoy terminando el Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Multiplataforma en el Institut Baix Camp, en Reus, y hago unas prácticas remotas en TalensIA, donde el equipo desarrolla una aplicación web de recursos humanos.",
    aboutP2:"Antes de dedicarme al software trabajé en hostelería, como entrenador deportivo, en ventas y dando clases particulares. Eso me enseñó a explicar las cosas con claridad, trabajar con gente y mantener la calma bajo presión. Hablo inglés (nativo), español (nivel profesional) y catalán (nivel básico-medio).",
    back:"Back end y datos", tools:"Herramientas y personales", teamwork:"Trabajo en equipo", communication:"Comunicación", trilingual:"Trilingüe",
    searchPh:"Buscar proyectos", filterLabel:"Filtrar por tecnología", all:"Todos", empty:"Ningún proyecto coincide con la búsqueda.",
    viewGithub:"Ver en GitHub", viewDemo:"Ver demo en vídeo",
    eduTitle:"Formación y certificados", dam:"CFGS Desarrollo de Aplicaciones Multiplataforma (DAM)", damMeta:"Institut Baix Camp, Reus. En curso.",
    intern:"Prácticas remotas en TalensIA", internMeta:"Angular, Laravel y MySQL en una aplicación web de recursos humanos.",
    contactText:"¿Quieres trabajar conmigo o tienes alguna pregunta? Escríbeme."
  },
  en: {
    skip:"Skip to content", navMain:"Main", about:"About", skills:"Skills", projects:"Projects", education:"Training", contact:"Contact",
    menuOpen:"Open menu", theme:"Toggle dark mode", langLabel:"Language", avatarAlt:"Photo of Ohiosimuan Ileogben Peter",
    metaDesc:"Portfolio of Ohiosimuan Ileogben Peter, multiplatform application developer.",
    hello:"Hello, I'm", lead:"Multiplatform application developer. I build web apps with Angular, Laravel and MySQL.",
    seeWork:"See my work", email:"Email",
    aboutP1:"I am completing a Higher Vocational Degree in Multiplatform Application Development at Institut Baix Camp in Reus, and I am doing a remote internship at TalensIA, where the team builds an HR web application.",
    aboutP2:"Before software I worked in hospitality, sports coaching, sales and tutoring. That taught me to explain things clearly, work with people and stay calm under pressure. I speak English (native), Spanish (professional) and Catalan (working knowledge).",
    back:"Back end and data", tools:"Tools and people", teamwork:"Teamwork", communication:"Communication", trilingual:"Trilingual",
    searchPh:"Search projects", filterLabel:"Filter by technology", all:"All", empty:"No projects match your search.",
    viewGithub:"View on GitHub", viewDemo:"Watch video demo",
    eduTitle:"Training and certificates", dam:"Higher Vocational Degree in Multiplatform Application Development (DAM)", damMeta:"Institut Baix Camp, Reus. In progress.",
    intern:"Remote internship, TalensIA", internMeta:"Angular, Laravel and MySQL on an HR web application.",
    contactText:"Want to work together or have a question? Get in touch."
  },
  ca: {
    skip:"Salta al contingut", navMain:"Principal", about:"Sobre mi", skills:"Habilitats", projects:"Projectes", education:"Formació", contact:"Contacte",
    menuOpen:"Obrir el menú", theme:"Canviar mode fosc", langLabel:"Idioma", avatarAlt:"Foto d'Ohiosimuan Ileogben Peter",
    metaDesc:"Portfoli d'Ohiosimuan Ileogben Peter, desenvolupador d'aplicacions multiplataforma.",
    hello:"Hola, sóc", lead:"Desenvolupador d'aplicacions multiplataforma. Creo aplicacions web amb Angular, Laravel i MySQL.",
    seeWork:"Veure projectes", email:"Correu",
    aboutP1:"Estic acabant el Cicle Formatiu de Grau Superior en Desenvolupament d'Aplicacions Multiplataforma a l'Institut Baix Camp, a Reus, i faig unes pràctiques remotes a TalensIA, on l'equip desenvolupa una aplicació web de recursos humans.",
    aboutP2:"Abans de dedicar-me al programari vaig treballar en hostaleria, com a entrenador esportiu, en vendes i fent classes particulars. Això em va ensenyar a explicar les coses amb claredat, treballar amb gent i mantenir la calma sota pressió. Parlo anglès (natiu), castellà (nivell professional) i català (nivell bàsic-mitjà).",
    back:"Back end i dades", tools:"Eines i habilitats personals", teamwork:"Treball en equip", communication:"Comunicació", trilingual:"Trilingüe",
    searchPh:"Cerca projectes", filterLabel:"Filtra per tecnologia", all:"Tots", empty:"Cap projecte coincideix amb la cerca.",
    viewGithub:"Veure a GitHub", viewDemo:"Veure la demo en vídeo",
    eduTitle:"Formació i certificats", dam:"CFGS Desenvolupament d'Aplicacions Multiplataforma (DAM)", damMeta:"Institut Baix Camp, Reus. En curs.",
    intern:"Pràctiques remotes a TalensIA", internMeta:"Angular, Laravel i MySQL en una aplicació web de recursos humans.",
    contactText:"Vols treballar amb mi o tens alguna pregunta? Escriu-me."
  },
  sv: {
    skip:"Hoppa till innehållet", navMain:"Huvudmeny", about:"Om mig", skills:"Färdigheter", projects:"Projekt", education:"Utbildning", contact:"Kontakt",
    menuOpen:"Öppna menyn", theme:"Växla mörkt läge", langLabel:"Språk", avatarAlt:"Foto på Ohiosimuan Ileogben Peter",
    metaDesc:"Portfolio för Ohiosimuan Ileogben Peter, utvecklare av multiplattformsapplikationer.",
    hello:"Hej, jag heter", lead:"Utvecklare av multiplattformsapplikationer. Jag bygger webbappar med Angular, Laravel och MySQL.",
    seeWork:"Se mina projekt", email:"E-post",
    aboutP1:"Jag håller på att avsluta en högre yrkesutbildning i utveckling av multiplattformsapplikationer vid Institut Baix Camp i Reus, och gör en praktik på distans hos TalensIA, där teamet bygger en webbapplikation för HR.",
    aboutP2:"Innan jag började med programvara arbetade jag inom restaurang och hotell, som idrottstränare, inom försäljning och som privatlärare. Det lärde mig att förklara saker tydligt, arbeta med människor och hålla lugnet under press. Jag talar engelska (modersmål), spanska (professionell nivå) och katalanska (grundläggande till medelgod nivå).",
    back:"Back end och data", tools:"Verktyg och personliga färdigheter", teamwork:"Samarbete", communication:"Kommunikation", trilingual:"Tre språk",
    searchPh:"Sök projekt", filterLabel:"Filtrera efter teknik", all:"Alla", empty:"Inga projekt matchar sökningen.",
    viewGithub:"Visa på GitHub", viewDemo:"Se videodemo",
    eduTitle:"Utbildning och certifikat", dam:"Högre yrkesutbildning i multiplattformsutveckling (DAM)", damMeta:"Institut Baix Camp, Reus. Pågående.",
    intern:"Praktik på distans, TalensIA", internMeta:"Angular, Laravel och MySQL i en webbapplikation för HR.",
    contactText:"Vill du arbeta tillsammans eller har du en fråga? Hör av dig."
  }
};

// ============ PROJECTS ============
// One entry per project. "t" holds [title, description] for each language.
// "link" = GitHub repo, "demo" = video or live site ("" if none).
const PROJECTS = [
  {
    tags: ["Laravel", "PHP"],
    link: "https://github.com/peterohiosimuan-max/Noir-Studio-",
    demo: "https://drive.google.com/file/d/1rt1kSw1EEH9xMW7q1CvVbntny_0GgGt1/view?usp=sharing",
    t: {
      es: ["Noir Studio (sitio web)", "Sitio web para Noir Studio desarrollado con Laravel. Incluye una demo en vídeo."],
      en: ["Noir Studio (website)", "Website for Noir Studio built with Laravel. Includes a video demo."],
      ca: ["Noir Studio (lloc web)", "Lloc web per a Noir Studio desenvolupat amb Laravel. Inclou una demo en vídeo."],
      sv: ["Noir Studio (webbplats)", "Webbplats för Noir Studio byggd med Laravel. Inkluderar en videodemo."]
    }
  },
  {
    tags: ["Java", "Maven"],
    link: "https://github.com/sulaimanryani-do/Biblioteca",
    t: {
      es: ["Biblioteca (proyecto en grupo)", "Proyecto en grupo para gestionar una biblioteca, hecho con Java y Maven. En un equipo de 5 personas creamos clases para libros, usuarios y préstamos, y documentamos el código con Javadoc."],
      en: ["Biblioteca (group project)", "Group project to manage a library, written in Java with Maven. In a team of 5 we built classes for books, users and loans, and documented the code with Javadoc."],
      ca: ["Biblioteca (projecte en grup)", "Projecte en grup per gestionar una biblioteca, fet amb Java i Maven. En un equip de 5 persones vam crear classes per a llibres, usuaris i préstecs, i vam documentar el codi amb Javadoc."],
      sv: ["Biblioteca (gruppprojekt)", "Gruppprojekt för att hantera ett bibliotek, gjort med Java och Maven. I ett team om 5 personer skapade vi klasser för böcker, användare och lån och dokumenterade koden med Javadoc."]
    }
  },
  {
    tags: ["Angular", "Laravel", "MySQL"],
    t: {
      es: ["Aplicación web de RR. HH. (prácticas en TalensIA)", "Prácticas remotas en TalensIA, donde el equipo desarrolla una aplicación web de recursos humanos con Angular, Laravel y MySQL."],
      en: ["HR web application (TalensIA internship)", "Remote internship at TalensIA, where the team builds an HR web application with Angular, Laravel and MySQL."],
      ca: ["Aplicació web de RR. HH. (pràctiques a TalensIA)", "Pràctiques remotes a TalensIA, on l'equip desenvolupa una aplicació web de recursos humans amb Angular, Laravel i MySQL."],
      sv: ["HR-webbapplikation (praktik hos TalensIA)", "Praktik på distans hos TalensIA, där teamet bygger en HR-webbapplikation med Angular, Laravel och MySQL."]
    }
  }
];

// ============ CODE ============
const $ = id => document.getElementById(id);
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const root = document.documentElement;
const tags = [...new Set(PROJECTS.flatMap(p => p.tags))];
let active = "all";
let lang = "es";

const tr = k => I18N[lang][k] || I18N.es[k] || k;

function applyLang() {
  root.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = tr(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    el.dataset.i18nAttr.split(",").forEach(pair => {
      const [attr, key] = pair.split(":");
      el.setAttribute(attr, tr(key));
    });
  });
  $("lang").value = lang;
  render();
}

function render() {
  const q = $("search").value.trim().toLowerCase();
  const names = ["all", ...tags];
  $("filters").innerHTML = names.map(t =>
    `<button type="button" aria-pressed="${t === active}" data-t="${esc(t)}">${esc(t === "all" ? tr("all") : t)}</button>`).join("");
  const list = PROJECTS.filter(p => {
    const [title, desc] = p.t[lang] || p.t.es;
    return (active === "all" || p.tags.includes(active)) &&
      (!q || (title + " " + desc + " " + p.tags.join(" ")).toLowerCase().includes(q));
  });
  $("grid").innerHTML = list.map(p => {
    const [title, desc] = p.t[lang] || p.t.es;
    const links = [p.link && `<a href="${esc(p.link)}">${esc(tr("viewGithub"))}</a>`, p.demo && `<a href="${esc(p.demo)}">${esc(tr("viewDemo"))}</a>`].filter(Boolean).join(" &middot; ");
    return `<article class="card"><h3>${esc(title)}</h3><p>${esc(desc)}</p>` +
      p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("") +
      (links ? `<p>${links}</p>` : "") + `</article>`;
  }).join("");
  $("empty").hidden = list.length > 0;
}

$("filters").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (b) { active = b.dataset.t; render(); }
});
$("search").addEventListener("input", render);

// Language (remembered in the browser; Spanish by default)
try {
  const saved = localStorage.getItem("lang");
  const browser = (navigator.language || "es").slice(0, 2);
  lang = I18N[saved] ? saved : (saved === null && I18N[browser] ? browser : "es");
} catch (e) {}
$("lang").addEventListener("change", e => {
  lang = e.target.value;
  try { localStorage.setItem("lang", lang); } catch (err) {}
  applyLang();
});

// Mobile menu
const btn = $("menu-btn"), links = $("links");
btn.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
});
links.addEventListener("click", e => {
  if (e.target.tagName === "A") { links.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
});

// Theme toggle (remembered in the browser)
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
$("theme-btn").addEventListener("click", () => {
  const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});

$("year").textContent = new Date().getFullYear();
applyLang();