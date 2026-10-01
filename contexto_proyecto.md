# SYSOLAT 3.0
## Documento Técnico Maestro
### Ecosistema Integral de Soluciones Empresariales

---

# 1. RESUMEN DEL PROYECTO

## Nombre

SYSOLAT 3.0

## Dominio Principal

```text
https://sysolat.com
```

## Posicionamiento

Sysolat deja de posicionarse como una empresa de servicios y evoluciona a un:

```text
Ecosistema Integral de Soluciones Empresariales
```

o

```text
Business Ecosystem Platform
```

---

## Tagline Principal

```text
Un Ecosistema.
Todas las Soluciones.
Un Solo Aliado Estratégico.
```

---

## Propósito

Ayudar a organizaciones a:

```text
Crear

Fortalecer

Transformar

Escalar
```

mediante la integración de:

```text
Marca

Espacios

Experiencias

Protección

Personas

Tecnología

Infraestructura

Inteligencia

Capital

Operaciones
```

---

## Público Objetivo

### Empresarios

### Dueños de negocio

### Directores Generales

### CEOs

### PYMEs

### Empresas medianas

### Organizaciones en proceso de crecimiento

### Corporativos

---

## Propuesta de Valor

No vender:

```text
Marketing

Software

Consultoría

Cursos

Eventos
```

Vender:

```text
Transformación

Escalabilidad

Innovación

Productividad

Crecimiento

Rentabilidad
```

---

## Filosofía de Comunicación

Inspirada en:

```text
Microsoft

IBM Consulting

Deloitte

Accenture

Salesforce
```

---

## Estructura de Divisiones

### Studio

```text
Branding
Marketing
Inbound
```

Subdominio:

```text
studio.sysolat.com
```

---

### Imagen

```text
Remodelación
Interiorismo
Espacios corporativos
```

Subdominio:

```text
imagen.sysolat.com
```

---

### Eventos

```text
Eventos corporativos
Experiencias
Producción
```

Subdominio:

```text
eventos.sysolat.com
```

---

### Jurídico

```text
Protección empresarial
Compliance
Corporativo
```

Subdominio:

```text
juridico.sysolat.com
```

---

### Cultura

```text
Desarrollo Humano
Desarrollo Organizacional
Liderazgo
Comunicación
```

Subdominio:

```text
cultura.sysolat.com
```

---

### Tecnología

```text
Software
Apps móviles
Portales
Arquitectura
```

Subdominio:

```text
tecnologia.sysolat.com
```

---

### Infraestructura

```text
Redes
Servidores
Videovigilancia
Ciberseguridad
```

Subdominio:

```text
infraestructura.sysolat.com
```

---

### Inteligencia

```text
IA
Automatización
Agentes
MiniApps
```

Subdominio:

```text
inteligencia.sysolat.com
```

---

### Capital

```text
Fondeo
Planeación financiera
Estrategia financiera
```

Subdominio:

```text
capital.sysolat.com
```

---

### Operaciones

```text
Procesos
Productividad
KPIs
Mejora continua
```

Subdominio:

```text
operaciones.sysolat.com
```

---

## MiniApps

Actualmente existen múltiples subdominios.

Ejemplos:

```text
barbers.sysolat.com

trucks.sysolat.com
```

El sitio principal únicamente los mostrará como marketplace.

---

## Moodboard

Concepto visual:

```text
Neo Corporate Ecosystem
```

Mezcla de:

```text
Accenture
Microsoft
IBM Consulting
Deloitte
Tesla
```

Características:

```text
Oscuro premium

Glow azul

Minimalismo

Mucho espacio negativo

Fotografía cinematográfica

Glassmorphism ligero

Tipografía moderna
```

---

# 2. STACK TECNOLÓGICO Y ENTORNO

## Frontend

```text
Next.js 15

React 19

TypeScript

TailwindCSS

Framer Motion
```

---

## UI

```text
Tailwind CSS

Lucide React
```

---

## Animaciones

```text
Framer Motion

GSAP (mínimo)

Lenis Scroll
```

---

## Hosting

```text
Hostinger

Aplicación Node.js
```

