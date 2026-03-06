import { c as createComponent, m as maybeRenderHead, e as renderScript, b as renderTemplate, a as createAstro, o as renderHead, r as renderComponent, p as renderSlot } from './astro/server_DSHN2woJ.mjs';
import 'piccolore';
import 'clsx';
/* empty css                           */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-[#3E2723] shadow-sm"> <div class="container mx-auto px-6 py-4 flex justify-between items-center"> <div class="text-xl font-bold text-[#FAF8F3] tracking-tight">Agence immobilières</div> <button id="menu-btn" class="md:hidden flex flex-col justify-center items-center w-10 h-10 group" aria-label="Ouvrir le menu"> <span class="block w-7 h-0.5 bg-[#FAF8F3] mb-1 transition-all duration-300"></span> <span class="block w-7 h-0.5 bg-[#FAF8F3] mb-1 transition-all duration-300"></span> <span class="block w-7 h-0.5 bg-[#FAF8F3] transition-all duration-300"></span> </button> <div class="space-x-8 hidden md:flex"> <a href="/" class="text-[#FAF8F3] hover:text-[#D4C5B0] font-medium transition">Accueil</a> <a href="/offres" class="text-[#FAF8F3] hover:text-[#D4C5B0] font-medium transition">Offres</a> <a href="/offres/add" class="text-[#FAF8F3] hover:text-[#D4C5B0] font-medium transition">Ajouter une offre</a> <a href="/agents" class="text-[#FAF8F3] hover:text-[#D4C5B0] font-medium transition">Agents</a> <a href="/contact" class="text-[#FAF8F3] hover:text-[#D4C5B0] font-medium transition">Contact</a> </div> </div> <div id="mobile-nav" class="md:hidden hidden px-6 pb-4 bg-[#3E2723]"> <a href="/" class="block py-3 text-[#FAF8F3] hover:text-[#D4C5B0] font-medium transition">Accueil</a> <a href="/offres" class="block py-3 text-[#FAF8F3] hover:text-[#D4C5B0] font-medium transition">Offres</a> <a href="/offres/add" class="block py-3 text-[#FAF8F3] hover:text-[#D4C5B0] font-medium transition">Ajouter une offre</a> <a href="/agents" class="block py-3 text-[#FAF8F3] hover:text-[#D4C5B0] font-medium transition">Agents</a> <a href="/contact" class="block py-3 text-[#FAF8F3] hover:text-[#D4C5B0] font-medium transition">Contact</a> </div> </nav> ${renderScript($$result, "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/components/header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/components/header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-16 py-8 bg-[#3E2723] text-[#FAF8F3] text-center text-sm border-t border-[#5D4037]"> <div class="font-bold text-base mb-3">Agence immobilières</div> <div class="mb-2">contact@agenceimmobiliere.fr &nbsp;|&nbsp; 01 23 45 67 89</div> <div class="mb-3">12 rue des Lilas, 69000 Lyon</div> <div class="opacity-70">© 2026 Agence immobilières. Tous droits réservés.</div> </footer>`;
}, "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { titre } = Astro2.props;
  return renderTemplate`<html lang="fr" class="min-h-full"> <head><meta charset="UTF-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><title>${titre}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="font-sans min-h-screen flex flex-col"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-1 container mx-auto px-8 py-12 max-w-7xl"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
