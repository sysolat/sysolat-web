export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Ecosistema", href: "/ecosystem" },
  { label: "Divisiones", href: "/divisions" },
  { label: "MiniApps", href: "/miniapps" },
  { label: "Metodología", href: "/methodology" },
  { label: "Contacto", href: "/contact" },
];

export const CTA_CONFIG = {
  label: "Agendar reunión",
  href: "/contact",
  meetingUrl: "https://sysolat.com/contact",
};

export const FOOTER_LINKS = {
  ecosystem: [
    { label: "Visión del Ecosistema", href: "/ecosystem" },
    { label: "Estructura Orbital", href: "/ecosystem#orbital" },
    { label: "Metodología de 4 Fases", href: "/methodology" },
    { label: "Marketplace MiniApps", href: "/miniapps" },
  ],
  divisions: [
    { label: "Studio", href: "https://studio.sysolat.com" },
    { label: "Imagen", href: "https://imagen.sysolat.com" },
    { label: "Eventos", href: "https://eventos.sysolat.com" },
    { label: "Jurídico", href: "https://juridico.sysolat.com" },
    { label: "Cultura", href: "https://cultura.sysolat.com" },
    { label: "Tecnología", href: "https://tecnologia.sysolat.com" },
    { label: "Infraestructura", href: "https://infraestructura.sysolat.com" },
    { label: "Inteligencia", href: "https://inteligencia.sysolat.com" },
    { label: "Capital", href: "https://capital.sysolat.com" },
    { label: "Operaciones", href: "https://operaciones.sysolat.com" },
  ],
  legal: [
    { label: "Aviso de Privacidad", href: "/privacidad" },
    { label: "Términos y Condiciones", href: "/terminos" },
    { label: "Compliance & Ética", href: "/compliance" },
  ],
};
