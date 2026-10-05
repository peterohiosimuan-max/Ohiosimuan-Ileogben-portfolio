// EDITA AQUÍ: una entrada por proyecto. "link" puede ser un repo de GitHub o una demo, o "" si no hay.
const PROJECTS = [
  {
    title: "Aplicación web de RR. HH. (prácticas en TalensIA)",
    desc: "Prácticas remotas en una plataforma de recursos humanos. Añade las partes en las que trabajaste, por ejemplo pantallas, endpoints de la API o tablas de la base de datos.",
    tags: ["Angular", "Laravel", "MySQL"],
    link: ""
  },
  {
    title: "Proyecto Laravel (cámbiame el nombre)",
    desc: "Explica qué hace y qué aprendiste. Sube el código a GitHub y pega aquí el enlace del repositorio.",
    tags: ["Laravel", "PHP", "MySQL"],
    link: ""
  }
];

const $ = id => document.getElementById(id);
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tags = ["Todos", ...new Set(PROJECTS.flatMap(p => p.tags))];
let active = "Todos";

function render() {
  const q = $("search").value.trim().toLowerCase();
  $("filters").innerHTML = tags.map(t =>
    `<button type="button" aria-pressed="${t === active}" data-t="${esc(t)}">${esc(t)}</button>`).join("");
  const list = PROJECTS.filter(p =>
    (active === "Todos" || p.tags.includes(active)) &&
    (!q || (p.title + " " + p.desc + " " + p.tags.join(" ")).toLowerCase().includes(q)));
  $("grid").innerHTML = list.map(p =>
    `<article class="card"><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>` +
    p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("") +
    (p.link ? `<p><a href="${esc(p.link)}">Ver en GitHub</a></p>` : "") + `</article>`).join("");
  $("empty").hidden = list.length > 0;
}
$("filters").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (b) { active = b.dataset.t; render(); }
});
$("search").addEventListener("input", render);
render();

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
const root = document.documentElement;
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
$("theme-btn").addEventListener("click", () => {
  const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});

$("year").textContent = new Date().getFullYear();
