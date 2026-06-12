"use client";

export function ThemeToggle() {
  function toggle() {
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  }
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="rounded-md border border-foreground/10 px-3 py-1.5 text-sm cursor-pointer"
    >
      ◐
    </button>
  );
}
