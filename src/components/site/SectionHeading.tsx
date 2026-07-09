import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <header
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow withTick>{eyebrow}</Eyebrow>}
      <h2 className="text-[28px] leading-[1.15] sm:text-[32px] lg:text-[40px]">
        {title}
      </h2>
      {lede && (
        <p className="max-w-[60ch] text-[17px] leading-relaxed text-ink-soft sm:text-[19px]">
          {lede}
        </p>
      )}
    </header>
  );
}
