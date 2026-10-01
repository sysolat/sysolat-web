export interface Division {
  id: string;
  name: string;
  subdomain: string;
  url: string;
  tagline: string;
  promise: string;
  description: string;
  services: string[];
  icon: string;
  color: string;
  orbitAngle: number; // in degrees for orbital placement
}

export const DIVISIONS: Division[] = [
  {
    id: "studio",
    name: "Studio",
    subdomain: "studio.sysolat.com",
    url: "https://studio.sysolat.com",
    tagline: "Marca & Crecimiento",
    promise: "Diseñamos marcas de alto impacto y estrategias de atracción comercial continua.",
    description:
      "Transformamos el valor intangible de tu negocio en una marca de referencia a través de branding de nivel mundial, marketing de atracción y generación de demanda calificada.",
    services: ["Branding & Identidad", "Marketing Digital & Inbound", "Estrategia de Contenido", "Posicionamiento de Marca"],
    icon: "Palette",
    color: "#1E88E5",
    orbitAngle: 0,
  },
  {
    id: "imagen",
    name: "Imagen",
    subdomain: "imagen.sysolat.com",
    url: "https://imagen.sysolat.com",
    tagline: "Espacios Corporativos",
    promise: "Espacios físicos y oficinas de clase mundial diseñados para inspirar y proyectar liderazgo.",
    description:
      "Convertimos metros cuadrados en entornos corporativos funcionales, innovadores y representativos de la cultura de tu organización.",
    services: ["Remodelación Corporativa", "Interiorismo Comercial", "Diseño de Experiencia Física", "Adecuación de Oficinas"],
    icon: "Building2",
    color: "#42A5F5",
    orbitAngle: 36,
  },
  {
    id: "eventos",
    name: "Eventos",
    subdomain: "eventos.sysolat.com",
    url: "https://eventos.sysolat.com",
    tagline: "Experiencias Corporativas",
    promise: "Producción de experiencias corporativas inolvidables que conectan y consolidan relaciones.",
    description:
      "Producción integral de convenciones, lanzamientos de marca, congresos y celebraciones corporativas con estándares cinematográficos y logística impecable.",
    services: ["Eventos Corporativos", "Lanzamientos de Producto", "Producción Audiovisual", "Gestión Integral de Experiencias"],
    icon: "Sparkles",
    color: "#1E88E5",
    orbitAngle: 72,
  },
  {
    id: "proteccion",
    name: "Protección",
    subdomain: "proteccion.sysolat.com",
    url: "https://proteccion.sysolat.com",
    tagline: "Seguridad & Blindaje",
    promise: "Blindaje legal, seguridad corporativa, compliance normativo y salvaguarda patrimonial.",
    description:
      "Aseguramos la integridad de las empresas mediante estructuras societarias sólidas, contratos de alta protección, compliance normativo, ciber-resiliencia legal y protección patrimonial integral.",
    services: ["Blindaje Corporativo", "Compliance & Normatividad", "Contratos Estratégicos", "Gestión de Riesgo & Patrimonio"],
    icon: "ShieldCheck",
    color: "#42A5F5",
    orbitAngle: 108,
  },
  {
    id: "cultura",
    name: "Cultura",
    subdomain: "cultura.sysolat.com",
    url: "https://cultura.sysolat.com",
    tagline: "Personas & Liderazgo",
    promise: "Desarrollo humano y alineación organizacional para potenciar el talento clave.",
    description:
      "Impulsamos la evolución del capital humano mediante programas de liderazgo directivo, comunicación asertiva, bienestar y arquitectura de equipos de alto rendimiento.",
    services: ["Desarrollo Humano", "Desarrollo Organizacional", "Liderazgo Ejecutivo", "Comunicación Interna"],
    icon: "Users",
    color: "#1E88E5",
    orbitAngle: 144,
  },
  {
    id: "tecnologia",
    name: "Tecnología",
    subdomain: "tecnologia.sysolat.com",
    url: "https://tecnologia.sysolat.com",
    tagline: "Software & Plataformas",
    promise: "Ingeniería de software de alta gama, aplicaciones web y móviles para digitalizar tu negocio.",
    description:
      "Desarrollamos soluciones digitales a la medida: plataformas web escalables, apps móviles nativas y sistemas empresariales con arquitecturas modernas y robustas.",
    services: ["Desarrollo de Software", "Apps Móviles iOS & Android", "Portales & Plataformas Web", "Arquitectura de Software"],
    icon: "Code",
    color: "#42A5F5",
    orbitAngle: 180,
  },
  {
    id: "infraestructura",
    name: "Infraestructura",
    subdomain: "infraestructura.sysolat.com",
    url: "https://infraestructura.sysolat.com",
    tagline: "Redes & Ciberseguridad",
    promise: "Infraestructura tecnológica resiliente, servidores seguros y conectividad de misión crítica.",
    description:
      "Diseño, despliegue y mantenimiento de infraestructuras de red, centros de datos, videovigilancia inteligente y protocolos de ciberseguridad corporativa.",
    services: ["Redes Estructuradas", "Servidores & Nube Híbrida", "Videovigilancia Inteligente", "Ciberseguridad Empresarial"],
    icon: "Server",
    color: "#1E88E5",
    orbitAngle: 216,
  },
  {
    id: "inteligencia",
    name: "Inteligencia",
    subdomain: "inteligencia.sysolat.com",
    url: "https://inteligencia.sysolat.com",
    tagline: "IA & Automatización",
    promise: "Agentes autónomos de IA y automatización inteligente para multiplicar la capacidad operativa.",
    description:
      "Implementamos modelos avanzados de Inteligencia Artificial, flujos de automatización de procesos (RPA), agentes virtuales y micro-aplicaciones inteligentes para operaciones sin fricción.",
    services: ["Agentes de IA Autónomos", "Automatización de Procesos (RPA)", "Machine Learning Aplicado", "MiniApps Inteligentes"],
    icon: "Cpu",
    color: "#42A5F5",
    orbitAngle: 252,
  },
  {
    id: "capital",
    name: "Capital",
    subdomain: "capital.sysolat.com",
    url: "https://capital.sysolat.com",
    tagline: "Estrategia Financiera",
    promise: "Estructuración de capital, planeación estratégica y acceso a fondos para el crecimiento empresarial.",
    description:
      "Acompañamiento financiero de alto nivel: optimización de flujo de caja, valoración de compañías, preparación para rondas de financiamiento y fondeo de expansión.",
    services: ["Fondeo & Levantamiento de Capital", "Planeación Financiera Estratégica", "Optimización de Flujo", "Modelado de Inversión"],
    icon: "TrendingUp",
    color: "#1E88E5",
    orbitAngle: 288,
  },
  {
    id: "operaciones",
    name: "Operaciones",
    subdomain: "operaciones.sysolat.com",
    url: "https://operaciones.sysolat.com",
    tagline: "Eficiencia & Procesos",
    promise: "Optimización de procesos, tableros de control de KPIs y mejora continua para maximizar la rentabilidad.",
    description:
      "Sistematizamos y perfeccionamos las operaciones de tu empresa reduciendo costos, eliminando cuellos de botella e implantando metodologías de mejora continua.",
    services: ["Reingeniería de Procesos", "Productividad Operativa", "Dashboards & KPIs", "Mejora Continua Kaizen/Lean"],
    icon: "Settings",
    color: "#42A5F5",
    orbitAngle: 324,
  },
];
