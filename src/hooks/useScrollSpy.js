import { useCallback, useEffect, useRef, useState } from 'react';

// Returns the id of the section the reader is currently on: the last section
// whose top has scrolled past ~30% of the viewport (or the last one, at the
// very bottom of the page). Sections inside a sticky sidebar are ignored on
// desktop, since they are always on screen.
export default function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  const lockUntil = useRef(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (Date.now() < lockUntil.current) return;
      const els = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .filter((el) => {
          const side = el.closest('.col-side');
          return !side || getComputedStyle(side).position !== 'sticky';
        })
        .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
      if (!els.length) return;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) return setActive(els[els.length - 1].id);
      const line = window.innerHeight * 0.3;
      let current = els[0].id;
      for (const el of els) if (el.getBoundingClientRect().top <= line) current = el.id;
      setActive(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ids.join('|')]);

  // Call when the user clicks a nav link so that section stays highlighted
  // while the smooth scroll runs (and even if the page can't scroll far enough).
  const select = useCallback((id) => {
    lockUntil.current = Date.now() + 1000;
    setActive(id);
  }, []);

  return [active, select];
}
