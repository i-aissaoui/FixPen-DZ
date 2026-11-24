import { SHADES, type Shade } from "./colors";
import { MAX_PENS } from "./pricing";

export type Selection = Record<string, number>;
export type SelectedLine = { shade: Shade; quantity: number };

export function getSelectionCount(selection: Selection) {
  return Object.values(selection).reduce((total, quantity) => total + quantity, 0);
}

export function buildSelectedLines(selection: Selection) {
  return Object.entries(selection)
    .map(([id, quantity]) => {
      const shade = SHADES.find((item) => item.id === id);
      return shade ? { shade, quantity } : null;
    })
    .filter((line): line is SelectedLine => line !== null && line.quantity > 0)
    .sort((a, b) => a.shade.code.localeCompare(b.shade.code));
}

export function expandSelection(selection: Selection) {
  const ids: string[] = [];
  const codes: string[] = [];

  Object.entries(selection).forEach(([id, quantity]) => {
    const shade = SHADES.find((item) => item.id === id);
    if (!shade) return;
    for (let index = 0; index < quantity; index += 1) {
      ids.push(shade.id);
      codes.push(shade.code);
    }
  });

  return { ids, codes };
}

export function changeSelection(selection: Selection, id: string, delta: number) {
  const current = selection[id] ?? 0;
  const next = current + delta;
  if (next < 0) return selection;
  if (getSelectionCount(selection) - current + next > MAX_PENS) return null;

  const updated = { ...selection };
  if (next === 0) delete updated[id];
  else updated[id] = next;
  return updated;
}
