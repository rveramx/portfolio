import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#0a0a12",
        color: "#ededed",
        backgroundImage:
          "radial-gradient(50% 60% at 80% 20%, rgba(99,102,241,.35), transparent 70%)",
      }}
    >
      <div style={{ fontSize: 64, fontWeight: 700 }}>{profile.name}</div>
      <div style={{ fontSize: 32, marginTop: 16, opacity: 0.7 }}>
        {profile.tagline}
      </div>
    </div>,
    size,
  );
}
