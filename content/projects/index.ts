import type { CaseStudyProject } from "@/lib/types";
import { tyread } from "./tyread";
import { zurickhBank } from "./zurickh-bank";
import { kolsInvestment } from "./kols-investment";

export const caseStudyProjects: CaseStudyProject[] = [
  tyread,
  zurickhBank,
  kolsInvestment,
];
