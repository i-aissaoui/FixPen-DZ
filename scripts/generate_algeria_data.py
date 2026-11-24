import csv
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WILAYAS_CSV = ROOT / "69-wilayas-algerie-2026-a8ede3e251afb314e80be524b784d478.csv"
NEW_COMMUNES_CSV = ROOT / "communes-nouvelles-wilayas-2026-e56b1a86a481337aa1baa8ee9fb8712c.csv"
CITIES_CSV = ROOT / "algeria_cities.csv"
OUTPUT = ROOT / "src" / "lib" / "algeria.ts"

TARIFFS = {
    "01": (600, 1100), "02": (400, 700), "03": (500, 900), "04": (400, 790),
    "05": (400, 790), "06": (400, 690), "07": (500, 900), "08": (600, 1100),
    "09": (250, 500), "10": (400, 650), "11": (800, 1400), "12": (400, 790),
    "13": (400, 790), "14": (400, 700), "15": (350, 630), "16": (200, 380),
    "17": (400, 790), "18": (390, 690), "19": (390, 690), "20": (400, 790),
    "21": (390, 700), "22": (390, 690), "23": (390, 700), "24": (390, 700),
    "25": (390, 700), "26": (390, 600), "27": (390, 690), "28": (400, 650),
    "29": (390, 690), "30": (600, 1100), "31": (390, 690), "32": (500, 900),
    "33": (790, 1300), "34": (390, 690), "35": (350, 590), "36": (390, 700),
    "37": (600, 1100), "38": (400, 700), "39": (600, 1100), "40": (400, 790),
    "41": (400, 790), "42": (250, 500), "43": (390, 690), "44": (400, 650),
    "45": (600, 1100), "46": (390, 690), "47": (500, 900), "48": (400, 700),
    "49": (600, 1100), "50": (800, 1400), "51": (500, 900), "52": (600, 1100),
    "53": (790, 1300), "54": (800, 1400), "55": (600, 1100), "56": (790, 1300),
    "57": (600, 1100), "58": (600, 1100), "59": (500, 900), "60": (400, 790),
    "61": (500, 900), "62": (400, 790), "63": (400, 790), "64": (400, 700),
    "65": (400, 700), "66": (500, 900), "67": (390, 600), "68": (400, 790),
    "69": (600, 1100),
}


def read_csv(path):
    with path.open(encoding="utf-8-sig", newline="") as handle:
        return list(csv.DictReader(handle))


def tariff(wilaya_id, mother_id=""):
    base_id = wilaya_id.zfill(2)
    mother = mother_id.zfill(2) if mother_id else ""
    return TARIFFS.get(base_id) or TARIFFS.get(mother) or (400, 600)


def clean(value):
    return " ".join((value or "").split())


wilaya_rows = read_csv(WILAYAS_CSV)
new_commune_rows = read_csv(NEW_COMMUNES_CSV)
city_rows = read_csv(CITIES_CSV)

communes = {}
for row in city_rows:
    wilaya_id = row["wilaya_code"].strip().zfill(2)
    name_ar = clean(row["commune_name"])
    daira_ar = clean(row["daira_name"])
    if not wilaya_id or not name_ar:
        continue
    bucket = communes.setdefault(wilaya_id, {})
    if name_ar not in bucket:
        bucket[name_ar] = {
            "id": f"{wilaya_id}-{row['id'].strip().zfill(4)}",
            "nameFr": name_ar,
            "nameAr": name_ar,
            "dairaAr": daira_ar,
        }

new_by_mother = {}
for row in new_commune_rows:
    wilaya_id = row["wilaya_numero"].strip().zfill(2)
    mother_id = row["wilaya_mere_numero"].strip().zfill(2)
    new_by_mother.setdefault(mother_id, set()).add(clean(row["commune_ar"]))

for mother_id, names in new_by_mother.items():
    bucket = communes.get(mother_id, {})
    for name in names:
        bucket.pop(name, None)

