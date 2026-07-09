import { cn } from "@/lib/utils";

export function Pill({
  children,
  className,
  as: Tag = "span",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "li";
}) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center rounded-full bg-primary-tint px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-primary-dark",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
