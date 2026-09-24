import { DiagramFrame } from "./DiagramFrame";
import { DiagramBox, DiagramArrow } from "./primitives";

const MARKER = "arrow-tyread-data-model";

export function TyreadDataModelDiagram() {
  return (
    <DiagramFrame
      title="Tyread's Prisma schema grouped into five domains (identity, catalogue, reading, community and moderation), all backed by one PostgreSQL database"
      markerId={MARKER}
      viewBox="0 0 800 240"
    >
      <DiagramBox
        x={10}
        y={20}
        width={148}
        height={70}
        label="Identity"
        sublabel="User, Account, Session"
      />
      <DiagramBox
        x={166}
        y={20}
        width={148}
        height={70}
        label="Catalogue"
        sublabel="Book, Chapter, Author, Genre"
      />
      <DiagramBox
        x={322}
        y={20}
        width={148}
        height={70}
        label="Reading"
        sublabel="Shelf, Progress, Highlight"
      />
      <DiagramBox
        x={478}
        y={20}
        width={148}
        height={70}
        label="Community"
        sublabel="Club, Thread, Review, Follow"
      />
      <DiagramBox
        x={634}
        y={20}
        width={148}
        height={70}
        label="Moderation"
        sublabel="Report, Audit log, Badge"
      />

      <DiagramBox
        x={20}
        y={160}
        width={760}
        height={60}
        label="One Prisma schema"
        sublabel="PostgreSQL · 25+ relational models"
      />

      <DiagramArrow x1={84} y1={90} x2={84} y2={160} markerId={MARKER} />
      <DiagramArrow x1={240} y1={90} x2={240} y2={160} markerId={MARKER} />
      <DiagramArrow x1={396} y1={90} x2={396} y2={160} markerId={MARKER} />
      <DiagramArrow x1={552} y1={90} x2={552} y2={160} markerId={MARKER} />
      <DiagramArrow x1={708} y1={90} x2={708} y2={160} markerId={MARKER} />
    </DiagramFrame>
  );
}
