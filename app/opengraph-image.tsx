import { ImageResponse } from "next/og";

export const alt = "Neeru Vijh | Maths & Science Tutor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f97316 0%, #f59e0b 100%)",
          padding: "64px",
          position: "relative",
        }}
      >
        {/* Subtle dot grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
            position: "relative",
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              color: "white",
              letterSpacing: "-2px",
              lineHeight: 1.05,
              fontFamily: "Georgia, 'Times New Roman', serif",
              textShadow: "0 2px 16px rgba(0,0,0,0.12)",
            }}
          >
            Neeru Vijh
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 34,
              color: "rgba(255,255,255,0.92)",
              marginTop: 12,
              fontWeight: 500,
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            Maths &amp; Science Tutor
          </div>

          {/* Credential pills */}
          <div
            style={{
              display: "flex",
              gap: 14,
              marginTop: 36,
            }}
          >
            {[
              "38 Years of Teaching",
              "Fulbright Scholar 2015",
              "Delhi State Award 2022",
            ].map((label) => (
              <div
                key={label}
                style={{
                  background: "rgba(255,255,255,0.22)",
                  border: "1.5px solid rgba(255,255,255,0.45)",
                  borderRadius: 999,
                  padding: "10px 24px",
                  color: "white",
                  fontSize: 20,
                  fontWeight: 600,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.72)",
              marginTop: 28,
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            CBSE &nbsp;&middot;&nbsp; ICSE &nbsp;&middot;&nbsp; Online &nbsp;&middot;&nbsp; English &amp; Hindi Medium
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
