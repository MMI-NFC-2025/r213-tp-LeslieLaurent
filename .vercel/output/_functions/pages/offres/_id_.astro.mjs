import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_DSHN2woJ.mjs';
import 'piccolore';
import { d as getOffre } from '../../chunks/backend_3lfTKTj8.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BO8RUMqX.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const offre = await getOffre(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": offre?.Nom_maison || "D\xE9tail de l'offre" }, { "default": async ($$result2) => renderTemplate`${offre ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<h2 class="text-3xl md:text-4xl font-bold mb-8 text-[#3E2723]">${offre.Nom_maison}</h2> <ul class="space-y-3 text-lg text-[#3E2723] max-w-2xl"> <li class="pb-3 border-b border-[#D4C5B0]">Adresse : ${offre.Adresse}</li> <li class="pb-3 border-b border-[#D4C5B0]">Surface : ${offre.Surface} m²</li> <li class="pb-3 border-b border-[#D4C5B0]">Salles de bain : ${offre.nbr_SdB}</li> <li class="pb-3 border-b border-[#D4C5B0]">Chambres : ${offre.nbr_Chambres}</li> <li class="pb-3 border-b border-[#D4C5B0]">Prix : ${offre.Prix} €</li> </ul> ` })}` : renderTemplate`<p class="text-lg text-[#3E2723]">Offre introuvable.</p>`}` })}`;
}, "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/offres/[id].astro", void 0);

const $$file = "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/offres/[id].astro";
const $$url = "/offres/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
