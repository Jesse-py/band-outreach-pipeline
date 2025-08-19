
export enum PipelineStage {
  NEW_LEAD = 'New Leads',
  RESEARCHED = 'Researched',
  CONTACTED = 'Contacted',
  IN_TALKS = 'In Talks',
  OUTCOME = 'Outcome',
}

export enum BandSource {
  AI_DISCOVERY = 'AI Discovery',
  MANUAL_ENTRY = 'Manual Entry',
  EMAIL_INQUIRY = 'Email Inquiry',
}

export enum OutcomeStatus {
  BOOKED = 'Booked',
  PASSED = 'Passed',
}

export interface ResearchData {
  fitScore: number;
  estimatedCost: string;
  notes: string[];
}

export interface NegotiationData {
  deal: string;
  availableDates: string;
  riderRequirements: string;
}

export interface ContactHistory {
  date: string;
  notes: string;
}

export interface OutcomeData {
  status: OutcomeStatus;
  details: string;
  date?: string;
}

export interface Band {
  id: number;
  name: string;
  stage: PipelineStage;
  source: BandSource;
  contact?: string;
  notes?: string;
  spotifyFollowers?: string;
  genre?: string;
  research?: ResearchData;
  negotiation?: NegotiationData;
  contactHistory?: ContactHistory;
  outcome?: OutcomeData;
}
