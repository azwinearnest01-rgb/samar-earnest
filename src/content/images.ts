import type { StaticImageData } from "next/image";

import capitalIonic from "@/assets/images/capital-ionic.jpg";
import capitalsCorinthian from "@/assets/images/capitals-corinthian.jpg";
import colonnadeShadow from "@/assets/images/colonnade-shadow.jpg";
import colonnadeWarm from "@/assets/images/colonnade-warm.jpg";
import colonnadeWhite from "@/assets/images/colonnade-white.jpg";
import deskLampDark from "@/assets/images/desk-lamp-dark.jpg";
import facadeColumns from "@/assets/images/facade-columns.jpg";
import facadeCorner from "@/assets/images/facade-corner.jpg";
import facadeShutters from "@/assets/images/facade-shutters.jpg";
import fountainPen from "@/assets/images/fountain-pen.jpg";
import gothicDoorway from "@/assets/images/gothic-doorway.jpg";
import heroColonnade from "@/assets/images/hero-colonnade.jpg";
import libraryBusts from "@/assets/images/library-busts.jpg";
import pillaredHall from "@/assets/images/pillared-hall.jpg";
import privateOffice from "@/assets/images/private-office.jpg";
import telephone from "@/assets/images/telephone.jpg";
import waxSealEnvelopes from "@/assets/images/wax-seal-envelopes.jpg";
import waxSealLetter from "@/assets/images/wax-seal-letter.jpg";

/**
 * Image registry.
 *
 * TEMPORARY PHOTOGRAPHY: every image below is a placeholder sourced from
 * Unsplash (Unsplash Licence) and stored locally in src/assets/images so it
 * is optimised by next/image. To replace with commissioned photography, drop
 * the new file into src/assets/images, update the import, and revise `alt`.
 * Components reference images only by key, so nothing else needs to change.
 */
export type SiteImage = {
  src: StaticImageData;
  alt: string;
  /** Where the temporary image came from — remove once replaced. */
  source: string;
};

const unsplash = (id: string) => `https://unsplash.com/photos/${id}`;

export const images = {
  heroColonnade: {
    src: heroColonnade,
    alt: "A stone colonnade beneath a coffered ceiling, receding into shadow.",
    source: unsplash("photo-1568887759898-723db7949b52"),
  },
  colonnadeWarm: {
    src: colonnadeWarm,
    alt: "Fluted stone columns in warm afternoon light.",
    source: unsplash("photo-1551270029-4bc0f7eabf78"),
  },
  colonnadeShadow: {
    src: colonnadeShadow,
    alt: "A long colonnade casting regular bands of shadow across a stone floor.",
    source: unsplash("photo-1594025598468-f2ac06104cb6"),
  },
  colonnadeWhite: {
    src: colonnadeWhite,
    alt: "A row of pale fluted columns in soft light.",
    source: unsplash("photo-1532544847504-547ff5eac595"),
  },
  capitalsCorinthian: {
    src: capitalsCorinthian,
    alt: "Carved Corinthian capitals along a stone portico.",
    source: unsplash("photo-1658664209996-c52a32784ecb"),
  },
  capitalIonic: {
    src: capitalIonic,
    alt: "Close detail of a carved Ionic column capital.",
    source: unsplash("photo-1758820736219-8b4932f67918"),
  },
  facadeCorner: {
    src: facadeCorner,
    alt: "The carved corner of a classical stone building.",
    source: unsplash("photo-1640549755250-04d2751c5aba"),
  },
  facadeColumns: {
    src: facadeColumns,
    alt: "A commercial facade of tall stone columns and many windows.",
    source: unsplash("photo-1785732709734-f310f99a749e"),
  },
  facadeShutters: {
    src: facadeShutters,
    alt: "A sandstone building with open white shutters.",
    source: unsplash("photo-1774202240600-20b00d323a32"),
  },
  pillaredHall: {
    src: pillaredHall,
    alt: "A quiet pillared hall with a patterned stone floor.",
    source: unsplash("photo-1665322049384-e56e9ce06e68"),
  },
  deskLampDark: {
    src: deskLampDark,
    alt: "A dark wooden desk lit by a single lamp, with a telephone in shadow.",
    source: unsplash("photo-1770515853604-4487b6370bc1"),
  },
  privateOffice: {
    src: privateOffice,
    alt: "A private study with a desk, leather chair and bookshelves.",
    source: unsplash("photo-1767277680055-34f1eeec0c26"),
  },
  telephone: {
    src: telephone,
    alt: "A vintage rotary telephone against a dark blue wall.",
    source: unsplash("photo-1534536281715-e28d76689b4d"),
  },
  libraryBusts: {
    src: libraryBusts,
    alt: "Marble busts lining the shelves of a dark wooden library.",
    source: unsplash("photo-1505664194779-8beaceb93744"),
  },
  fountainPen: {
    src: fountainPen,
    alt: "A fountain pen writing in cursive on lined paper.",
    source: unsplash("photo-1455390582262-044cdead277a"),
  },
  waxSealLetter: {
    src: waxSealLetter,
    alt: "A red wax seal pressed onto a handwritten letter.",
    source: unsplash("photo-1642069526127-75907e007187"),
  },
  waxSealEnvelopes: {
    src: waxSealEnvelopes,
    alt: "Ivory envelopes closed with bronze wax seals.",
    source: unsplash("photo-1646568780058-e2c150d2bc6d"),
  },
  gothicDoorway: {
    src: gothicDoorway,
    alt: "A carved stone archway with heavy double wooden doors.",
    source: unsplash("photo-1786933638311-c6f606f6229d"),
  },
} as const satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;

export function getImage(key: ImageKey): SiteImage {
  return images[key];
}
