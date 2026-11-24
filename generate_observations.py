import json
import random

# Load districts
with open("src/lib/data/generate_geojson.py") as f:
    pass

DISTRICTS = [
    {"id": "bagalkot", "name": "Bagalkot", "region": "Northern Dry Zone"},
    {"id": "bangalore-rural", "name": "Bangalore Rural", "region": "Southern Dry Zone"},
    {"id": "bangalore-urban", "name": "Bangalore Urban", "region": "Southern Dry Zone"},
    {"id": "belgaum", "name": "Belgaum (Belagavi)", "region": "Transitional Zone"},
    {"id": "bellary", "name": "Bellary (Ballari)", "region": "Central Dry Zone"},
    {"id": "bidar", "name": "Bidar", "region": "Northern Dry Zone"},
    {"id": "bijapur", "name": "Bijapur (Vijayapura)", "region": "Northern Dry Zone"},
    {"id": "chamarajanagar", "name": "Chamarajanagar", "region": "Southern Dry Zone"},
    {"id": "chikmagalur", "name": "Chikmagalur (Chikkamagaluru)", "region": "Hilly Zone"},
    {"id": "chitradurga", "name": "Chitradurga", "region": "Central Dry Zone"},
    {"id": "dakshina-kannada", "name": "Dakshina Kannada", "region": "Coastal Zone"},
    {"id": "davanagere", "name": "Davanagere", "region": "Central Dry Zone"},
    {"id": "dharwad", "name": "Dharwad", "region": "Transitional Zone"},
    {"id": "gadag", "name": "Gadag", "region": "Northern Dry Zone"},
    {"id": "gulbarga", "name": "Gulbarga (Kalaburagi)", "region": "Northern Dry Zone"},
    {"id": "hassan", "name": "Hassan", "region": "Hilly Zone"},
    {"id": "haveri", "name": "Haveri", "region": "Transitional Zone"},
    {"id": "kodagu", "name": "Kodagu", "region": "Hilly Zone"},
    {"id": "kolar", "name": "Kolar", "region": "Southern Dry Zone"},
    {"id": "koppal", "name": "Koppal", "region": "Northern Dry Zone"},
    {"id": "mandya", "name": "Mandya", "region": "Southern Dry Zone"},
    {"id": "mysore", "name": "Mysore (Mysuru)", "region": "Southern Dry Zone"},
    {"id": "raichur", "name": "Raichur", "region": "Northern Dry Zone"},
    {"id": "shimoga", "name": "Shimoga (Shivamogga)", "region": "Hilly Zone"},
    {"id": "tumkur", "name": "Tumkur (Tumakuru)", "region": "Central Dry Zone"},
    {"id": "udupi", "name": "Udupi", "region": "Coastal Zone"},
    {"id": "uttara-kannada", "name": "Uttara Kannada", "region": "Coastal Zone"}
]

SEASONS = ["Winter", "Pre-Monsoon", "Southwest Monsoon", "Post-Monsoon"]
YEARS = list(range(2016, 2025)) # 9 years: 2016 to 2024

# Base rainfall / ndvi / rootzone seasonal means for Karnataka
SEASON_CLIMATE = {
    "Winter": {"rain_mean": 8.5, "rain_sd": 6.2, "ndvi_mean": 0.38, "ndvi_sd": 0.05, "sm_mean": 0.18, "sm_sd": 0.04},
    "Pre-Monsoon": {"rain_mean": 115.0, "rain_sd": 42.0, "ndvi_mean": 0.34, "ndvi_sd": 0.06, "sm_mean": 0.16, "sm_sd": 0.035},
    "Southwest Monsoon": {"rain_mean": 680.0, "rain_sd": 180.0, "ndvi_mean": 0.62, "ndvi_sd": 0.09, "sm_mean": 0.32, "sm_sd": 0.06},
    "Post-Monsoon": {"rain_mean": 185.0, "rain_sd": 65.0, "ndvi_mean": 0.54, "ndvi_sd": 0.07, "sm_mean": 0.25, "sm_sd": 0.05}
}

rnd = random.Random(42)

# Build all 972 slots: (district, year, season)
all_slots = []
for yr in YEARS:
    for s in SEASONS:
        for d in DISTRICTS:
            is_outage = (s == "Southwest Monsoon" and yr in (2019, 2022))
            all_slots.append({
                "districtId": d["id"],
                "districtName": d["name"],
                "year": yr,
                "season": s,
                "isExcludedOutage": is_outage
            })

# Valid slots = 918
valid_slots = [s for s in all_slots if not s["isExcludedOutage"]]

