import { DiagramFrame } from "./DiagramFrame";
import { DiagramBox, DiagramArrow } from "./primitives";

const MARKER = "arrow-kols-architecture";

export function KolsArchitectureDiagram() {
  return (
    <DiagramFrame
      title="Kols Investment architecture: React/Redux SPA to a serverless Express API, backed by MongoDB, a Redis cache and the Alpha Vantage market-data API, with GitHub Actions triggering scheduled internal jobs"
      markerId={MARKER}
      viewBox="0 0 820 260"
    >
      <DiagramBox
        x={20}
        y={20}
        width={220}
        height={64}
        label="React / Redux SPA"
        sublabel="Vite"
      />
      <DiagramBox
        x={300}
        y={20}
        width={230}
        height={64}
        label="Express API"
        sublabel="Serverless (Vercel)"
      />

      <DiagramArrow x1={240} y1={52} x2={300} y2={52} markerId={MARKER} />

      <DiagramBox x={20} y={160} width={170} height={64} label="MongoDB" />
      <DiagramBox
        x={210}
        y={160}
        width={170}
        height={64}
        label="Redis"
        sublabel="Market-data cache"
      />
      <DiagramBox
        x={400}
        y={160}
        width={190}
        height={64}
        label="Alpha Vantage API"
        sublabel="Market data"
      />
      <DiagramBox
        x={610}
        y={160}
        width={190}
        height={64}
        label="GitHub Actions"
        sublabel="Cron: alerts, demo reset"
      />

      <DiagramArrow x1={380} y1={84} x2={105} y2={160} markerId={MARKER} />
      <DiagramArrow x1={400} y1={84} x2={295} y2={160} markerId={MARKER} />
      <DiagramArrow x1={440} y1={84} x2={495} y2={160} markerId={MARKER} />
      <DiagramArrow x1={705} y1={160} x2={490} y2={84} markerId={MARKER} />
    </DiagramFrame>
  );
}
