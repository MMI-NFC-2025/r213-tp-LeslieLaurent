import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DSHN2woJ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BO8RUMqX.mjs';
import { $ as $$OffreCard } from '../../chunks/OffreCard_lOE6r84Z.mjs';
import { g as getAgents, a as getOffresByAgent } from '../../chunks/backend_CPnBvLOi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$agent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$agent;
  const { agent: agentId } = Astro2.params;
  const agents = await getAgents();
  const agent = agents.find((a) => a.id === agentId);
  if (!agent) {
    return Astro2.redirect("/agents");
  }
  const offres = await getOffresByAgent(agentId);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": `Offres de ${agent.prenom} ${agent.nom}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-8 px-8"> <h1 class="text-4xl font-bold text-[#3E2723] mb-2"> ${agent.prenom} ${agent.nom} </h1> <p class="text-[#3E2723] opacity-60 mb-8">${agent.email}</p> ${offres.length === 0 ? renderTemplate`<p class="text-center text-[#3E2723] opacity-50 mt-16">Aucune offre pour cet agent.</p>` : renderTemplate`<div class="grid grid-cols-1 gap-6"> ${offres.map((offre) => renderTemplate`${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })}`)} </div>`} </section> ` })}`;
}, "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/agents/[agent].astro", void 0);

const $$file = "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/agents/[agent].astro";
const $$url = "/agents/[agent]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$agent,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