Modo de despliegue:

```text
GitHub
↓
Hostinger Node.js
↓
sysolat.com
```

---

## Repositorio

```text
GitHub

sysolat-web
```

---

## Analítica

```text
Google Analytics 4

Google Search Console

Microsoft Clarity
```

---

## CRM

```text
Hubspot (gratis inicialmente)
```

---

## Base de Datos

Fase 1:

```text
No requerida
```

El sitio puede operar como:

```text
Marketing Site
```

---

# 3. ARQUITECTURA Y ESTRUCTURA DE DIRECTORIOS

```text
src
│
├── app
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   │
│   ├── ecosystem
│   │   └── page.tsx
│   │
│   ├── divisions
│   │   └── page.tsx
│   │
│   ├── miniapps
│   │   └── page.tsx
│   │
│   ├── methodology
│   │   └── page.tsx
│   │
│   ├── contact
│   │   └── page.tsx
│   │
│   └── api
│       └── contact
│           └── route.ts
│
├── components
│   │
│   ├── layout
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── mobile-menu.tsx
│   │
│   ├── sections
│   │   ├── hero.tsx
│   │   ├── challenge.tsx
│   │   ├── response.tsx
│   │   ├── divisions.tsx
│   │   ├── miniapps.tsx
│   │   ├── methodology.tsx
│   │   ├── journey.tsx
│   │   ├── comparison.tsx
│   │   ├── results.tsx
│   │   └── cta.tsx
│   │
│   ├── ecosystem
│   │   ├── orbital.tsx
│   │   ├── orbital-node.tsx
│   │   └── orbital-tooltip.tsx
│   │
│   ├── divisions
│   │   ├── division-card.tsx
│   │   └── division-modal.tsx
│   │
│   ├── miniapps
│   │   ├── miniapp-card.tsx
│   │   └── miniapp-grid.tsx
│   │
│   └── ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── modal.tsx
│       ├── badge.tsx
│       ├── divider.tsx
│       └── counter.tsx
│
├── lib
│   ├── divisions.ts
│   ├── miniapps.ts
│   ├── constants.ts
│   └── navigation.ts
│
├── public
│   │
│   ├── logos
│   ├── images
│   │   ├── hero
│   │   ├── studio
│   │   ├── imagen
│   │   ├── eventos
│   │   ├── juridico
│   │   ├── cultura
│   │   ├── tecnologia
│   │   ├── infraestructura
│   │   ├── inteligencia
│   │   ├── capital
│   │   ├── operaciones
│   │   └── miniapps
│   │
│   └── og-image.jpg
│
└── styles
```

---

# 4. SISTEMA DE DISEÑO (UI / UX)

## Concepto

```text
Neo Corporate Ecosystem
```

---

## Paleta Principal

### Azul Corporativo

```css
#1E88E5
```

---

### Azul Claro

```css
#42A5F5
```

---

### Negro Premium

```css
#111111
```

---

### Surface Dark

```css
#171A20
```

---

### Surface Elevated

```css
#21252D
```

---

### Gris Corporativo

```css
#8C8C8C
```

---

### Gris Claro

```css
#D9D9D9
```

---

### Blanco

```css
#FFFFFF
```

---

## Tipografía

### Headings

```text
Montserrat SemiBold
Montserrat Medium
```

---

### Body

```text
Inter
```

---

## Escala Tipográfica

Hero:

```css
72px
60px
48px
```

---

Heading:

```css
40px
32px
24px
```

---

Body:

```css
18px
16px
14px
```

---

## Border Radius

```css
12px
20px
32px
999px
```

---

## Sombras

```css
0 10px 30px rgba(0,0,0,.15)
```

```css
0 20px 60px rgba(0,0,0,.35)
```

```css
0 0 30px rgba(30,136,229,.4)
```

---

## Grid

Desktop

```text
12 columnas
1440px max width
```

---

Tablet

```text
8 columnas
```

---

Mobile

```text
4 columnas
```

---

## Navegación

```text
Logo

Ecosistema

Divisiones

MiniApps

Metodología

Contacto

CTA:
Agendar reunión
```

---

