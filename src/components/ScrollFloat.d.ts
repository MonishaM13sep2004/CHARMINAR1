import type { RefObject } from "react";

export interface ScrollFloatProps {
  /** Heading text. Use "\n" for a line break. */
  children: string;
  /** Heading tag to render (default "h2"). */
  as?: "h1" | "h2" | "h3";
  className?: string;
  scrollContainerRef?: RefObject<HTMLElement | null>;
  animationDuration?: number;
  ease?: string;
  /** ScrollTrigger start, e.g. "top 90%" (plays once when reached). */
  scrollStart?: string;
  stagger?: number;
}

export default function ScrollFloat(props: ScrollFloatProps): JSX.Element;
