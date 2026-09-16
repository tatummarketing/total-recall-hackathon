import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Total Recall — Tatum x Walrus Memory Hackathon · $4,000 prize pool";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fontDir = join(process.cwd(), "public/assets/og/fonts");
  const [tatumBuf, walrusBuf, orbitronBold, poppinsSemi] = await Promise.all([
    readFile(join(process.cwd(), "public/assets/og/tatum-logo.png")),
    readFile(join(process.cwd(), "public/assets/og/walrus-logo.png")),
    readFile(join(fontDir, "Orbitron-ExtraBold.ttf")),
    readFile(join(fontDir, "Poppins-SemiBold.ttf")),
  ]);

  const tatumLogo = `data:image/png;base64,${tatumBuf.toString("base64")}`;
  const walrusLogo = `data:image/png;base64,${walrusBuf.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          background: "#0B0C20",
          color: "white",
          fontFamily: "Poppins",
        }}
      >
        {/* Nebula washes */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 55% at 18% 78%, rgba(44,205,154,0.22), transparent 60%), radial-gradient(ellipse 65% 50% at 88% 18%, rgba(79,55,253,0.38), transparent 55%), radial-gradient(ellipse 50% 40% at 55% 100%, rgba(28,30,79,0.9), transparent 50%)",
          }}
        />

        {/* Starfield */}
        {[
          [80, 70],
          [160, 140],
          [240, 50],
          [340, 200],
          [420, 90],
          [520, 160],
          [640, 40],
          [720, 220],
          [830, 80],
          [940, 150],
          [1040, 60],
          [1120, 190],
          [180, 300],
          [300, 380],
          [480, 340],
          [610, 420],
          [760, 360],
          [900, 400],
          [1000, 320],
          [1100, 450],
          [70, 480],
          [220, 520],
          [400, 560],
          [980, 540],
        ].map(([x, y], i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: i % 4 === 0 ? 3 : 2,
              height: i % 4 === 0 ? 3 : 2,
              borderRadius: 999,
              background: "rgba(255,255,255,0.55)",
            }}
          />
        ))}

        {/* Purple ringed planet — upper right */}
        <div
          style={{
            position: "absolute",
            right: -40,
            top: -60,
            width: 280,
            height: 280,
            borderRadius: 999,
            background:
              "radial-gradient(circle at 32% 28%, #9B8CFF 0%, #4F37FD 42%, #1C1E4F 78%, #0B0C20 100%)",
            boxShadow: "0 0 80px rgba(79,55,253,0.45)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -10,
            top: 70,
            width: 320,
            height: 48,
            borderRadius: 999,
            border: "3px solid rgba(155,140,255,0.55)",
            transform: "rotate(-18deg)",
            display: "flex",
          }}
        />

        {/* Green planet — lower left */}
        <div
          style={{
            position: "absolute",
            left: -70,
            bottom: -90,
            width: 260,
            height: 260,
            borderRadius: 999,
            background:
              "radial-gradient(circle at 35% 30%, #7DFFD0 0%, #2CCD9A 40%, #0F3D32 75%, #0B0C20 100%)",
            boxShadow: "0 0 70px rgba(44,205,154,0.35)",
            display: "flex",
          }}
        />

        {/* Smaller navy planet */}
        <div
          style={{
            position: "absolute",
            left: 210,
            top: 70,
            width: 72,
            height: 72,
            borderRadius: 999,
            background:
              "radial-gradient(circle at 30% 28%, #5A5FBF 0%, #1C1E4F 70%, #0B0C20 100%)",
            opacity: 0.9,
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "56px 72px",
            width: "100%",
            height: "100%",
            gap: 28,
          }}
        >
          {/* Logo lockup — explicit widths for Satori */}
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={walrusLogo} width={198} height={46} />
            <div
              style={{
                color: "#2CCD9A",
                fontSize: 28,
                fontFamily: "Orbitron",
                fontWeight: 700,
                display: "flex",
              }}
            >
              ×
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={tatumLogo} width={225} height={46} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div
              style={{
                fontFamily: "Orbitron",
                fontWeight: 800,
                fontSize: 72,
                letterSpacing: 6,
                color: "#2CCD9A",
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              HACKATHON
            </div>
            <div
              style={{
                fontFamily: "Orbitron",
                fontWeight: 700,
                fontSize: 48,
                letterSpacing: 4,
                lineHeight: 1.05,
                textTransform: "uppercase",
                display: "flex",
                gap: 14,
              }}
            >
              <span style={{ color: "white" }}>TOTAL</span>
              <span style={{ color: "#2CCD9A" }}>RECALL</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", gap: 40 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div
                style={{
                  fontFamily: "Orbitron",
                  fontWeight: 800,
                  fontSize: 64,
                  color: "#2CCD9A",
                  lineHeight: 1,
                }}
              >
                $4,000
              </div>
              <div
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: 22,
                  color: "rgba(255,255,255,0.7)",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                prize pool
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                paddingBottom: 6,
              }}
            >
              <div
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: 22,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                Memory Hackathon
              </div>
              <div
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: 20,
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                13 Oct – 3 Nov 2026 · Online
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Orbitron", data: orbitronBold, style: "normal", weight: 700 },
        { name: "Orbitron", data: orbitronBold, style: "normal", weight: 800 },
        { name: "Poppins", data: poppinsSemi, style: "normal", weight: 500 },
        { name: "Poppins", data: poppinsSemi, style: "normal", weight: 600 },
      ],
    }
  );
}