for row in new_commune_rows:
    wilaya_id = row["wilaya_numero"].strip().zfill(2)
    name_ar = clean(row["commune_ar"])
    name_fr = clean(row["commune_fr"]) or name_ar
    if not wilaya_id or not name_ar:
        continue
    bucket = communes.setdefault(wilaya_id, {})
    if name_ar not in bucket:
        bucket[name_ar] = {
            "id": f"{wilaya_id}-{len(bucket) + 1:04d}",
            "nameFr": name_fr,
            "nameAr": name_ar,
            "dairaAr": "",
        }

wilayas = []
for row in wilaya_rows:
    wilaya_id = row["numero"].strip().zfill(2)
    mother_raw = row["wilaya_mere_numero"].strip()
    mother_id = mother_raw.zfill(2) if mother_raw else ""
    is_new = clean(row["nouvelle_2026"]).lower() == "oui"
    stop_desk, home = tariff(wilaya_id, mother_id)
    declared_count = clean(row["nombre_communes"])
    wilayas.append({
        "id": wilaya_id,
        "nameFr": clean(row["wilaya_fr"]),
        "nameAr": clean(row["wilaya_ar"]),
        "isNew": is_new,
        "motherId": mother_id if is_new else "",
        "motherNameFr": clean(row["wilaya_mere_fr"]),
        "communeCount": int(declared_count) if declared_count else len(communes.get(wilaya_id, {})),
        "stopDesk": stop_desk,
        "home": home,
    })

communes_by_wilaya = {
    wilaya_id: sorted(bucket.values(), key=lambda item: item["nameAr"])
    for wilaya_id, bucket in sorted(communes.items())
}

payload = {"wilayas": wilayas, "communes": communes_by_wilaya}

content = f'''export type DeliveryType = "stopDesk" | "home";

export type Wilaya = {{
  id: string;
  nameFr: string;
  nameAr: string;
  isNew: boolean;
  motherId: string;
  motherNameFr: string;
  communeCount: number;
  stopDesk: number;
  home: number;
}};

export type Commune = {{
  id: string;
  nameFr: string;
  nameAr: string;
  dairaAr: string;
}};

export const WILAYAS: Wilaya[] = {json.dumps(wilayas, ensure_ascii=False, indent=2)};

export const COMMUNES_BY_WILAYA: Record<string, Commune[]> = {json.dumps(communes_by_wilaya, ensure_ascii=False, indent=2)};

export const WILAYA_BY_ID = Object.fromEntries(
  WILAYAS.map((wilaya) => [wilaya.id, wilaya]),
) as Record<string, Wilaya>;

export function getWilaya(id: string) {{
  return WILAYA_BY_ID[id];
}}

export function getCommunes(wilayaId: string) {{
  return COMMUNES_BY_WILAYA[wilayaId] ?? [];
}}

export function getWilayaLabel(id: string, lang: "ar" | "fr" = "ar") {{
  const wilaya = getWilaya(id);
  if (!wilaya) return id;
  return lang === "fr"
    ? `${{wilaya.id}} - ${{wilaya.nameFr}}`
    : `${{wilaya.id}} - ${{wilaya.nameAr}}`;
}}

export function getCommuneLabel(commune: Commune, lang: "ar" | "fr" = "ar") {{
  return lang === "fr" ? commune.nameFr : commune.nameAr;
}}

export function getBaseDeliveryFee(wilayaId: string, type: DeliveryType) {{
  const wilaya = getWilaya(wilayaId);
  if (!wilaya) return 0;
  return wilaya[type];
}}
'''

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
OUTPUT.write_text(content, encoding="utf-8")

print(f"wrote {OUTPUT.relative_to(ROOT)}")
print(f"wilayas: {len(wilayas)}")
print(f"communes: {sum(len(items) for items in communes_by_wilaya.values())}")
