import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DSHN2woJ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BO8RUMqX.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Accueil" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center mb-16 mt-8"> <h1 class="text-5xl md:text-6xl font-bold mb-6 text-[#3E2723]">Agence Immobilières</h1> <p class="text-lg md:text-xl text-[#3E2723] mb-12 max-w-3xl mx-auto leading-relaxed">Bienvenue sur l'agence immobilière de Lyon, votre partenaire de confiance pour trouver, vendre ou louer un bien immobilier. Découvrez nos offres exclusives et bénéficiez de l'accompagnement d'une équipe professionnelle et à l'écoute.</p> <a href="/offres" class="inline-block bg-[#3E2723] text-[#FAF8F3] px-8 py-4 rounded-md shadow-sm hover:bg-[#5D4037] transition font-semibold">Voir les offres immobilières</a> </section> ` })}`;
}, "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/index.astro", void 0);

const $$file = "C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
