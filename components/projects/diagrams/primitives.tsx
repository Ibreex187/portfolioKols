export function DiagramBox({
  x,
  y,
  width,
  height,
  label,
  sublabel,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  sublabel?: string;
}) {
  const cx = x + width / 2;
  const cy = y + height / 2;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={8}
        className="fill-background stroke-border"
        strokeWidth={1.5}
      />
      <text
        x={cx}
        y={sublabel ? cy - 8 : cy}
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-foreground text-[12px] font-medium"
      >
        {label}
      </text>
      {sublabel && (
        <text
          x={cx}
          y={cy + 11}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-muted-foreground text-[10px]"
        >
          {sublabel}
        </text>
      )}
    </g>
  );
}

export function DiagramArrow({
  x1,
  y1,
  x2,
  y2,
  markerId,
  dashed = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  markerId: string;
  dashed?: boolean;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className="stroke-muted-foreground"
      strokeWidth={1.5}
      strokeDasharray={dashed ? "4 4" : undefined}
      markerEnd={`url(#${markerId})`}
    />
  );
}
