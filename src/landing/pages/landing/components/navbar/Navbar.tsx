import { logo } from '../../../../../assets';
import { navLinks, useMediaQuery } from '../../../../../shared';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNavbar';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width: 704px)');

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      {!isMobile ? (
        <DesktopNav navLinks={navLinks} />
      ) : (
        <MobileNav navLinks={navLinks} />
      )}
    </nav>
  );
};

export default Navbar;
