/**
 * Brand tokens for non-CSS consumers (Open Graph image, manifest, JSON-LD).
 * The canonical CSS tokens live in src/app/globals.css under @theme —
 * keep both in step when the palette changes.
 */
export const palette = {
  forest: "#17211D",
  ivory: "#F2ECDD",
  paper: "#EAE3D2",
  ink: "#171815",
  oxblood: "#5B302F",
  brass: "#A68A5B",
  brassDeep: "#7A6438",
  stone: "#A59E90",
  stoneDeep: "#66614F",
} as const;

export type PaletteColour = keyof typeof palette;
