import type { SupportingProject } from "@/content/site";
import { Eyebrow } from "./Eyebrow";
import { Pill } from "./Pill";

export function SupportingProjectCard({ project }: { project: SupportingProject }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-7 transition-colors hover:border-primary/40">
      <div className="flex flex-wrap items-center gap-2">
        <Eyebrow>{project.type}</Eyebrow>
        <span className="eyebrow text-primary">· {project.status}</span>
      </div>
      <h3 className="mt-3 font-display text-[22px] leading-tight text-ink">{project.title}</h3>
      <div className="eyebrow mt-1">{project.role}</div>
      <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{project.summary}</p>

      <dl className="mt-5 space-y-3 border-t border-border pt-5 text-[14px] leading-relaxed text-ink-soft">
        <div>
          <dt className="eyebrow mb-1">Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt className="eyebrow mb-1">Solution</dt>
          <dd>{project.solution}</dd>
        </div>
      </dl>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((t) => (
          <Pill as="li" key={t}>{t}</Pill>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-5 text-[13px]">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="eyebrow text-primary underline-offset-4 hover:text-primary-dark hover:underline"
          >
            Source Code →
          </a>
        ) : (
          <span className="eyebrow text-ink-faint">Source code not public</span>
        )}
        {project.liveDemo ? (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer noopener"
            className="eyebrow text-primary underline-offset-4 hover:text-primary-dark hover:underline"
          >
            Live Demo →
          </a>
        ) : (
          <span className="eyebrow text-ink-faint">Live demo not currently available</span>
        )}
      </div>
    </div>
  );
}
