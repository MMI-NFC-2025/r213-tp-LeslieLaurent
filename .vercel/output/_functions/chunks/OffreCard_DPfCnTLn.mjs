import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderScript } from './astro/server_DSHN2woJ.mjs';
import 'piccolore';
import { e as getImageUrl } from './backend_3lfTKTj8.mjs';
import { $ as $$Image } from './_astro_assets_DCTIxM9h.mjs';

const $$Astro$1 = createAstro();
const $$PbImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PbImage;
  const {
    record,
    recordImage,
    width = 400,
    height = 300
  } = Astro2.props;
  const imageURL = await getImageUrl(record, recordImage);
  return renderTemplate`${imageURL && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": imageURL, "alt": record.Nom_maison || "Image", "width": width, "height": height, "inferSize": true })}`}`;
}, "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/components/PbImage.astro", void 0);

const $$Astro = createAstro();
const $$OffreCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OffreCard;
  const { offre } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute("offre-card rounded-lg shadow-sm bg-white hover:shadow-md transition-all duration-300 overflow-hidden border border-[#D4C5B0] hover:border-[#3E2723] group " + (offre.Favori ? "ring-2 ring-[#3E2723]" : ""), "class")}${addAttribute(offre.Favori, "data-favori")}> <div class="flex flex-row h-[280px]"> <div class="w-[30%] relative overflow-hidden flex-shrink-0"> <button class="favoriteButton absolute bottom-0 left-0 p-2 text-white rounded-br-lg"${addAttribute(JSON.stringify(offre), "data-offre")}> <img id="favorite-icon"${addAttribute(offre.Favori ? "favorite_filled.png" : "favorite.png", "src")} alt="Favorite Icon" class="w-6 h-6"> </button> <img src="/src/assets/favorite.png" alt="Favori"${addAttribute(offre.Favori ? "w-10 h-10 opacity-100" : "w-10 h-10 opacity-40", "class")} style="object-fit: cover; object-position: center; display: block; margin: auto; padding: 2px;"> <div class="w-full h-full transform transition-transform duration-500 group-hover:scale-110"> ${offre.image && renderTemplate`${renderComponent($$result, "PbImage", $$PbImage, { "record": offre, "recordImage": Array.isArray(offre.image) ? offre.image[0] : offre.image, "width": 400, "height": 400 })}`} </div> </div> <div class="w-[70%] p-6 flex flex-col justify-between"> <div> <h3 class="font-bold text-2xl text-[#3E2723] mb-2">${offre.Nom_maison}</h3> <p class="text-sm text-[#3E2723] opacity-70 mb-4">📍 ${offre.Adresse}</p> <div class="flex gap-4 mb-4 text-sm text-[#3E2723]"> <div class="flex items-center gap-1.5"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path> </svg> <span class="font-medium">${offre.Surface} m²</span> </div> </div> </div> <div class="flex items-end justify-between"> <div class="text-3xl font-bold text-[#3E2723]">${offre.Prix?.toLocaleString("fr-FR")} €</div> <a${addAttribute(`/offres/${offre.id}`, "href")} class="bg-[#3E2723] hover:bg-[#5D4037] text-[#FAF8F3] px-5 py-2.5 rounded-md font-semibold transition text-sm">
Voir plus →
</a> </div> </div> </div> </div> ${renderScript($$result, "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/components/OffreCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/components/OffreCard.astro", void 0);

export { $$OffreCard as $ };
