import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  withTick = false,
}: {
  children: React.ReactNode;
  className?: string;
  withTick?: boolean;
}) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-2", className)}>
      {withTick && <span aria-hidden className="inline-block h-px w-2 bg-primary" />}
      {children}
    </span>
  );
}
