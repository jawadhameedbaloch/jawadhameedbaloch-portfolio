import { useEffect, useState } from 'react';

const SECTIONS = ['top', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];

export function useActiveSection(): string {
  const [active, setActive] = useState('top');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
