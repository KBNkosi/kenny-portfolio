import { cn } from "@/lib/utils";

type Variant = "hero" | "featured" | "case";

type Props = {
  problem?: string;
  solution?: string;
  outcome?: string;
  variant?: Variant;
  className?: string;
  /** When true, the draw-in plays on mount. When false, renders fully drawn. */
  animate?: boolean;
};

/**
 * Signature Problem → Solution → Outcome flow-line.
 * Uses inline SVG with dasharray draw-in for the base line, and a second
 * "fill" path in --primary that reveals on hover of the parent .group.
 */
export function FlowLine({
  problem,
  solution,
  outcome,
  variant = "featured",
  className,
  animate = true,
}: Props) {
  const showLabels = variant !== "hero";
  const nodeR = variant === "hero" ? 5 : variant === "case" ? 8 : 7;
  const lineY = variant === "hero" ? 12 : variant === "case" ? 20 : 16;
  const height = variant === "hero" ? 24 : variant === "case" ? 40 : 32;
  const width = 600;
  const padX = 24;
  const positions = [padX, width / 2, width - padX];

  return (
    <div className={cn("w-full", className)}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="block w-full"
        style={{ height: variant === "hero" ? 24 : variant === "case" ? 40 : 32 }}
        aria-hidden="true"
      >
        {/* base hairline */}
        <line
          x1={positions[0]}
          x2={positions[2]}
          y1={lineY}
          y2={lineY}
          stroke="var(--border)"
          strokeWidth={variant === "case" ? 2 : 1.5}
          strokeLinecap="round"
          className={animate ? "flow-line-path" : undefined}
          style={{ ["--flow-dash" as string]: `${positions[2] - positions[0]}` }}
        />
        {/* primary fill overlay (hover) */}
        <line
          x1={positions[0]}
          x2={positions[2]}
          y1={lineY}
          y2={lineY}
          stroke="var(--primary)"
          strokeWidth={variant === "case" ? 2 : 1.5}
          strokeLinecap="round"
          className="flow-line-fill-path"
          style={{ ["--flow-dash" as string]: `${positions[2] - positions[0]}` }}
        />
        {positions.map((cx, i) => (
          <g key={i} className={animate ? `flow-node flow-node-${i + 1}` : undefined}>
            <circle cx={cx} cy={lineY} r={nodeR + 3} fill="var(--bg)" />
            <circle
              cx={cx}
              cy={lineY}
              r={nodeR}
              fill="var(--surface)"
              stroke="var(--primary)"
              strokeWidth={1.5}
            />
            <circle cx={cx} cy={lineY} r={nodeR - 3} fill="var(--primary)" />
          </g>
        ))}
      </svg>
      {showLabels && (
        <div
          className={cn(
            "mt-4 grid grid-cols-3 gap-4 text-left",
            variant === "case" && "mt-6 gap-8",
          )}
        >
          {[
            { label: "Problem", value: problem },
            { label: "Solution", value: solution },
            { label: "Outcome", value: outcome },
          ].map((item, i) => (
            <div key={item.label} className={cn(i === 1 && "text-center", i === 2 && "text-right")}>
              <div className="eyebrow mb-1.5">{item.label}</div>
              <p
                className={cn(
                  "text-[14px] leading-snug text-ink-soft sm:text-[15px]",
                  variant === "case" && "text-[16px] sm:text-[17px] text-ink",
                )}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
