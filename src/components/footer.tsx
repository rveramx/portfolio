import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-3xl items-center justify-between gap-6 px-6 py-10 text-sm text-foreground/60">
      <span>
        © {new Date().getFullYear()} | {profile.name}
      </span>
      <div className="flex gap-4">
        <a href={profile.links.github} className="hover:text-accent" target="_blank">
          GitHub
        </a>
        <a href={profile.links.linkedin} className="hover:text-accent" target="_blank">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
