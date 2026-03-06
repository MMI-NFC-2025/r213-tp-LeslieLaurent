import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_DSHN2woJ.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_q3XuTwm3.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/","cacheDir":"file:///C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/node_modules/.astro/","outDir":"file:///C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/dist/","srcDir":"file:///C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/","publicDir":"file:///C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/public/","buildClientDir":"file:///C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/dist/client/","buildServerDir":"file:///C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_agent_.bDoKs3ws.css"}],"routeData":{"route":"/agents/[agent]","isIndex":false,"type":"page","pattern":"^\\/agents\\/([^/]+?)\\/?$","segments":[[{"content":"agents","dynamic":false,"spread":false}],[{"content":"agent","dynamic":true,"spread":false}]],"params":["agent"],"component":"src/pages/agents/[agent].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_agent_.bDoKs3ws.css"}],"routeData":{"route":"/agents","isIndex":true,"type":"page","pattern":"^\\/agents\\/?$","segments":[[{"content":"agents","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/agents/index.astro","pathname":"/agents","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".form-group[data-astro-cid-uw5kdbxl] input[data-astro-cid-uw5kdbxl]:focus,.form-group[data-astro-cid-uw5kdbxl] textarea[data-astro-cid-uw5kdbxl]:focus,.form-group[data-astro-cid-uw5kdbxl] select[data-astro-cid-uw5kdbxl]:focus{border-color:#3e2723}.form-group[data-astro-cid-uw5kdbxl] input[data-astro-cid-uw5kdbxl].border-red-500,.form-group[data-astro-cid-uw5kdbxl] textarea[data-astro-cid-uw5kdbxl].border-red-500,.form-group[data-astro-cid-uw5kdbxl] select[data-astro-cid-uw5kdbxl].border-red-500{border-color:#dc2626}\n"},{"type":"external","src":"/_astro/_agent_.bDoKs3ws.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_agent_.bDoKs3ws.css"}],"routeData":{"route":"/offres/add","isIndex":false,"type":"page","pattern":"^\\/offres\\/add\\/?$","segments":[[{"content":"offres","dynamic":false,"spread":false}],[{"content":"add","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/offres/add.astro","pathname":"/offres/add","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_agent_.bDoKs3ws.css"}],"routeData":{"route":"/offres/surface/[surface]","isIndex":false,"type":"page","pattern":"^\\/offres\\/surface\\/([^/]+?)\\/?$","segments":[[{"content":"offres","dynamic":false,"spread":false}],[{"content":"surface","dynamic":false,"spread":false}],[{"content":"surface","dynamic":true,"spread":false}]],"params":["surface"],"component":"src/pages/offres/surface/[surface].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_agent_.bDoKs3ws.css"}],"routeData":{"route":"/offres/[id]","isIndex":false,"type":"page","pattern":"^\\/offres\\/([^/]+?)\\/?$","segments":[[{"content":"offres","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/offres/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_agent_.bDoKs3ws.css"}],"routeData":{"route":"/offres","isIndex":true,"type":"page","pattern":"^\\/offres\\/?$","segments":[[{"content":"offres","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/offres/index.astro","pathname":"/offres","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_agent_.bDoKs3ws.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/agents/[agent].astro",{"propagation":"none","containsHead":true}],["C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/agents/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/offres/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/offres/add.astro",{"propagation":"none","containsHead":true}],["C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/offres/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/offres/surface/[surface].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/agents/[agent]@_@astro":"pages/agents/_agent_.astro.mjs","\u0000@astro-page:src/pages/agents/index@_@astro":"pages/agents.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/offres/add@_@astro":"pages/offres/add.astro.mjs","\u0000@astro-page:src/pages/offres/surface/[surface]@_@astro":"pages/offres/surface/_surface_.astro.mjs","\u0000@astro-page:src/pages/offres/[id]@_@astro":"pages/offres/_id_.astro.mjs","\u0000@astro-page:src/pages/offres/index@_@astro":"pages/offres.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BdvYUFZn.mjs","C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DK_r6VI7.mjs","C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.-HmHGu5P.js","C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/offres/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.C2AbEAUn.js","C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/components/OffreCard.astro?astro&type=script&index=0&lang.ts":"_astro/OffreCard.astro_astro_type_script_index_0_lang.BD3S6Zwc.js","C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/components/header.astro?astro&type=script&index=0&lang.ts":"_astro/header.astro_astro_type_script_index_0_lang.C5ErovkP.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/contact.astro?astro&type=script&index=0&lang.ts","const c=document.getElementById(\"contact-form\"),r=document.getElementById(\"success-message\");c&&c.addEventListener(\"submit\",l=>{l.preventDefault(),document.querySelectorAll(\".error-message\").forEach(t=>{t.classList.add(\"hidden\"),t.textContent=\"\"}),document.querySelectorAll(\".form-group input, .form-group textarea, .form-group select\").forEach(t=>{t.classList.remove(\"border-red-500\")});let e=!0;const n=document.getElementById(\"nom\");(!n.value.trim()||n.value.length<2)&&(o(\"nom\",\"Le nom doit contenir au moins 2 caractères\"),e=!1);const s=document.getElementById(\"prenom\");(!s.value.trim()||s.value.length<2)&&(o(\"prenom\",\"Le prénom doit contenir au moins 2 caractères\"),e=!1);const a=document.getElementById(\"email\"),d=/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;(!a.value.trim()||!d.test(a.value))&&(o(\"email\",\"Veuillez entrer une adresse email valide\"),e=!1);const m=document.getElementById(\"telephone\"),u=/^[0-9]{10}$/;(!m.value.trim()||!u.test(m.value.replace(/\\s/g,\"\")))&&(o(\"telephone\",\"Le téléphone doit contenir 10 chiffres\"),e=!1),document.getElementById(\"sujet\").value||(o(\"sujet\",\"Veuillez sélectionner un sujet\"),e=!1);const i=document.getElementById(\"message\");if((!i.value.trim()||i.value.length<10)&&(o(\"message\",\"Le message doit contenir au moins 10 caractères\"),e=!1),document.getElementById(\"rgpd\").checked||(o(\"rgpd\",\"Vous devez accepter le traitement de vos données\"),e=!1),e)r&&(r.classList.remove(\"hidden\"),r.scrollIntoView({behavior:\"smooth\",block:\"nearest\"})),c.reset(),setTimeout(()=>{r&&r.classList.add(\"hidden\")},5e3);else{const t=document.querySelector(\".border-red-500\");t&&t.scrollIntoView({behavior:\"smooth\",block:\"center\"})}});function o(l,e){const n=document.getElementById(l),s=document.getElementById(`${l}-error`);n&&n.classList.add(\"border-red-500\"),s&&(s.textContent=e,s.classList.remove(\"hidden\"))}"],["C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/pages/offres/index.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"favori-button\");let o=!1;e?.addEventListener(\"click\",()=>{o=!o,document.querySelectorAll(\".offre\").forEach(t=>{const s=t.dataset.favori===\"true\";o?(t.style.display=s?\"block\":\"none\",e.textContent=\"Afficher tout\"):(t.style.display=\"block\",e.textContent=\"Afficher les favoris\")})});"],["C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/components/OffreCard.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\".favoriteButton\").forEach(e=>{e.addEventListener(\"click\",async()=>{const t=JSON.parse(e.dataset.offre||\"{}\"),o=!t.Favori;await fetch(`/api/favori?id=${t.id}&favori=${o}`,{method:\"POST\"});const a=e.querySelector(\"#favorite-icon\");a&&(a.style.opacity=o?\"1\":\"0.4\"),t.Favori=o,e.dataset.offre=JSON.stringify(t)})})});"],["C:/Users/Lesli/OneDrive/Documents/GitHub/r213-tp-LeslieLaurent/src/components/header.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"menu-btn\"),n=document.getElementById(\"mobile-nav\");e&&n&&e.addEventListener(\"click\",()=>{n.classList.toggle(\"hidden\"),e.classList.toggle(\"open\");const t=e.querySelectorAll(\"span\");e.classList.contains(\"open\")?(t[0].style.transform=\"rotate(45deg) translateY(8px)\",t[1].style.opacity=\"0\",t[2].style.transform=\"rotate(-45deg) translateY(-8px)\"):(t[0].style.transform=\"\",t[1].style.opacity=\"1\",t[2].style.transform=\"\")})});"]],"assets":["/_astro/_agent_.bDoKs3ws.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"+drGgsWb4jBtivKGqv0fOtOED4/+twMy8tbkmomZHpc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
