import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/site";
import { palette } from "@/theme/tokens";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social card. Replace with a designed card once brand assets are final. */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: palette.forest,
        color: palette.ivory,
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 20, color: palette.brass, fontSize: 20, letterSpacing: 6 }}
      >
        <div style={{ width: 48, height: 1, background: palette.brass }} />
        INDEPENDENT DIGITAL ADVISORY
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 84, letterSpacing: 14, display: "flex" }}>
          SAMAR <span style={{ color: palette.brass, margin: "0 28px" }}>&amp;</span> EARNEST
        </div>
        <div style={{ marginTop: 28, fontSize: 36, color: palette.stone }}>{siteConfig.tagline}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, color: palette.stone }}>
        <span>{siteConfig.origin}</span>
        <span style={{ color: palette.brass }}>S&amp;E</span>
      </div>
    </div>,
    size,
  );
}
