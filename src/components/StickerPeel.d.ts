export default function StickerPeel(props: {
  imageSrc: string;
  rotate?: number;
  peelBackHoverPct?: number;
  peelBackActivePct?: number;
  peelEasing?: string;
  peelHoverEasing?: string;
  width?: number;
  shadowIntensity?: number;
  lightingIntensity?: number;
  initialPosition?: "center" | { x: number; y: number };
  peelDirection?: number;
  className?: string;
}): JSX.Element;
