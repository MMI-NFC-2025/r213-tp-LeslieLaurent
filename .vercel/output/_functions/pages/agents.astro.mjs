import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DSHN2woJ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BO8RUMqX.mjs';
import { g as getAgents } from '../chunks/backend_CPnBvLOi.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const agents = await getAgents();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Liste des Agents" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center mb-16 mt-8"> <h1 class="text-5xl md:text-6xl font-bold mb-6 text-[#3E2723]">Liste des Agents</h1> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-8"> ${agents.map((agent) => renderTemplate`<a${addAttribute("/agents/" + agent.id, "href")} class="block bg-white border border-[#D4C5B0] rounded-lg p-6 shadow-sm hover:shadow-md hover:border-[#3E2723] transition-all duration-300"> <h2 class="text-xl font-bold text-[#3E2723]">${agent.prenom} ${agent.nom}</h2> <p class="text-sm text-[#3E2723] opacity-60 mt-1">${agent.email}</p> <span class="mt-4 inline-block text-sm font-semibold text-[#3E2723] underline">
Voir les offres →
</span> </a>`)} </div> </section> ` })}`;
}, "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/agents/index.astro", void 0);

const $$file = "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/agents/index.astro";
const $$url = "/agents";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
