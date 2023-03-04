import { Link } from 'react-router-dom';
import { NavLinks } from '../../../../../shared';

interface DesktopNavProps {
  navLinks: NavLinks[];
  // setToggle: (value: React.SetStateAction<boolean>) => void;
}

const DesktopNav = ({ navLinks }: DesktopNavProps) => {
  return (
    <ul className="list-none flex justify-end items-center flex-1">
      {navLinks.map(({ id, title }) => (
        <li
          key={id}
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 last:mr-0`}
        >
          <Link to={id}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
