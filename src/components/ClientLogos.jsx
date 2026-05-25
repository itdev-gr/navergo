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
  return (
    <div className="container client-wrap client-grid">
      {CLIENTS.map((c, i) => (
        <a
          className="client-item"
          href="#"
          key={c.src}
          data-aos="fade-up"
          data-aos-duration={300 + i * 200}
        >
          <img
            src={c.src}
            alt={c.alt}
            style={c.invert ? { filter: "invert(1)" } : undefined}
          />
        </a>
      ))}
    </div>
  );
}
