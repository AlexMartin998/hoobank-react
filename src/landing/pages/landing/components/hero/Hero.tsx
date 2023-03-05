import { discount } from '../../../../../assets';
import { styles, useMediaQuery } from '../../../../../shared';
import { GetStarted } from './../';

const Hero = () => {
  const isMobile = useMediaQuery('(min-width: 620px)');

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 p-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 uppercase">
          <img src={discount} alt="" className="w-8 h-8" />

          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{' '}
            <span className="text-white">1 MONTH</span> account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span> Payment Method.
          </h1>
          {isMobile && (
            <div className="md:4 mr-0">
              <GetStarted />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
