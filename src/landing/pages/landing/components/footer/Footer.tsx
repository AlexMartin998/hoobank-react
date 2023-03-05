import { styles, footerLinks, socialMedia } from '../../../../../shared';
import { logo } from '../../../../../assets';

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank_logo"
          className="w-[265px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payments <br className="hidden sm:block" />
          easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap mt-10 md:mt-0">
        {footerLinks.map(({ title, links }) => (
          <div
            key={Math.random() + Math.random()}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]:"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {title}
            </h4>

            <nav>
              <ul className="list-none mt-4">
                {links.map(({ name }) => (
                  <li
                    key={name + Math.random()}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4 last:mb-0`}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center flex-col md:flex-row pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite">
        Copyright <span className="font-bold">Ⓒ</span>{' '}
        {new Date().getFullYear()} HooBank. All Rights Reserved.
      </p>

      <div className="flex mt-6 md:mt-0">
        {socialMedia.map(({ icon, id }) => (
          <button
            key={id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6 last:mr-0`}
          >
            <img src={icon} alt="social_icon" />
          </button>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
