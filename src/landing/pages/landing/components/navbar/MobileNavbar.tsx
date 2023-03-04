import { Link } from 'react-router-dom';

import { NavLinks } from '../../../../../shared';
import { close, menu } from '../../../../../assets';

interface MobileNavbarProps {
  toggle: boolean;
  navLinks: NavLinks[];
  setToggle: (value: React.SetStateAction<boolean>) => void;
}

const MobileNavbar = ({ toggle, navLinks, setToggle }: MobileNavbarProps) => {
  return (
    <div className="sm:hidden flex flex-1 justify-end items-center">
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-7 h-7 object-contain cursor-pointer"
        onClick={() => setToggle(prev => !prev)}
      />
      <div
        className={`${
          toggle ? 'flex' : 'hidden'
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none flex justify-end items-center flex-1 flex-col">
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-3 last:mb-0`}
            >
              <Link to={id}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;