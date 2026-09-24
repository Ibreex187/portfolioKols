import { DiagramFrame } from "./DiagramFrame";
import { DiagramBox, DiagramArrow } from "./primitives";

const MARKER = "arrow-zurickh-architecture";

export function ZurickhArchitectureDiagram() {
  return (
    <DiagramFrame
      title="Zurickh Bank architecture: React SPA to Express API to a MongoDB replica set, with JWT authentication and Nodemailer OTP email attached to the API"
      markerId={MARKER}
      viewBox="0 0 760 240"
    >
      <DiagramBox
        x={20}
        y={20}
        width={190}
        height={64}
        label="React SPA"
        sublabel="Vite"
      />
      <DiagramBox
        x={280}
        y={20}
        width={220}
        height={64}
        label="Express API"
      />
      <DiagramBox
        x={570}
        y={20}
        width={170}
        height={64}
        label="MongoDB"
        sublabel="Replica set (transactions)"
      />

      <DiagramArrow x1={210} y1={52} x2={280} y2={52} markerId={MARKER} />
      <DiagramArrow x1={500} y1={52} x2={570} y2={52} markerId={MARKER} />

      <DiagramBox
        x={220}
        y={160}
        width={150}
        height={60}
        label="JWT"
        sublabel="Access tokens"
      />
      <DiagramBox
        x={400}
        y={160}
        width={150}
        height={60}
        label="Nodemailer"
        sublabel="OTP email"
      />

      <DiagramArrow x1={360} y1={84} x2={295} y2={160} markerId={MARKER} />
      <DiagramArrow x1={420} y1={84} x2={475} y2={160} markerId={MARKER} />
    </DiagramFrame>
  );
}
