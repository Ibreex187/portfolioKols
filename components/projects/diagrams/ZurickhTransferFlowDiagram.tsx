import { DiagramFrame } from "./DiagramFrame";
import { DiagramBox, DiagramArrow } from "./primitives";

const MARKER = "arrow-zurickh-transfer-flow";

export function ZurickhTransferFlowDiagram() {
  return (
    <DiagramFrame
      title="Transfer flow: PIN check, then limit check, then an atomic MongoDB transaction, then a ledger entry, with a rejection path from the PIN and limit checks that leaves balances unchanged"
      markerId={MARKER}
      viewBox="0 0 900 230"
    >
      <DiagramBox
        x={20}
        y={20}
        width={180}
        height={64}
        label="PIN check"
      />
      <DiagramBox
        x={240}
        y={20}
        width={180}
        height={64}
        label="Limit check"
        sublabel="Daily / monthly, by tier"
      />
      <DiagramBox
        x={460}
        y={20}
        width={200}
        height={64}
        label="Atomic transaction"
        sublabel="MongoDB session"
      />
      <DiagramBox
        x={700}
        y={20}
        width={180}
        height={64}
        label="Ledger entry"
        sublabel="Double-entry journal"
      />

      <DiagramArrow x1={200} y1={52} x2={240} y2={52} markerId={MARKER} />
      <DiagramArrow x1={420} y1={52} x2={460} y2={52} markerId={MARKER} />
      <DiagramArrow x1={660} y1={52} x2={700} y2={52} markerId={MARKER} />

      <DiagramBox
        x={110}
        y={150}
        width={340}
        height={56}
        label="Rejected"
        sublabel="No balances changed"
      />

      <DiagramArrow x1={110} y1={84} x2={220} y2={150} markerId={MARKER} />
      <DiagramArrow x1={330} y1={84} x2={330} y2={150} markerId={MARKER} />
    </DiagramFrame>
  );
}
