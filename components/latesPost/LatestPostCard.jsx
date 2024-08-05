import SlayButton from "../slayCard/slayButton";
import Date from "../slayCard/date";
import Link from "next/link";

const LatesPostCard = ({ imgUrl, postText, buttonTitle }) => {
  return (
    <div className="p-4 border rounded-xl border-[#E8E8EA] w-[392px] ">
      <div className="overflow-hidden rounded-md h-[240px]">
        <img src={imgUrl} className="w-full" alt="img" />
      </div>
      <div className="mt-4">
        <SlayButton
          bgColor="bg-gray-100 text-[#4B6BFB]"
          buttonTitle={buttonTitle}
        />
        <p className="mt-4 mb-5">{postText}</p>
        <Date />
      </div>
    </div>
  );
};
export default LatesPostCard;
