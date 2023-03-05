import { discount, robot } from '../../../../../assets';
import { styles, useMediaQuery } from '../../../../../shared';
import { GetStarted } from './../';

const Hero = () => {
  const isMobile = useMediaQuery('(max-width: 620px)');

  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row  ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img
            src={discount}
            alt="discount"
            className="w-[32px] h-[32px]"
            draggable={false}
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{' '}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>
            <br />
          </h1>
          {!isMobile && (
            <div className="md:4 mr-0">
              <GetStarted />
            </div>
          )}
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      {/* rigth */}
      <div
        // relative for gradient on the right side only
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
          // prevent drag and drop images in html5
          draggable={false}
        />

        {/* gradient */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      {isMobile && (
        <div className={`${styles.flexCenter}`}>
          <GetStarted />
        </div>
      )}
    </section>
  );
};

export default Hero;
