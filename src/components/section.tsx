export function Section({
  id,
  title,
  className = "",
  children,
}: {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`relative mx-auto max-w-3xl px-6 py-24 ${className}`}>
      {title && <h2 className="font-heading mb-8 text-2xl font-semibold">{title}</h2>}
      {children}
    </section>
  );
}
