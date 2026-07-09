import { Link } from "@tanstack/react-router";
import type { FeaturedProject } from "@/content/site";
import { Eyebrow } from "./Eyebrow";
import { FlowLine } from "./FlowLine";
import { Pill } from "./Pill";

export function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block rounded-xl border border-border bg-surface p-8 transition-all duration-200 hover:border-primary/40 hover:shadow-[0_12px_32px_-16px_rgba(41,108,216,0.25)] sm:p-10"
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
        <div className="flex min-w-0 flex-wrap items-center gap-3">
          <Eyebrow>{project.type}</Eyebrow>
          <span className="eyebrow text-primary">· {project.status}</span>
        </div>
        <div className="hidden text-right sm:block">
          <div className="eyebrow">{project.role}</div>
          <div className="eyebrow mt-1">{project.timeline}</div>
        </div>
      </div>

      <h3 className="mt-4 text-[26px] leading-tight sm:text-[32px]">{project.title}</h3>
      <p className="mt-3 max-w-[60ch] text-[17px] leading-relaxed text-ink-soft">
        {project.summary}
      </p>

      <div className="mt-8 border-t border-border pt-8">
        <FlowLine
          variant="featured"
          animate={false}
          problem={project.problem}
          solution={project.solution}
          outcome={project.outcome}
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <ul className="flex flex-wrap gap-2">
          {project.focusAreas.map((area) => (
            <Pill as="li" key={area}>
              {area}
            </Pill>
          ))}
        </ul>
        <span className="eyebrow text-primary group-hover:text-primary-dark">
          Read case study →
        </span>
      </div>
    </Link>
  );
}
