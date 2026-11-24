import rawObservations from "../../../public/data/karnataka_district_season_observations.json";
import { ObservationData, Season } from "@/types/research";

export const OBSERVATIONS: ObservationData[] = rawObservations as ObservationData[];

export const VALID_OBSERVATIONS = OBSERVATIONS.filter((o) => !o.isExcludedOutage);

export const MISMATCH_OBSERVATIONS = VALID_OBSERVATIONS.filter((o) => o.isMismatchCandidate);

export const STRESSED_OBSERVATIONS = VALID_OBSERVATIONS.filter((o) => o.isRootzoneStressed);

export function getObservationsByYearAndSeason(year: number, season: Season): ObservationData[] {
  return OBSERVATIONS.filter((o) => o.year === year && o.season === season);
}

export function getObservationForDistrict(
  districtId: string,
  year: number,
  season: Season
): ObservationData | undefined {
  return OBSERVATIONS.find(
    (o) => o.districtId === districtId && o.year === year && o.season === season
  );
}

export function getDistrictTimeline(districtId: string): ObservationData[] {
  return OBSERVATIONS.filter((o) => o.districtId === districtId);
}

export function getSeasonBreakdown(season: Season) {
  const seasonRecords = VALID_OBSERVATIONS.filter((o) => o.season === season);
  const candidates = seasonRecords.filter((o) => o.isMismatchCandidate);
  const stressedCandidates = candidates.filter((o) => o.isRootzoneStressed);
  const stressRate = candidates.length > 0 ? (stressedCandidates.length / candidates.length) * 100 : 0;

  return {
    totalRecords: seasonRecords.length,
    candidateCount: candidates.length,
    stressedCandidateCount: stressedCandidates.length,
    stressRate: Number(stressRate.toFixed(2)),
  };
}
