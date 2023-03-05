import { styles } from '../../../../../shared';

interface FeatureCardProps {
  icon: string;
  title: string;
  content: string;
}

const FeatureCard = ({ icon, title, content }: FeatureCardProps) => (
  <div
    className={'flex flex-row p-6 rounded-[20px] mb-6 last:mb-0 feature-card'}
  >
    <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-3/6 h-3/6 object-contain" />
    </div>

    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

export default FeatureCard;
