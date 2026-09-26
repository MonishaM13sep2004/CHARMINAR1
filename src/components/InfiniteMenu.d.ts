export interface InfiniteMenuItem {
  image: string;
  title: string;
  description: string;
  /** Optional URL or internal path; the arrow button only shows when set. */
  link?: string;
  /** Optional badge shown above the title, e.g. "01". */
  step?: string;
}

export interface InfiniteMenuProps {
  items?: InfiniteMenuItem[];
  scale?: number;
  backgroundColor?: string;
  /** Controlled mode: rotate the sphere to this item. Dragging still works until it changes. */
  activeIndex?: number | null;
}

export default function InfiniteMenu(props: InfiniteMenuProps): JSX.Element;
