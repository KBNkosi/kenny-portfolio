import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { caseStudies, caseStudyOrder, type CaseStudy } from "@/content/projects";
import { Eyebrow } from "@/components/site/Eyebrow";
import { FlowLine } from "@/components/site/FlowLine";
import { Pill } from "@/components/site/Pill";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const study = caseStudies[params.slug as CaseStudy["slug"]];
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Case study not found — Kenny Nkosi" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { study } = loaderData;
    const title = `${study.title} — Case Study · Kenny Nkosi`;
    const description = study.overview;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: CaseStudyPage,
  notFoundComponent: CaseStudyNotFound,
});

const container = "mx-auto w-full max-w-[1200px] px-6 lg:px-10";
const prose = "mx-auto w-full max-w-[720px]";

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  const idx = caseStudyOrder.indexOf(study.slug);
  const prev = idx > 0 ? caseStudies[caseStudyOrder[idx - 1]] : null;
  const next = idx < caseStudyOrder.length - 1 ? caseStudies[caseStudyOrder[idx + 1]] : null;

  return (
    <>
      {/* HEADER */}
      <section className={`${container} py-16 sm:py-20`}>
        <Link to="/" hash="projects" className="eyebrow text-ink-faint transition-colors hover:text-ink">
          ← All projects
        </Link>
        <div className="mt-8 max-w-[900px]">
          <Eyebrow withTick>{study.eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-[40px] font-medium leading-[1.05] tracking-tight text-ink sm:text-[56px] lg:text-[64px]">
            {study.title}
          </h1>
          <p className="mt-6 max-w-[65ch] text-[18px] leading-relaxed text-ink-soft sm:text-[20px]">
            {study.overview}
          </p>
        </div>
        <div className="mt-16 rounded-xl border border-border bg-surface p-8 sm:p-12">
          <FlowLine
            variant="case"
            animate
            problem={study.flowline.problem}
            solution={study.flowline.solution}
            outcome={study.flowline.outcome}
          />
        </div>
      </section>

      {/* PROBLEM · SOLUTION · ROLE */}
      <section className="bg-bg-alt">
        <div className={`${container} py-20 sm:py-24`}>
          <div className={`${prose} space-y-12`}>
            <Block eyebrow="Problem" title="The business pain." body={study.problem} />
            <Block eyebrow="Solution" title="What got built." body={study.solution} />
            <Block eyebrow="My Role" title="Where I owned the work." body={study.role} />
          </div>
        </div>
      </section>

      {/* KEY FEATURES · CHALLENGES */}
      <section className={`${container} py-20 sm:py-24`}>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow withTick>Key Features</Eyebrow>
            <h2 className="mt-4 font-display text-[28px] leading-tight sm:text-[32px]">What the platform does.</h2>
            <ul className="mt-6 space-y-3">
              {study.keyFeatures.map((f: string) => (
                <li key={f} className="flex gap-3 text-[16px] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow withTick>Challenges</Eyebrow>
            <h2 className="mt-4 font-display text-[28px] leading-tight sm:text-[32px]">What was hard.</h2>
            <ul className="mt-6 space-y-3">
              {study.challenges.map((c: string) => (
                <li key={c} className="flex gap-3 text-[16px] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="bg-bg-alt">
        <div className={`${container} py-20 sm:py-24`}>
          <div className={prose}>
            <Eyebrow withTick>Outcome / Impact</Eyebrow>
            <div className="mt-6 rounded-xl bg-primary-tint p-8 sm:p-10">
              <p className="font-display text-[24px] leading-snug text-ink sm:text-[28px]">
                {study.outcome}
              </p>
            </div>
            <div className="mt-10">
              <div className="eyebrow mb-4">Lessons Learned</div>
              <ul className="flex flex-wrap gap-2">
                {study.lessons.map((l: string) => (
                  <Pill as="li" key={l}>{l}</Pill>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className={`${container} py-20 sm:py-24`}>
        <Eyebrow withTick>Technologies Used</Eyebrow>
        <h2 className="mt-4 font-display text-[28px] leading-tight sm:text-[32px]">The stack.</h2>
        <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {study.technologies.map((group: { category: string; items: string[] }) => (
            <div key={group.category}>
              <dt className="eyebrow mb-3">{group.category}</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item: string) => (
                    <Pill as="li" key={item}>{item}</Pill>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* NEXT / PREV */}
      <section className="border-t border-border bg-bg">
        <div className={`${container} grid gap-6 py-12 sm:grid-cols-2`}>
          {prev ? (
            <Link
              to="/projects/$slug"
              params={{ slug: prev.slug }}
              className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/40"
            >
              <span className="eyebrow">← Previous case study</span>
              <span className="mt-2 font-display text-[22px] text-ink group-hover:text-primary-dark">
                {prev.title}
              </span>
            </Link>
          ) : <span />}
          {next ? (
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="group flex flex-col rounded-xl border border-border bg-surface p-6 text-right transition-colors hover:border-primary/40 sm:ml-auto"
            >
              <span className="eyebrow">Next case study →</span>
              <span className="mt-2 font-display text-[22px] text-ink group-hover:text-primary-dark">
                {next.title}
              </span>
            </Link>
          ) : <span />}
        </div>
      </section>
    </>
  );
}

function Block({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div>
      <Eyebrow withTick>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-[28px] leading-tight sm:text-[32px]">{title}</h2>
      <p className="mt-4 text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">{body}</p>
    </div>
  );
}

function CaseStudyNotFound() {
  return (
    <div className={`${container} py-32 text-center`}>
      <Eyebrow>Case study not found</Eyebrow>
      <h1 className="mt-4 font-display text-[40px] leading-tight text-ink">
        That project doesn't exist.
      </h1>
      <p className="mt-4 text-[16px] text-ink-soft">
        It may have moved. Head back to the project list.
      </p>
      <div className="mt-8">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-primary-dark"
        >
          See all projects
        </Link>
      </div>
    </div>
  );
}
