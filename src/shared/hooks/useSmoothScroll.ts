import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type UseSmoothScroll = {
  activeNav: string;
  setActiveNav: (sectionId: string) => void;
  scrollTo: (sectionId: string) => void;
  setActiveClass: (hash: string) => string;
};

export const useSmoothScroll = (): UseSmoothScroll => {
  const location = useLocation();
  const pathName = location.pathname.substring(1);
  const [activeNav, setActiveNav] = useState<string>(pathName || '');

  const scrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section &&
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });

    setActiveNav(`${sectionId}`);
  };

  const setActiveClass = (hash: string) =>
    activeNav === hash ? 'text-white' : '';

  useEffect(() => {
    const section = document.getElementById(pathName);

    pathName &&
      section &&
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  }, [pathName]);

  return { activeNav, setActiveNav, scrollTo, setActiveClass };
};
