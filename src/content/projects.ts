export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly stack: readonly string[];
  readonly metrics?: string;
  readonly links: { live?: string; repo?: string };
}

// export const projects: readonly Project[] = [
//   {
//     slug: "mycadillac",
//     title: "MyCadillac — General Motors",
//     summary:
//       "Native iOS & Android companion app redesign for Cadillac owners, with BLE vehicle-to-phone connectivity for remote vehicle features.",
//     stack: ["Kotlin", "Swift", "Jetpack Compose", "BLE", "GraphQL", "MVVM"],
//     metrics: "Shipped across 4 GM brand apps · MVP→MVVM migration",
//     links: { live: "https://apps.apple.com/us/app/mycadillac/id398605251" },
//   },
//   {
//     slug: "universal-music-artists",
//     title: "Universal Music Artists",
//     summary:
//       "Music management app for Universal's artists and admins — single React Native codebase for iOS and Android, backed by a Node.js/PostgreSQL API I also lead.",
//     stack: [
//       "React Native",
//       "TypeScript",
//       "Expo",
//       "Node.js",
//       "PostgreSQL",
//       "GraphQL",
//     ],
//     metrics: "Full-stack ownership · REST + GraphQL · RBAC auth",
//     links: {
//       live: "https://apps.apple.com/us/app/universal-music-artists/id1476850673",
//     },
//   },
//   {
//     slug: "nexstar-news-platform",
//     title: "White-Label News Platform — Nexstar",
//     summary:
//       "One React Native codebase deployed as many branded local-news apps, with scripted generation of per-brand configs, assets, and signing keys.",
//     stack: ["React Native", "Redux", "Kotlin", "Jest"],
//     metrics: "1 codebase → multiple branded apps in production",
//     links: {
//       live: "https://play.google.com/store/apps/details?id=com.kxan.android.weather",
//     },
//   },
//   {
//     slug: "clover-companion",
//     title: "Clover Companion — Payments",
//     summary:
//       "Native Android payment and inventory app communicating with card readers over BLE, built with strict offline-safe data handling.",
//     stack: ["Kotlin", "Java", "RxJava", "Room", "BLE", "Dagger2"],
//     metrics: "Production payment hardware integration",
//     links: {
//       live: "https://play.google.com/store/apps/details?id=clover.companion.app",
//     },
//   },
//   {
//     slug: "uma-admin-dashboard",
//     title: "Artist Admin Dashboard",
//     summary:
//       "React web dashboard for label admins to manage artist rosters and content, sharing the GraphQL API with the mobile app.",
//     stack: ["React", "TypeScript", "TanStack Query", "GraphQL"],
//     links: {
//       live: "https://artists.umusic.com/",
//     },
//   },
// ];

export const projects: readonly Project[] = [
  {
    slug: "mycadillac",
    title: "MyCadillac — General Motors",
    summary:
      "Rediseño de aplicación nativa iOS y Android para dueños de autos Cadillac, con conectividad vehículo a teléfono BLE para características remotas para vehículos.",
    stack: ["Kotlin", "Swift", "Jetpack Compose", "BLE", "GraphQL", "MVVM"],
    metrics:
      "Lanzado a través de 4 aplicaciones de marcas de GM · Migración MVP → MVVM",
    links: { live: "https://apps.apple.com/us/app/mycadillac/id398605251" },
  },
  {
    slug: "universal-music-artists",
    title: "Universal Music Artists",
    summary:
      "Aplicación de administración de música para artistas y managers de Universal - Base de código unificada en React Native para iOS y Android, respaldada por una API NodeJS/PostgreSQL que también dirigí.",
    stack: [
      "React Native",
      "TypeScript",
      "Expo",
      "Node.js",
      "PostgreSQL",
      "GraphQL",
    ],
    metrics:
      "Rol propietario Full Stack · REST + GraphQL · Autentificación RBAC",
    links: {
      live: "https://apps.apple.com/us/app/universal-music-artists/id1476850673",
    },
  },
  {
    slug: "nexstar-news-platform",
    title: "Plataforma de Noticias White-Label — Nexstar",
    summary:
      "Base de código unificada React Native desplegada como múltiples mini apps de noticias locales, con generación automatizada de contenido por marca, multimedia y claves.",
    stack: ["React Native", "Redux", "Kotlin", "Jest"],
    metrics: "1 base de código → mútliples apps brandeadas en producción",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.kxan.android.weather",
    },
  },
  {
    slug: "clover-companion",
    title: "Clover Companion — Pagos",
    summary:
      "App nativa de Android para pagos e inventario, capaz de comunicarse con lectores de tarjetas usando BLE y NFC, construida con estricto manejo de datos fuera de línea",
    stack: ["Kotlin", "Java", "RxJava", "Room", "BLE", "Dagger2"],
    metrics: "Integración de hardware de pagos en producción",
    links: {
      live: "https://play.google.com/store/apps/details?id=clover.companion.app",
    },
  },
  {
    slug: "uma-admin-dashboard",
    title: "Panel de Administrador de Artista",
    summary:
      "Panel de administrador web de React para managers de artistas para administrar listados y contenido, compartiendo API GraphQL con la app nativa.",
    stack: ["React", "TypeScript", "TanStack Query", "GraphQL"],
    metrics: "Desarrollo de CMS, arquitectura monorepo y federación de módulos",
    links: {
      live: "https://artists.umusic.com/",
    },
  },
];
