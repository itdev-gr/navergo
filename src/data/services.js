// Single source of truth for services that have their own detail page.
// `base` is the i18n path holding the service's `title` + `description`.
// Mirrors data/projects.js.

// Services shown in the /service page grid.
export const services = [
  { slug: "aluminum",            base: "service.items.01", image: "/assets/img/service/steelwork/steelwork-03.jpg" },
  { slug: "plating",             base: "service.items.02", image: "/assets/img/service/steelwork/steelwork-06.jpg" },
  { slug: "piping",              base: "service.items.03", image: "/assets/img/projects/laskaro-repairs-2.jpg" },
  { slug: "tanks",               base: "service.items.04", image: "/assets/img/service/steelwork/steelwork-04.jpg" },
  { slug: "structural",          base: "service.items.05", image: "/assets/img/service/steelwork/steelwork-02.jpg" },
  { slug: "pneumatic-hydraulic", base: "service.items.06", image: "/assets/img/service/piping/piping-engine-room.jpg" },
  { slug: "wear-restoration",    base: "home.services.items.07", image: "/assets/img/service/steelwork/steelwork-05.jpg" },
];

// Services that appear on the home page but not in the /service grid — they
// still get their own detail page so every service tile links somewhere
// distinct rather than all landing on one generic page.
const extraServices = [
  { slug: "metal-structure-repairs", base: "home.services.items.01", image: "/assets/img/service/steelwork/steelwork-04.jpg" },
];

export const allServices = [...services, ...extraServices];
export const serviceSlugs = allServices.map((s) => s.slug);

export function getService(slug) {
  return allServices.find((s) => s.slug === slug);
}

// Map a home.services.items key (01–07) to the matching detail-page slug.
export const homeServiceSlug = {
  "01": "metal-structure-repairs",
  "02": "plating",
  "03": "piping",
  "04": "tanks",
  "05": "structural",
  "06": "pneumatic-hydraulic",
  "07": "wear-restoration",
};