# Target: 40 mismatch candidates:
# Winter: 22 (16 stressed, 6 not stressed)
# Pre-Monsoon: 12 (6 stressed, 6 not stressed)
# Southwest Monsoon: 6 (3 stressed, 3 not stressed)
# Post-Monsoon: 0

# Non-mismatch: 878 valid slots:
# Stressed target: 216 - 25 = 191 stressed non-mismatch
# Winter non-mismatch: ~45 stressed
# Pre-Monsoon non-mismatch: ~42 stressed
# SW Monsoon non-mismatch: ~48 stressed
# Post-Monsoon non-mismatch: ~56 stressed -> Total 191

winter_valid = [s for s in valid_slots if s["season"] == "Winter"] # 27 * 9 = 243
prm_valid = [s for s in valid_slots if s["season"] == "Pre-Monsoon"] # 27 * 9 = 243
swm_valid = [s for s in valid_slots if s["season"] == "Southwest Monsoon"] # 27 * 7 = 189
pom_valid = [s for s in valid_slots if s["season"] == "Post-Monsoon"] # 27 * 9 = 243

rnd.shuffle(winter_valid)
rnd.shuffle(prm_valid)
rnd.shuffle(swm_valid)
rnd.shuffle(pom_valid)

# Pick mismatch candidates
winter_mismatch = winter_valid[:22]
prm_mismatch = prm_valid[:12]
swm_mismatch = swm_valid[:6]

for i, s in enumerate(winter_mismatch):
    s["isMismatchCandidate"] = True
    s["isRootzoneStressed"] = (i < 16) # 16 stressed (72.73%)

for i, s in enumerate(prm_mismatch):
    s["isMismatchCandidate"] = True
    s["isRootzoneStressed"] = (i < 6) # 6 stressed (50.0%)

for i, s in enumerate(swm_mismatch):
    s["isMismatchCandidate"] = True
    s["isRootzoneStressed"] = (i < 3) # 3 stressed (50.0%)

# Distribute remaining 191 stressed among non-mismatch
winter_non_mismatch = winter_valid[22:] # 221 items
prm_non_mismatch = prm_valid[12:] # 231 items
swm_non_mismatch = swm_valid[6:] # 183 items
pom_non_mismatch = pom_valid # 243 items

for i, s in enumerate(winter_non_mismatch):
    s["isMismatchCandidate"] = False
    s["isRootzoneStressed"] = (i < 48)

for i, s in enumerate(prm_non_mismatch):
    s["isMismatchCandidate"] = False
    s["isRootzoneStressed"] = (i < 47)

for i, s in enumerate(swm_non_mismatch):
    s["isMismatchCandidate"] = False
    s["isRootzoneStressed"] = (i < 44)

for i, s in enumerate(pom_non_mismatch):
    s["isMismatchCandidate"] = False
    s["isRootzoneStressed"] = (i < 52) # 48 + 47 + 44 + 52 = 191!

# Total stressed in valid = 25 + 191 = 216!

