import { Link } from "@tanstack/react-router";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-[1200px] px-6 py-10 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6 text-[14px] text-ink-faint">
          <div>
            © {new Date().getFullYear()} {site.name}. Built in {site.location}.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="transition-colors hover:text-ink">Home</Link>
            <a href="/#projects" className="transition-colors hover:text-ink">Projects</a>
            <a href={site.github} target="_blank" rel="noreferrer noopener" className="transition-colors hover:text-ink">GitHub</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer noopener" className="transition-colors hover:text-ink">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
