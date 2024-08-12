import SlayButton from "../slayCard/slayButton";

const TrendPostCard = ({ imgUrl, tPostText, buttonTitle }) => {
  return (
    <div
      className="relative rounded-xl w-[293px] h-[320px] bg-blend-darken gradient"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bottom-5 left-4">
        <SlayButton
          bgColor="bg-[#4B6BFB] text-white"
          buttonTitle={buttonTitle}
        />
        <p className="mt-4 h-[56px] overflow-scroll font-semibold text-lg text-white">
          {tPostText}
        </p>
      </div>
    </div>
  );
};
export default TrendPostCard;
