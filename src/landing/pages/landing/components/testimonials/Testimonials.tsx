import { feedback, styles } from '../../../../../shared';
import { FeedbackCard } from './../';

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    {/* gradient */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center flex-col md:flex-row mb-6 sm:mb-16 relative[1]">
      <h1 className={styles.heading2}>
        What people are <br className="hidden sm:block" /> saying about us
      </h1>

      <div className={`${styles.paragraph} text-left max-w-[450px]`}>
        <p>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[1]">
      {feedback.map(({ id, ...rest }) => (
        <FeedbackCard key={id} {...rest} />
      ))}
    </div>
  </section>
);

export default Testimonials;
