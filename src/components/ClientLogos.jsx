const CLIENTS = [
  { src: "/assets/img/clients/golden-star-ferries.jpeg", alt: "Golden Star Ferries" },
  { src: "/assets/img/clients/seagate-navigation.png", alt: "Seagate Navigation LTD" },
  { src: "/assets/img/clients/chatzigavriil.png", alt: "Chatzigavriil Salvage & Towage" },
  { src: "/assets/img/clients/mgc-maritime.png", alt: "MGC Maritime SA", invert: true },
  { src: "/assets/img/clients/neptune-lines.svg", alt: "Neptune Lines" },
  { src: "/assets/img/clients/seajets.png", alt: "Seajets" },
  { src: "/assets/img/clients/lotus-shipping.png", alt: "Lotus Shipping" },
  { src: "/assets/img/clients/dcarrier.png", alt: "D Carrier" },
];

export default function ClientLogos() {
  // Render the set twice so the -50% scroll loops seamlessly. The second copy is
  // aria-hidden so screen readers announce each client only once.
  const loop = [...CLIENTS, ...CLIENTS];
  return (
    <div className="container">
      <div className="client-marquee">
        <div className="client-marquee-track">
          {loop.map((c, i) => {
            const dup = i >= CLIENTS.length;
            return (
              <div className="client-marquee-item" key={i} aria-hidden={dup || undefined}>
                <img
                  src={c.src}
                  alt={dup ? "" : c.alt}
                  style={c.invert ? { filter: "invert(1)" } : undefined}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