# 5. BASE DE CÓDIGO Y LÓGICA DESARROLLADA

## Archivo

```text
components/ui/button.tsx
```

```tsx
export function PrimaryButton({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <button
      className={`
        px-6 py-3 rounded-2xl
        bg-[#1E88E5]
        text-white
        font-medium
        transition-all duration-300
        hover:scale-[1.02]
        hover:shadow-[0_0_30px_rgba(30,136,229,.45)]
        ${className}
      `}
    >
      {children}
    </button>
  )
}
```

---

## Archivo

```text
components/layout/navbar.tsx
```

```tsx
export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto max-w-7xl px-8 py-5 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-white">
            SySo<span className="text-[#1E88E5]">Co.</span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <a>Ecosistema</a>
            <a>Divisiones</a>
            <a>MiniApps</a>
            <a>Metodología</a>
            <a>Contacto</a>
          </div>
        </div>
      </nav>
    </header>
  )
}
```

---

## Archivo

```text
components/sections/hero.tsx
```

```tsx
export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#111111]">
      <div className="absolute inset-0 bg-[url('/hero-city.jpg')] bg-cover bg-center opacity-40" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-40">

        <h1 className="text-7xl font-semibold text-white">
          Un Ecosistema.
          <br />
          <span className="text-[#1E88E5]">
            Todas las Soluciones.
          </span>
          <br />
          Un Solo Aliado Estratégico.
        </h1>

      </div>
    </section>
  )
}
```

---

## Archivo

```text
components/cards/division-card.tsx
```

```tsx
type Props = {
  title: string
  promise: string
  icon: React.ReactNode
}

export function DivisionCard({
  title,
  promise,
  icon,
}: Props) {
  return (
    <div
      className="
        group
        rounded-[28px]
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
      "
    >
      <h3>{title}</h3>
      <p>{promise}</p>
    </div>
  )
}
```

---

## Orbital Ecosystem

```tsx
const divisions = [
  "Studio",
  "Imagen",
  "Eventos",
  "Jurídico",
  "Cultura",
  "Tecnología",
  "Infraestructura",
  "Inteligencia",
  "Capital",
  "Operaciones",
]
```

---

# 6. MAPA DE RUTA Y PENDIENTES

## Completado

### Estrategia

✅ Posicionamiento

✅ Branding conceptual

✅ Arquitectura corporativa

✅ Naming divisiones

✅ Ecosistema Sysolat

---

### UX

✅ Wireframes

✅ Mapa navegación

✅ Customer Journey

✅ Orbital Ecosystem

---

### Visual

✅ Moodboard

✅ Design System

✅ Deck ejecutivo

✅ Storytelling

---

### Desarrollo

✅ Arquitectura Next.js

✅ Componentes base

✅ App Router definido

✅ Estructura de proyecto

---

## Pendiente

### PRIORIDAD 1

Construir UI final completa

```text
Home

Hero

Orbital

Divisiones

MiniApps

Footer
```

---

### PRIORIDAD 2

Crear assets visuales definitivos

```text
Fotografías

SVG

Iconografía

Fondos

OG Image
```

---

### PRIORIDAD 3

Implementar proyecto en GitHub

```text
Repositorio

Next.js

Deploy Hostinger Node.js

Dominio

Analytics

CRM
```

---

## Roadmap Recomendado

### Fase 1

```text
Home completa
```

---

### Fase 2

```text
Deploy Hostinger
```

---

### Fase 3

```text
cultura.sysolat.com

tecnologia.sysolat.com

inteligencia.sysolat.com
```

---

### Fase 4

```text
Resto de divisiones
```

---

### Fase 5

```text
Marketplace de MiniApps

apps.sysolat.com
```

---

# ESTADO ACTUAL

```text
Estratégicamente:
95% completo

Diseño:
80% completo

Desarrollo:
20% completo

Producción:
0% completo

Deploy:
0% completo
```

---

# OBJETIVO FINAL

```text
SYSOLAT

Un Ecosistema

Todas las Soluciones

Un Solo Aliado Estratégico

Personas
Tecnología
Inteligencia
Capital
Operaciones
```