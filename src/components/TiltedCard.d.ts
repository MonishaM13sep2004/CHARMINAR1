import type { ReactNode } from "react";

export default function TiltedCard(props: {
  imageSrc?: string;
  /** Tilt this content (e.g. a whole card) instead of an image. */
  children?: ReactNode;
  altText?: string;
  captionText?: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: ReactNode;
  displayOverlayContent?: boolean;
}): JSX.Element;