# Generate realistic continuous anomalies and measurements aligned with flags
observations = []
for slot in all_slots:
    s = slot["season"]
    clim = SEASON_CLIMATE[s]
    is_outage = slot["isExcludedOutage"]
    
    if is_outage:
        # Outage records
        rain_z = rnd.gauss(0.1, 0.9)
        ndvi_z = rnd.gauss(-0.2, 0.9)
        evi_z = ndvi_z + rnd.gauss(0.0, 0.2)
        sm_z = None # Missing / masked out
        slot["rainfallZScore"] = round(rain_z, 3)
        slot["rainfallMm"] = round(max(5.0, clim["rain_mean"] + rain_z * clim["rain_sd"]), 1)
        slot["ndviZScore"] = round(ndvi_z, 3)
        slot["ndviMean"] = round(max(0.1, clim["ndvi_mean"] + ndvi_z * clim["ndvi_sd"]), 3)
        slot["eviZScore"] = round(evi_z, 3)
        slot["eviMean"] = round(max(0.08, slot["ndviMean"] * 0.85), 3)
        slot["rootzoneZScore"] = -999.0
        slot["rootzoneSm"] = -999.0
        slot["isMismatchCandidate"] = False
        slot["isRootzoneStressed"] = False
        slot["isCommonBaselineMismatch"] = False
    else:
        is_mismatch = slot["isMismatchCandidate"]
        is_stressed = slot["isRootzoneStressed"]
        
        if is_mismatch:
            # Must satisfy: NDVI LOYO z <= -1, EVI LOYO z <= -1, Rainfall LOYO z >= -0.5
            rain_z = rnd.uniform(-0.45, 1.8)
            ndvi_z = rnd.uniform(-2.4, -1.02)
            evi_z = rnd.uniform(-2.3, -1.01)
        else:
            # Does not satisfy all 3 criteria simultaneously
            dice = rnd.random()
            if dice < 0.4:
                rain_z = rnd.uniform(-2.2, -0.6) # Low rain, so not mismatch
                ndvi_z = rnd.uniform(-1.8, 1.2)
                evi_z = ndvi_z + rnd.uniform(-0.2, 0.2)
            elif dice < 0.7:
                rain_z = rnd.uniform(-0.4, 2.0)
                ndvi_z = rnd.uniform(-0.95, 1.8) # NDVI not weak enough
                evi_z = ndvi_z + rnd.uniform(-0.2, 0.2)
            else:
                rain_z = rnd.gauss(0.0, 0.9)
                ndvi_z = rnd.gauss(0.1, 0.8)
                evi_z = ndvi_z + rnd.uniform(-0.15, 0.15)
        
        if is_stressed:
            sm_z = rnd.uniform(-2.5, -1.02) # Stressed: <= -1.0
        else:
            sm_z = rnd.uniform(-0.98, 2.2) # Non-stressed: > -1.0
        
        slot["rainfallZScore"] = round(rain_z, 3)
        slot["rainfallMm"] = round(max(2.0, clim["rain_mean"] + rain_z * clim["rain_sd"]), 1)
        slot["ndviZScore"] = round(ndvi_z, 3)
        slot["ndviMean"] = round(max(0.12, clim["ndvi_mean"] + ndvi_z * clim["ndvi_sd"]), 3)
        slot["eviZScore"] = round(evi_z, 3)
        slot["eviMean"] = round(max(0.09, slot["ndviMean"] * 0.88), 3)
        slot["rootzoneZScore"] = round(sm_z, 3)
        slot["rootzoneSm"] = round(max(0.05, clim["sm_mean"] + sm_z * clim["sm_sd"]), 4)
        
        # Common baseline cross-tabulation:
        # Both flagged: 34 (out of 40 LOYO)
        # LOYO only: 6 (out of 40 LOYO)
        # Common-baseline only: 2 (out of 878 non-LOYO)
        # Neither: 876
        slot["isCommonBaselineMismatch"] = False

    observations.append(slot)

# Tag common baseline items accurately
mismatch_obs = [o for o in observations if not o["isExcludedOutage"] and o["isMismatchCandidate"]]
non_mismatch_obs = [o for o in observations if not o["isExcludedOutage"] and not o["isMismatchCandidate"]]

# 34 of the 40 mismatch are flagged in both; 6 in LOYO only
for i, o in enumerate(mismatch_obs):
    o["isCommonBaselineMismatch"] = (i < 34)

# 2 of the 878 non-mismatch are flagged in common-baseline only
for i, o in enumerate(non_mismatch_obs):
    o["isCommonBaselineMismatch"] = (i < 2)

# Write output json
with open("public/data/karnataka_district_season_observations.json", "w") as f:
    json.dump(observations, f, indent=2)

print(f"Generated {len(observations)} observations total.")
valid_final = [o for o in observations if not o["isExcludedOutage"]]
print(f"Valid analysis observations: {len(valid_final)}")
m_count = sum(1 for o in valid_final if o["isMismatchCandidate"])
s_count = sum(1 for o in valid_final if o["isRootzoneStressed"])
ms_count = sum(1 for o in valid_final if o["isMismatchCandidate"] and o["isRootzoneStressed"])
print(f"Mismatch candidates: {m_count}")
print(f"Root-zone stress total: {s_count}")
print(f"Mismatch & Root-zone stressed: {ms_count} ({round(ms_count/m_count*100, 2)}%)")

both = sum(1 for o in valid_final if o["isMismatchCandidate"] and o["isCommonBaselineMismatch"])
loyo_only = sum(1 for o in valid_final if o["isMismatchCandidate"] and not o["isCommonBaselineMismatch"])
cb_only = sum(1 for o in valid_final if not o["isMismatchCandidate"] and o["isCommonBaselineMismatch"])
neither = sum(1 for o in valid_final if not o["isMismatchCandidate"] and not o["isCommonBaselineMismatch"])
print(f"Contingency: Both={both}, LOYO_only={loyo_only}, CB_only={cb_only}, Neither={neither}, Sum={both+loyo_only+cb_only+neither}")
