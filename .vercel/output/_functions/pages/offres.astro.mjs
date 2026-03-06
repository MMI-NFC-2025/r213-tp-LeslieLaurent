import { c as createComponent, a as createAstro, r as renderComponent, e as renderScript, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DSHN2woJ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BO8RUMqX.mjs';
import { $ as $$OffreCard } from '../chunks/OffreCard_lOE6r84Z.mjs';
import { c as getOffres, f as filterByPrix } from '../chunks/backend_CPnBvLOi.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let offres = await getOffres();
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const minPrix = parseInt(data.get("minPrix"));
    const maxPrix = parseInt(data.get("maxPrix"));
    if (minPrix > 0 && maxPrix > 0 && maxPrix > minPrix) {
      offres = await filterByPrix(minPrix, maxPrix);
      if (offres.length === 0) ;
    }
  } else {
    offres = await getOffres();
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Offres immobili\xE8res" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center mb-12 mt-4"> <h1 class="text-4xl md:text-5xl font-bold mb-5 text-[#3E2723]">Nos offres immobilières</h1> <p class="text-lg md:text-xl text-[#3E2723] mb-10 opacity-90">Appartements, maisons et locaux à vendre ou à louer.</p> <form action="/offres" method="POST" class="flex flex-col md:flex-row items-center justify-center gap-4 bg-[#F5F3EF] p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-6"> <input type="number" name="minPrix" placeholder="Prix minimum" min="0" step="1000" class="w-full md:w-40 px-4 py-2 border border-[#D4C5B0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E2723] transition"> <span class="text-[#3E2723] font-semibold">à</span> <input type="number" name="maxPrix" placeholder="Prix maximum" min="0" step="1000" class="w-full md:w-40 px-4 py-2 border border-[#D4C5B0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E2723] transition"> <input type="submit" value="Filtrer par prix" class="bg-[#3E2723] text-[#FAF8F3] px-6 py-2 rounded-md font-semibold shadow hover:bg-[#5D4037] transition cursor-pointer"> </form> </section> <div class="flex justify-center gap-4 mb-10"> <button id="favori-button" class="bg-[#3E2723] hover:bg-[#5D4037] transition rounded-md text-[#FAF8F3] px-5 py-3 font-semibold shadow-sm">Afficher les favoris</button> <a href="/offres/surface/80" class="bg-[#D4C5B0] hover:bg-[#C4B5A0] transition rounded-md text-[#3E2723] px-5 py-3 font-semibold shadow-sm">Maisons avec surface &gt; 80 m²</a> </div> <div id="offres-container" class="max-w-5xl mx-auto space-y-6"> ${offres.length === 0 && renderTemplate`<div class="text-[#3E2723] text-xl col-span-full">Aucune offre trouvée.</div>`} ${offres.map((offre) => renderTemplate`<div class="offre"${addAttribute(offre.Favori ? "true" : "false", "data-favori")}> ${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })} </div>`)} </div> <div></div> ` })} ${renderScript($$result, "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/offres/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/offres/index.astro", void 0);

const $$file = "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/offres/index.astro";
const $$url = "/offres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
