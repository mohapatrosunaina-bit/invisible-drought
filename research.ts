export type Season = 'Winter' | 'Pre-Monsoon' | 'Southwest Monsoon' | 'Post-Monsoon';

export interface SeasonInfo {
  name: Season;
  shortName: string;
  months: string;
  monthsList: string[];
  description: string;
  candidateCount: number;
  stressRate: number;
}

export interface DistrictInfo {
  id: string;
  name: string;
  gaulCode?: number;
  administrativeRegion: 'Northern Dry Zone' | 'Central Dry Zone' | 'Southern Dry Zone' | 'Coastal Zone' | 'Hilly Zone' | 'Transitional Zone';
  headquarters: string;
  areaKm2: number;
  latitude: number;
  longitude: number;
}

export interface ObservationData {
  districtId: string;
  districtName: string;
  year: number;
  season: Season;
  rainfallMm: number;
  rainfallZScore: number;
  ndviMean: number;
  ndviZScore: number;
  eviMean: number;
  eviZScore: number;
  rootzoneSm: number;
  rootzoneZScore: number;
  isMismatchCandidate: boolean;
  isRootzoneStressed: boolean;
  isExcludedOutage?: boolean;
}

export interface ModelEstimate {
  id: string;
  name: string;
  category: 'primary' | 'sensitivity' | 'seasonal' | 'specification';
  oddsRatio: number;
  ciLower: number;
  ciUpper: number;
  pValue?: number;
  pValueFormatted?: string;
  degreesOfFreedom?: number;
  description: string;
  interpretationNotes?: string;
  isPrimary?: boolean;
}

export interface LeaveOneDistrictOutResult {
  excludedDistrict: string;
  oddsRatio: number;
  ciLower: number;
  ciUpper: number;
}

export interface DataDictionaryField {
  variable: string;
  label: string;
  sourceDataset: string;
  dataType: string;
  units: string;
  spatialResolution: string;
  temporalResolution: string;
  description: string;
  transformationNotes: string;
}

export interface WorkflowPhase {
  phase: number;
  name: string;
  category: 'Ingestion' | 'Preprocessing' | 'Anomaly Construction' | 'Classification' | 'Statistical Inference' | 'Diagnostics & Validation';
  inputs: string[];
  outputs: string[];
  toolsUsed: string[];
  description: string;
}
