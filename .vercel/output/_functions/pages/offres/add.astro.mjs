import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DSHN2woJ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BO8RUMqX.mjs';
import { b as addOffre } from '../../chunks/backend_CPnBvLOi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  let message = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const response = await addOffre(formData);
    message = response.message;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Ajouter une offre" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col items-center justify-center min-h-[60vh]"> <h1 class="text-3xl md:text-4xl font-bold mb-6 text-[#3E2723] text-center">Ajouter une offre</h1> ${message && renderTemplate`<div class="bg-green-50 text-green-800 border border-green-200 px-6 py-3 rounded-md mb-6 text-center font-medium max-w-md w-full"> ${message === "Offre ajout\xE9e avec succ\xE8s" || message === "Offre ajoutee avec succes" ? "L'offre a bien \xE9t\xE9 ajout\xE9e !" : message} </div>`} <form action="/offres/add" method="POST" enctype="multipart/form-data" class="bg-[#F5F3EF] w-full max-w-md p-8 rounded-lg shadow-md flex flex-col gap-4"> <input type="text" name="Nom_maison" placeholder="Nom de la maison" required class="w-full px-4 py-2 border border-[#D4C5B0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E2723] transition"> <input type="number" name="Prix" placeholder="Prix" min="0" step="1000" class="w-full px-4 py-2 border border-[#D4C5B0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E2723] transition"> <input type="number" name="nbr-SdB" placeholder="Nombre de salles de bain" min="0" class="w-full px-4 py-2 border border-[#D4C5B0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E2723] transition"> <input type="number" name="nbr_chambres" placeholder="Nombre de chambres" min="0" class="w-full px-4 py-2 border border-[#D4C5B0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E2723] transition"> <input type="number" name="Surface" placeholder="Superficie" min="0" class="w-full px-4 py-2 border border-[#D4C5B0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E2723] transition"> <input type="file" name="image" class="w-full px-4 py-2 border border-[#D4C5B0] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#3E2723] transition"> <button type="submit" class="bg-[#3E2723] text-[#FAF8F3] px-6 py-2 rounded-md font-semibold shadow hover:bg-[#5D4037] transition mt-2">Ajouter</button> </form> </section> ` })}`;
}, "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/offres/add.astro", void 0);

const $$file = "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/offres/add.astro";
const $$url = "/offres/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Add,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
