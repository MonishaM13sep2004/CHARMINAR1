import { useLayoutEffect, useRef } from 'react';
import './ScrollStack.css';

/*
 * ScrollStack (react-bits), adapted for window scrolling inside a normal page:
 * - driven by native window scroll + rAF (no Lenis hijacking the whole page)
 * - card offsets are measured once with transforms cleared, so a card's own
 *   translate never feeds back into its position (no jitter)
 * - scoped to this instance's cards, and the bottom padding is sized to the
 *   distance the stack actually travels instead of a fixed 50rem
 * - honours prefers-reduced-motion (cards simply render as a list)
 */

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const toPx = (value, viewportHeight) =>
  typeof value === 'string' && value.includes('%')
    ? (parseFloat(value) / 100) * viewportHeight
    : parseFloat(value);

const progress = (value, start, end) => {
  if (value <= start) return 0;
  if (value >= end) return 1;
  return (value - start) / (end - start);
};

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  onStackComplete
}) => {
  const rootRef = useRef(null);
  const onStackCompleteRef = useRef(onStackComplete);
  onStackCompleteRef.current = onStackComplete;

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const inner = root.querySelector('.scroll-stack-inner');
    const end = root.querySelector('.scroll-stack-end');
    const cards = Array.from(root.querySelectorAll('.scroll-stack-card'));
    if (!cards.length) return;

    cards.forEach((card, i) => {
      card.style.marginBottom = i < cards.length - 1 ? `${itemDistance}px` : '';
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let offsets = [];
    let endTop = 0;
    let frame = 0;
    let completed = false;
    const last = new Map();

    const measure = () => {
      cards.forEach(card => {
        card.style.transform = '';
        card.style.filter = '';
      });
      last.clear();
      offsets = cards.map(card => card.getBoundingClientRect().top + window.scrollY);
      endTop = end.getBoundingClientRect().top + window.scrollY;

      // Room for the pinned stack to travel before it releases with the page
      const h = window.innerHeight;
      const lastIndex = cards.length - 1;
      const lastPinStart = offsets[lastIndex] - toPx(stackPosition, h) - itemStackDistance * lastIndex;
      const travel = endTop - h / 2 - lastPinStart;
      inner.style.paddingBottom = `${Math.max(0, travel)}px`;
    };

    const update = () => {
      frame = 0;
      const scrollTop = window.scrollY;
      const h = window.innerHeight;
      const stackPx = toPx(stackPosition, h);
      const scaleEndPx = toPx(scaleEndPosition, h);
      const pinEnd = endTop - h / 2;

      let topIndex = 0;
      if (blurAmount) {
        offsets.forEach((top, j) => {
          if (scrollTop >= top - stackPx - itemStackDistance * j) topIndex = j;
        });
      }

      cards.forEach((card, i) => {
        const cardTop = offsets[i];
        const pinStart = cardTop - stackPx - itemStackDistance * i;
        const p = progress(scrollTop, pinStart, cardTop - scaleEndPx);
        const scale = 1 - p * (1 - (baseScale + i * itemScale));
        const rotation = rotationAmount ? i * rotationAmount * p : 0;
        const blur = blurAmount && i < topIndex ? (topIndex - i) * blurAmount : 0;

        let translateY = 0;
        if (scrollTop >= pinStart && scrollTop <= pinEnd) translateY = scrollTop - pinStart;
        else if (scrollTop > pinEnd) translateY = pinEnd - pinStart;

        const next = {
          y: Math.round(translateY * 100) / 100,
          s: Math.round(scale * 1000) / 1000,
          r: Math.round(rotation * 100) / 100,
          b: Math.round(blur * 100) / 100
        };
        const prev = last.get(i);
        if (!prev || prev.y !== next.y || prev.s !== next.s || prev.r !== next.r || prev.b !== next.b) {
          card.style.transform = `translate3d(0, ${next.y}px, 0) scale(${next.s}) rotate(${next.r}deg)`;
          card.style.filter = next.b > 0 ? `blur(${next.b}px)` : '';
          last.set(i, next);
        }

        if (i === cards.length - 1) {
          const inView = scrollTop >= pinStart && scrollTop <= pinEnd;
          if (inView && !completed) {
            completed = true;
            onStackCompleteRef.current?.();
          } else if (!inView && completed) {
            completed = false;
          }
        }
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    // Images/fonts loading above the stack shift its position: re-measure
    const observer = new ResizeObserver(onResize);
    observer.observe(document.body);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
      inner.style.paddingBottom = '';
      cards.forEach(card => {
        card.style.transform = '';
        card.style.filter = '';
      });
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount
  ]);

  return (
    <div className={`scroll-stack ${className}`.trim()} ref={rootRef}>
      <div className="scroll-stack-inner">
        {children}
        {/* Marker: the stack releases once this reaches mid-viewport */}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
