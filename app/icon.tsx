import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #f97316 0%, #f59e0b 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        fontWeight: 800,
        color: "white",
        letterSpacing: "-0.5px",
        fontFamily: "sans-serif",
      }}
    >
      NV
    </div>,
    { ...size }
  );
}
