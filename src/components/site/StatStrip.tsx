import { credibility } from "@/content/site";

export function StatStrip() {
  return (
    <div className="grid grid-cols-2 divide-y divide-x divide-border sm:grid-cols-4 sm:divide-y-0">
      {credibility.stats.map((stat) => (
        <div key={stat.label} className="px-6 py-8 first:pl-0 sm:py-4">
          <div className="font-display text-[40px] font-medium leading-none text-ink sm:text-[48px]">
            {stat.value}
          </div>
          <div className="mt-3 text-[14px] leading-snug text-ink-soft">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
