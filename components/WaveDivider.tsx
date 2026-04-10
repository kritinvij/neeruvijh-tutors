type Props = {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
};

// Wave path uses viewBox 0 0 1440 80 — amplitude spans 0 to 80px
const WAVE_PATH = "M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z";

export default function WaveDivider({ topColor, bottomColor, flip = false }: Props) {
  return (
    <div className={`-mt-px leading-[0] ${topColor}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        className={`w-full block ${bottomColor}`}
        preserveAspectRatio="none"
        style={flip ? { transform: "scaleX(-1)" } : undefined}
      >
        <path d={WAVE_PATH} />
      </svg>
    </div>
  );
}
