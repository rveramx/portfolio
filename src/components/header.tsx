import { ThemeToggle } from "./theme-toggle";

const links = [
  ["Mis servicios", "#services"],
  ["Mi trabajo", "#work"],
  ["Acerca de", "#about"],
  ["Contacto", "#contact"],
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
        <a href="#hero" className="font-semibold">
          Logo
        </a>
        <div className="flex items-center gap-5 text-sm">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-accent">
              {label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
