import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="reveal rounded-2xl border border-foreground/10 bg-surface p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 text-foreground/70">{service.pitch}</p>
      <ul className="mt-4 space-y-1 text-sm text-foreground/60">
        {service.deliverables.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </article>
  );
}
