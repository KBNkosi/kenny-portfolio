import { createFileRoute } from "@tanstack/react-router";
import {
  about,
  coreThemes,
  credibility,
  featuredProjects,
  hero,
  journey,
  principles,
  site,
  supportingProjects,
  testimonials,
  toolkit,
} from "@/content/site";
import { Eyebrow } from "@/components/site/Eyebrow";
import { FeaturedProjectCard } from "@/components/site/FeaturedProjectCard";
import { FlowLine } from "@/components/site/FlowLine";
import { Pill } from "@/components/site/Pill";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StatStrip } from "@/components/site/StatStrip";
import { SupportingProjectCard } from "@/components/site/SupportingProjectCard";
import graduatePhoto from "@/assets/graduate-photo.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const container = "mx-auto w-full max-w-[1200px] px-6 lg:px-10";
const section = "py-20 sm:py-24 lg:py-32";

function Home() {
  return (
    <>
      {/* HERO */}
      <section className={`${container} flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-10 py-16 sm:py-20 lg:flex-row lg:items-start lg:gap-16`}>
        <div className="w-full max-w-[700px] lg:max-w-[600px]">
          <Eyebrow withTick>{hero.eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-[38px] font-medium leading-[1.05] tracking-tight text-ink sm:text-[52px] lg:text-[64px]">
            {hero.headlineParts.before}
            <em className="italic text-primary">{hero.headlineParts.italic}</em>
            {hero.headlineParts.after}
          </h1>
          <p className="mt-6 max-w-[60ch] text-[17px] leading-relaxed text-ink-soft sm:text-[19px]">
            {hero.lede}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={hero.ctas.primary.href}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-[15px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              {hero.ctas.primary.label}
            </a>
            <a
              href={hero.ctas.secondary.href}
              className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:border-ink-faint"
            >
              {hero.ctas.secondary.label}
            </a>
          </div>
        </div>
        <div className="w-full max-w-[420px] shrink-0 lg:mt-4">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <img
              src={graduatePhoto}
              alt="Graduate photo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className={`bg-bg-alt ${section}`}>
        <div className={container}>
          <SectionHeading eyebrow="Credibility Snapshot" title="Evidence over adjectives." />
          <div className="mt-10">
            <StatStrip />
          </div>
          <ul className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {credibility.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-[16px] leading-relaxed text-ink-soft">
                <span aria-hidden className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CORE THEMES */}
      <section className={`${container} py-16 sm:py-20`}>
        <div className="flex flex-col items-center gap-6 text-center">
          <Eyebrow withTick>Core Themes</Eyebrow>
          <ul className="flex flex-wrap justify-center gap-2">
            {coreThemes.map((theme) => (
              <Pill as="li" key={theme}>{theme}</Pill>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className={`bg-bg-alt ${section}`}>
        <div className={container}>
          <SectionHeading
            eyebrow="Featured Projects"
            title={<>Three platforms, one <em className="italic text-primary">honest</em> structure.</>}
            lede="Each project follows the same shape: the business problem it existed to solve, what got built, and what changed as a result."
          />
          <div className="mt-12 flex flex-col gap-6 sm:gap-8">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.slug} delayMs={i * 80}>
                <FeaturedProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORTING PROJECTS */}
      <section className={`${container} ${section}`}>
        <SectionHeading
          eyebrow="Supporting Projects"
          title="Additional work across product domains."
          lede="Earlier and adjacent projects that shaped how I approach recommendation systems, e-commerce flows, and community platforms."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supportingProjects.map((p, i) => (
            <Reveal key={p.title} delayMs={i * 80}>
              <SupportingProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW I WORK */}
      <section className={`bg-bg-alt ${section}`}>
        <div className={container}>
          <SectionHeading
            eyebrow="How I Work"
            title="Six principles, applied on every build."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delayMs={i * 60}>
                <div className="h-full rounded-xl border border-border bg-surface p-8 transition-colors hover:border-primary/40">
                  <h3 className="font-display text-[20px] leading-snug text-ink">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER & PROJECT JOURNEY */}
      <section id="journey" className={`${container} ${section}`}>
        <SectionHeading eyebrow="Career & Project Journey" title="How the work has built on itself." />
        <ol className="mt-12 relative border-l border-border pl-8">
          {journey.map((m) => (
            <li key={m.title} className="relative pb-10 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-primary"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-[22px] leading-tight text-ink">{m.title}</h3>
                <span className="eyebrow">{m.phase}</span>
              </div>
              <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-ink-soft">{m.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* TESTIMONIALS */}
      <section className={`bg-bg-alt ${section}`}>
        <div className={container}>
          <SectionHeading eyebrow="Testimonials" title="What collaborators say." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delayMs={i * 80}>
                <figure className="flex h-full flex-col rounded-xl border border-border bg-surface p-8">
                  <blockquote className="text-[19px] leading-relaxed text-ink">
                    "{t.quote}"
                  </blockquote>
                  <div className="mt-6 border-t border-border pt-4">
                    <div className="eyebrow">{t.author}</div>
                    <div className="mt-1 text-[13px] text-ink-faint">{t.role}</div>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLKIT */}
      <section className={`${container} ${section}`}>
        <SectionHeading eyebrow="Technical Toolkit" title="Tools I reach for." />
        <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {toolkit.map((group) => (
            <div key={group.category}>
              <dt className="eyebrow mb-4">{group.category}</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Pill as="li" key={item}>{item}</Pill>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ABOUT */}
      <section className={`bg-bg-alt ${section}`}>
        <div className={container}>
          <div className="mx-auto max-w-[720px]">
            <SectionHeading eyebrow="About" title="A little context." />
            <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink-soft">
              {about.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-primary-tint">
        <div className={`${container} py-24 sm:py-28 lg:py-32`}>
          <div className="mx-auto max-w-[720px] text-center">
            <Eyebrow withTick>Contact</Eyebrow>
            <h2 className="mt-6 font-display text-[36px] leading-[1.1] text-ink sm:text-[52px]">
              Let's build something <em className="italic text-primary">useful</em>.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-soft sm:text-[19px]">
              I'm currently open to software development opportunities, freelance work,  project collaborations, and conversations about building practical software that solves real-world problems.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${site.email}`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-[15px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                {site.email}
              </a>
              <div className="flex items-center gap-6 text-[14px] text-ink-soft">
                <a href={site.github} target="_blank" rel="noreferrer noopener" className="underline-offset-4 hover:text-primary-dark hover:underline">
                  GitHub
                </a>
                <a href={site.linkedin} target="_blank" rel="noreferrer noopener" className="underline-offset-4 hover:text-primary-dark hover:underline">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
