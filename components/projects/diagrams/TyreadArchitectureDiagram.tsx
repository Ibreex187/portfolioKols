import { DiagramFrame } from "./DiagramFrame";
import { DiagramBox, DiagramArrow } from "./primitives";

const MARKER = "arrow-tyread-architecture";

export function TyreadArchitectureDiagram() {
  return (
    <DiagramFrame
      title="Tyread architecture: browser to Next.js App Router to Prisma to PostgreSQL, with NextAuth, UploadThing, Resend and external book catalogues attached to the application layer"
      markerId={MARKER}
      viewBox="0 0 780 260"
    >
      {/* Main chain */}
      <DiagramBox x={20} y={20} width={130} height={64} label="Browser" />
      <DiagramBox
        x={210}
        y={20}
        width={220}
        height={64}
        label="Next.js App Router"
        sublabel="Server Components, Route Handlers"
      />
      <DiagramBox x={490} y={20} width={110} height={64} label="Prisma" />
      <DiagramBox
        x={660}
        y={20}
        width={100}
        height={64}
        label="PostgreSQL"
      />

      <DiagramArrow x1={150} y1={52} x2={210} y2={52} markerId={MARKER} />
      <DiagramArrow x1={430} y1={52} x2={490} y2={52} markerId={MARKER} />
      <DiagramArrow x1={600} y1={52} x2={660} y2={52} markerId={MARKER} />

      {/* Supporting services */}
      <DiagramBox
        x={20}
        y={170}
        width={160}
        height={64}
        label="NextAuth"
        sublabel="Credentials + Google/GitHub"
      />
      <DiagramBox
        x={200}
        y={170}
        width={150}
        height={64}
        label="UploadThing"
        sublabel="Book files, covers"
      />
      <DiagramBox
        x={370}
        y={170}
        width={140}
        height={64}
        label="Resend"
        sublabel="Transactional email"
      />
      <DiagramBox
        x={530}
        y={170}
        width={230}
        height={64}
        label="External catalogues"
        sublabel="Open Library, Gutendex, Internet Archive"
      />

      <DiagramArrow x1={280} y1={84} x2={100} y2={170} markerId={MARKER} />
      <DiagramArrow x1={300} y1={84} x2={275} y2={170} markerId={MARKER} />
      <DiagramArrow x1={340} y1={84} x2={440} y2={170} markerId={MARKER} />
      <DiagramArrow x1={380} y1={84} x2={645} y2={170} markerId={MARKER} />
    </DiagramFrame>
  );
}
