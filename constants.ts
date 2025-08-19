
import { Band, PipelineStage, BandSource, OutcomeStatus } from './types';

export const BANDS_DATA: Band[] = [
  {
    id: 1,
    name: 'Jake Morrison Band',
    stage: PipelineStage.NEW_LEAD,
    source: BandSource.AI_DISCOVERY,
    contact: 'booking@jakemorrison.com',
    genre: 'Country rock from Denver',
    spotifyFollowers: '15K',
  },
  {
    id: 2,
    name: 'Mountain Echo',
    stage: PipelineStage.NEW_LEAD,
    source: BandSource.MANUAL_ENTRY,
    contact: 'contact@mountainecho.com',
    notes: 'Heard at local festival, great crowd response',
  },
  {
    id: 3,
    name: 'Wyoming Winds',
    stage: PipelineStage.RESEARCHED,
    source: BandSource.EMAIL_INQUIRY,
    contact: 'wyomingwinds@gmail.com',
    notes: 'Local folk trio, inquired about fall dates',
    research: {
      fitScore: 85,
      estimatedCost: '$2,000-3,500',
      notes: ['Local connection, authentic Wyoming sound', 'Limited touring experience'],
    },
  },
  {
    id: 4,
    name: 'The Frontier Kings',
    stage: PipelineStage.CONTACTED,
    source: BandSource.MANUAL_ENTRY,
    contact: 'info@frontierkings.com',
    notes: 'Recommended by local promoter',
    contactHistory: {
      date: '2024-08-08',
      notes: 'Sent initial outreach email.',
    },
  },
  {
    id: 5,
    name: 'Desert Rose Band',
    stage: PipelineStage.CONTACTED,
    source: BandSource.AI_DISCOVERY,
    contact: 'bookings@desertroseband.com',
    notes: 'Alt-country from Colorado Springs',
    contactHistory: {
      date: '2024-08-05',
      notes: 'Follow up needed',
    },
  },
  {
    id: 6,
    name: 'The Country Does',
    stage: PipelineStage.IN_TALKS,
    source: BandSource.EMAIL_INQUIRY,
    contact: 'management@countrydoes.com',
    notes: 'Looking for September weekend slot',
    negotiation: {
      deal: '$3,500 + travel',
      availableDates: 'Sept 14 or 21 available',
      riderRequirements: 'Waiting on rider requirements',
    },
  },
  {
    id: 7,
    name: 'Laramie Local Heroes',
    stage: PipelineStage.OUTCOME,
    source: BandSource.EMAIL_INQUIRY,
    outcome: {
      status: OutcomeStatus.BOOKED,
      date: 'July 15, 2024',
      details: '$2,500 + 20% bar sales',
    },
  },
  {
    id: 8,
    name: 'High Dollar Band',
    stage: PipelineStage.OUTCOME,
    source: BandSource.AI_DISCOVERY,
    outcome: {
      status: OutcomeStatus.PASSED,
      details: 'Wanted $8,000 minimum, outside our budget',
    },
  },
  {
    id: 9,
    name: 'Wyoming Thunder',
    stage: PipelineStage.OUTCOME,
    source: BandSource.MANUAL_ENTRY,
    outcome: {
      status: OutcomeStatus.BOOKED,
      date: 'August 23, 2024',
      details: '$3,200 flat rate',
    },
  },
];

export const PIPELINE_COLUMNS = [
  { id: PipelineStage.NEW_LEAD, title: 'New Leads', color: 'blue' },
  { id: PipelineStage.RESEARCHED, title: 'Researched', color: 'purple' },
  { id: PipelineStage.CONTACTED, title: 'Contacted', color: 'yellow' },
  { id: PipelineStage.IN_TALKS, title: 'In Talks', color: 'orange' },
  { id: PipelineStage.OUTCOME, title: 'Outcome', color: 'green' },
];
