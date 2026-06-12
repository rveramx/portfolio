export interface Service {
  readonly slug: "websites" | "software" | "mobile-apps";
  readonly title: string;
  readonly pitch: string;
  readonly deliverables: readonly string[];
}

export const services: readonly Service[] = [
  {
    slug: "websites",
    title: "Sitios Web",
    pitch:
      "Tu página web, ultra-rápida, lista para SEO, que carga instantáneamente y convierte visitantes en clientes.",
    deliverables: [
      "Desde el diseño hasta el código, precisión al píxel",
      "+90 en puntajes de PageSpeed",
      "Analíticas y SEO desde el día uno",
    ],
  },
  {
    slug: "software",
    title: "Software Personalizado",
    pitch:
      "Applicaciones web o de control empresarial que se ajustan a tu estilo de trabajo",
    deliverables: [
      "Paneles de administrador y herramientas internas",
      "Diseño de APIs",
      "Integraciones con Inteligencia Artificial",
      "Código limpio y profesional",
    ],
  },
  {
    slug: "mobile-apps",
    title: "Apps Móviles",
    pitch:
      "Aplicaciones iOS y Android de alto desempeño, orientadas a experiencias de usuario",
    deliverables: [
      "React Native + Typescript",
      "Swift + Kotlin",
      "Interfaz de usuario enfocada en diseño",
      "Despliegue automatizado en App Store y Google Play",
    ],
  },
] as const;
