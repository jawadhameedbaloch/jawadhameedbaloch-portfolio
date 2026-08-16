import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [portraitHovering, setPortraitHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only on non-touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setVisible(true);
    let rafId: number;
    let mx = 0;
    let my = 0;
    let cx = 0;
    let cy = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const animate = () => {
      // Smooth interpolation
      cx += (mx - cx) * 0.15;
      cy += (my - cy) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${cx - 4}px, ${cy - 4}px, 0)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const onEnterInteractive = () => setHovering(true);
    const onLeaveInteractive = () => setHovering(false);
    
    const onEnterPortrait = () => setPortraitHovering(true);
    const onLeavePortrait = () => setPortraitHovering(false);

    const addListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, .card-interactive');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', onEnterInteractive);
        el.addEventListener('mouseleave', onLeaveInteractive);
      });
      return interactiveElements;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('portrait-enter', onEnterPortrait);
    window.addEventListener('portrait-leave', onLeavePortrait);
    
    rafId = requestAnimationFrame(animate);

    // Add hover listeners with MutationObserver to catch dynamic elements
    let elements = addListeners();
    const observer = new MutationObserver(() => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive);
        el.removeEventListener('mouseleave', onLeaveInteractive);
      });
      elements = addListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('portrait-enter', onEnterPortrait);
      window.removeEventListener('portrait-leave', onLeavePortrait);
      cancelAnimationFrame(rafId);
      observer.disconnect();
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive);
        el.removeEventListener('mouseleave', onLeaveInteractive);
      });
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={dotRef}
      className={`cursor-dot ${hovering ? 'hovering' : ''} ${portraitHovering ? 'portrait-hover' : ''}`}
      aria-hidden="true"
    />
  );
}
