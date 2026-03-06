import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DSHN2woJ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/Layout_BO8RUMqX.mjs';
import { $ as $$OffreCard } from '../../../chunks/OffreCard_lOE6r84Z.mjs';
import { c as getOffres } from '../../../chunks/backend_CPnBvLOi.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$surface = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$surface;
  const { surface } = Astro2.params;
  const offres = await getOffres();
  const surfaceValue = Number(surface);
  const filteredOffres = offres.filter((offre) => Number(offre.Surface) > surfaceValue);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": `Maisons avec surface > ${surfaceValue} m\xB2` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center mb-12 mt-4"> <h1 class="text-4xl md:text-5xl font-bold mb-5 text-[#3E2723]">Maisons avec grande surface</h1> <p class="text-lg md:text-xl text-[#3E2723] mb-10 opacity-90">Liste des maisons dont la surface est supérieure à ${surfaceValue} m².</p> </section> <a href="/offres" class="bg-[#3E2723] hover:bg-[#5D4037] text-[#FAF8F3] px-6 py-3 rounded-md mb-8 inline-block transition shadow-sm">
← Retour aux offres
</a> <div class="max-w-5xl mx-auto space-y-6"> ${filteredOffres.map((offre) => renderTemplate`<div class="offre"> ${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })} </div>`)} </div> ` })}`;
}, "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/offres/surface/[surface].astro", void 0);

const $$file = "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/offres/surface/[surface].astro";
const $$url = "/offres/surface/[surface]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$surface,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
