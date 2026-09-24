import type { ComponentType } from "react";
import { TyreadArchitectureDiagram } from "./TyreadArchitectureDiagram";
import { TyreadDataModelDiagram } from "./TyreadDataModelDiagram";
import { ZurickhArchitectureDiagram } from "./ZurickhArchitectureDiagram";
import { ZurickhTransferFlowDiagram } from "./ZurickhTransferFlowDiagram";
import { KolsArchitectureDiagram } from "./KolsArchitectureDiagram";

export const diagramRegistry: Record<string, ComponentType> = {
  "tyread-architecture": TyreadArchitectureDiagram,
  "tyread-data-model": TyreadDataModelDiagram,
  "zurickh-architecture": ZurickhArchitectureDiagram,
  "zurickh-transfer-flow": ZurickhTransferFlowDiagram,
  "kols-architecture": KolsArchitectureDiagram,
};
