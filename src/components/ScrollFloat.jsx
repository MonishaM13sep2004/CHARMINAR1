import { useLayoutEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollFloat.css';

/*
 * ScrollFloat (react-bits), adapted for site-wide headings:
 * - `as` picks the heading tag; `className` keeps the site's heading styles
 *   (the demo's forced 10rem / 900 font is dropped)
 * - splits into words, then characters, so headings still wrap between words
 * - "\n" in the text renders a line break
 * - aria-label on the heading, split characters hidden from screen readers
 * - plays once when the heading enters the viewport instead of scrubbing with
 *   the scrollbar, so a heading can never be left half-hidden mid-screen
 * - ScrollTriggers are cleaned up on unmount; skipped for reduced motion
 */

const useIsoLayoutEffect = typeof window === 'undefined' ? () => {} : useLayoutEffect;

// One shared watcher: when the page's height changes (intro ends, images load,
// the offers stack resizes) re-measure every trigger so none waits at a stale spot.
let refreshObserver = null;
let refreshTimer = 0;
const watchLayout = () => {
  if (refreshObserver || typeof ResizeObserver === 'undefined') return;
  refreshObserver = new ResizeObserver(() => {
    clearTimeout(refreshTimer);
    refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 150);
  });
  refreshObserver.observe(document.body);
};

const ScrollFloat = ({
  children,
  as: Tag = 'h2',
  className = '',
  scrollContainerRef,
  animationDuration = 0.9,
  ease = 'back.out(2)',
  scrollStart = 'top 90%',
  stagger = 0.02
}) => {
  const containerRef = useRef(null);
  const text = typeof children === 'string' ? children : '';

  const content = useMemo(
    () =>
      text.split('\n').map((line, li) => (
        <span key={li}>
          {li > 0 && <br />}
          {line.split(' ').map((word, wi, words) => (
            <span key={wi}>
              <span className="scroll-float-word">
                {Array.from(word).map((char, ci) => (
                  <span className="char" key={ci}>
                    {char}
                  </span>
                ))}
              </span>
              {wi < words.length - 1 ? ' ' : null}
            </span>
          ))}
        </span>
      )),
    [text]
  );

  useIsoLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);
    watchLayout();
    const scroller = scrollContainerRef?.current ?? window;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll('.char'),
        {
          willChange: 'opacity, transform',
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: '50% 0%'
        },
        {
          duration: animationDuration,
          ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: scrollStart,
            once: true
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, [text, scrollContainerRef, animationDuration, ease, scrollStart, stagger]);

  return (
    <Tag ref={containerRef} className={`scroll-float ${className}`.trim()} aria-label={text.replace(/\n/g, ' ')}>
      <span className="scroll-float-text" aria-hidden="true">
        {content}
      </span>
    </Tag>
  );
};

export default ScrollFloat;
