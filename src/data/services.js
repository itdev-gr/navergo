// Single source of truth for service ordering, slugs, i18n keys and the
// detail-page / tile image. All translatable text lives in i18n under
// `service.items.<key>` (title + description). Mirrors data/projects.js.
export const services = [
  { slug: "aluminum",           key: "01", image: "/assets/img/service/steelwork/steelwork-01.jpg" },
  { slug: "plating",            key: "02", image: "/assets/img/service/aluminum/aluminum-03.jpg" },
  { slug: "piping",             key: "03", image: "/assets/img/service/piping/piping-03.jpg" },
  { slug: "tanks",              key: "04", image: "/assets/img/service/steelwork/steelwork-04.jpg" },
  { slug: "structural",         key: "05", image: "/assets/img/service/steelwork/steelwork-02.jpg" },
  { slug: "pneumatic-hydraulic", key: "06", image: "/assets/img/service/piping/piping-engine-room.jpg" },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
