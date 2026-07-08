// Single source of truth for project ordering, slugs and image paths.
// All translatable text lives in i18n under `projects.items.<slug>`.
// Real photos arrive later and overwrite the same `<slug>-1/2.jpg` filenames — no code change needed.
export const projects = [
  { slug: "andros-king", images: ["/assets/img/projects/andros-king-1.jpg", "/assets/img/projects/andros-king-2.jpg", "/assets/img/projects/andros-king-4.jpg", "/assets/img/projects/andros-king-repairs.jpg"] },
  { slug: "north-star", images: ["/assets/img/projects/north-star-1.jpg", "/assets/img/projects/north-star-2.jpg"] },
  { slug: "golden-princess", images: ["/assets/img/projects/golden-princess-1.jpg", "/assets/img/projects/golden-princess-2.jpg"] },
  { slug: "laskaro", images: ["/assets/img/projects/laskaro-1.jpg", "/assets/img/projects/laskaro-2.jpg", "/assets/img/projects/laskaro-3.jpg"] },
  { slug: "anna-s", images: ["/assets/img/projects/anna-s-1.jpg", "/assets/img/projects/anna-s-2.jpg", "/assets/img/projects/anna-s-3.jpg", "/assets/img/projects/anna-s-4.jpg"] },
];

export const projectSlugs = projects.map((p) => p.slug);

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
