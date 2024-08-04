import SlayButton from "../slayCard/slayButton";
import Date from "../slayCard/date";

const LatesPostCard = ({ imgUrl, postText, buttonTitle }) => {
  return (
    <div className="p-4 border rounded-xl border-[#E8E8EA]">
      <img src={imgUrl} className="w-[360px] h-[240px] rounded-md" alt="img" />
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
