import { Link } from 'react-router-dom';
import { NavLinks, useSmoothScroll } from '../../../../../shared';

interface DesktopNavProps {
  navLinks: NavLinks[];
  // setToggle: (value: React.SetStateAction<boolean>) => void;
}

const DesktopNav = ({ navLinks }: DesktopNavProps) => {
  const { scrollTo, setActiveClass } = useSmoothScroll();

  return (
    <ul className="list-none flex justify-end items-center flex-1">
      {navLinks.map(({ id, title }) => (
        <li
          key={id}
          className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite mr-10 last:mr-0 hover:text-white`}
        >
          <Link
            to={id}
            onClick={() => scrollTo(id)}
            className={setActiveClass(id)}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
