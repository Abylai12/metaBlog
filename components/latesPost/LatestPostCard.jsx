import SlayButton from "../slayCard/slayButton";
import Date from "../slayCard/date";
import Link from "next/link";

const LatesPostCard = ({ imgUrl, postText, buttonTitle, id, date }) => {
  return (
    <Link href={"/blog/" + id}>
      <div className="p-4 border rounded-xl border-[#E8E8EA] w-[392px] h-[345px] flex flex-col justify-between">
        <div className="rounded-md">
          <img
            src={imgUrl ? imgUrl : "./images/Union.png"}
            className="w-full max-h-[151px]"
            alt="img"
          />
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div>
            <SlayButton
              bgColor="bg-gray-100  mb-2 text-[#4B6BFB]"
              buttonTitle={buttonTitle}
            />
          </div>
          <p className="h-[48px] overflow-scroll font-bold">{postText}</p>
          <Date date={date} />
        </div>
      </div>
    </Link>
  );
};
export default LatesPostCard;
