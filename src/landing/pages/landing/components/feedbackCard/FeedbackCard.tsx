import { quotes } from '../../../../../assets';

interface FeedbackCardProps {
  content: string;
  name: string;
  title: string;
  img: string;
}

const FeedbackCard = ({ content, name, title, img }: FeedbackCardProps) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] mr-0 sm:mr-5 md:mr-10 my-5 feedback-card">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42px] h-[27px] object-contain"
    />

    <p className="font-poppins font-normal text-[18px] leading-8 text-white my-10">
      {content}
    </p>

    <div className="flex flex-row gap-4">
      <img src={img} alt={name} className="w-12 h-12 rounded-full" />
      <div className="flex flex-col">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
