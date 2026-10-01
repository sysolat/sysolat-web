export interface MiniApp {
  id: string;
  name: string;
  subdomain: string;
  url: string;
  category: string;
  description: string;
  badge: "En Producción" | "Beta" | "Próximamente";
  features: string[];
  icon: string;
}

export const MINIAPPS: MiniApp[] = [
  {
    id: "barbers",
    name: "SySo Barbers",
    subdomain: "barbers.sysolat.com",
    url: "https://barbers.sysolat.com",
    category: "Gestión & Servicios",
    description: "Plataforma integral de gestión, reservas en tiempo real, cobros y fidelización para barberías y salones.",
    badge: "En Producción",
    features: ["Agenda Inteligente", "Control de Barberos & Comisiones", "Pagos Digitales", "Marketing Automatizado"],
    icon: "Scissors",
  },
  {
    id: "trucks",
    name: "SySo Trucks",
    subdomain: "trucks.sysolat.com",
    url: "https://trucks.sysolat.com",
    category: "Logística & Transporte",
    description: "Sistema operativo para flotas de transporte de carga, monitoreo de viajes, gastos y telemetría.",
    badge: "En Producción",
    features: ["Control de Rutas & Viáticos", "Mantenimiento Preventivo", "Gestión de Operadores", "Reportes de Rentabilidad"],
    icon: "Truck",
  },
  {
    id: "restos",
    name: "SySo Gastro",
    subdomain: "gastro.sysolat.com",
    url: "https://gastro.sysolat.com",
    category: "Hospitalidad & Alimentos",
    description: "Suite operativa para restaurantes: comandas móviles, control de mermas e inventario en tiempo real.",
    badge: "Beta",
    features: ["Comandero Digital", "Costeo de Recetas", "KDS Cocina", "Analítica de Ventas"],
    icon: "Utensils",
  },
  {
    id: "legal-doc",
    name: "SySo LegalSign",
    subdomain: "legalsign.sysolat.com",
    url: "https://legalsign.sysolat.com",
    category: "LegalTech",
    description: "Firma electrónica avanzada con validez jurídica mexicana e internacional, con bóveda digital cifrada.",
    badge: "Próximamente",
    features: ["Firma NOM-151", "Trazabilidad Criptográfica", "Plantillas de Contratos", "Alertas de Vencimiento"],
    icon: "FileCheck",
  },
];
