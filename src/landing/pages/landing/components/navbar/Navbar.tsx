import { useState } from 'react';
import { Link } from 'react-router-dom';

import { logo } from '../../../../../assets';
import { navLinks } from '../../../../../shared';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map(({ id, title }) => (
          <li
            key={id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 last:mr-0`}
          >
            <Link to={id}>{title}</Link>
          </li>
        ))}
      </ul>

      <MobileNavbar {...{ toggle, navLinks, setToggle }} />
    </nav>
  );
};

export default Navbar;
