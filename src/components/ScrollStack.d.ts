import type { ReactNode } from "react";

export interface ScrollStackItemProps {
  children?: ReactNode;
  itemClassName?: string;
}

export function ScrollStackItem(props: ScrollStackItemProps): JSX.Element;

export interface ScrollStackProps {
  children?: ReactNode;
  className?: string;
  /** Gap between cards before they stack (px). */
  itemDistance?: number;
  /** Extra scale per card deeper in the stack. */
  itemScale?: number;
  /** Vertical offset between stacked cards (px). */
  itemStackDistance?: number;
  /** Where cards pin, as % of viewport height or px. */
  stackPosition?: string;
  /** Where the scale-down finishes, as % of viewport height or px. */
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  onStackComplete?: () => void;
}

export default function ScrollStack(props: ScrollStackProps): JSX.Element;
