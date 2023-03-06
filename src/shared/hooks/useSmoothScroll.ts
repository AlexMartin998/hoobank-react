import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollOptions = {
  behavior?: 'auto' | 'smooth';
  block?: 'start' | 'center' | 'end' | 'nearest';
  inline?: 'start' | 'center' | 'end' | 'nearest';
};

type UseSmoothScroll = {
  activeNav: string;
  setActiveNav: (sectionId: string) => void;
  scrollTo: (sectionId: string, options?: ScrollOptions) => void;
  setActiveClass: (hash: string) => string;
};

export const useSmoothScroll = (): UseSmoothScroll => {
  const location = useLocation();
  const pathName = location.pathname.substring(1);
  const [activeNav, setActiveNav] = useState<string>(pathName || '');

  const scrollTo = (sectionId: string, options?: ScrollOptions) => {
    const section = document.getElementById(sectionId);
    section &&
      section.scrollIntoView({
        behavior: options?.behavior || 'smooth',
        block: options?.block || 'start',
        inline: options?.inline || 'nearest',
      });

    setActiveNav(`${sectionId}`);
  };

  const setActiveClass = (hash: string) =>
    activeNav === hash ? 'text-white' : '';

  useEffect(() => {
    const section = document.getElementById(pathName);
    section &&
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  }, [pathName]);

  return { activeNav, setActiveNav, scrollTo, setActiveClass };
};
