import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { services } from "@/content/services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Section id="hero">
          <p className="text-sm text-foreground/60">
            {profile.name} · {profile.role} · {profile.location}
          </p>
          <h1 className="text-5xl font-bold">{profile.tagline}</h1>
        </Section>
        <Section id="services" title="Mis servicios">
          <div className="grid gap-6 sm:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Section>
        <Section id="work" title="Mi trabajo">
          <div className="grid gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Section>
        <Section id="about" title="Acerca de">
          <p className="text-foreground/70">
            Soy fan del minimalismo, mi filosofía de trabajo refleja este
            concepto: calidad por encima de cantidad, simplicidad por encima de
            complejidad.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {profile.stack.map((t) => (
              <li
                key={t}
                className="rounded-full border border-foreground/10 px-3 py-1 text-sm text-foreground/60"
              >
                {t}
              </li>
            ))}
          </ul>
        </Section>
        <Section id="contact" title="Contacto">
          <a
            href={`mailto:${profile.email}`}
            className="text-xl font-medium text-accent underline-offset-4 hover:underline"
          >
            {profile.email}
          </a>
        </Section>
      </main>
    </>
  );
}
