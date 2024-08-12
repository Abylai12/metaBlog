import Date from "./date";
import SlayButton from "./slayButton";

const TextCard = ({ articleTitle, publishedDate, articleType }) => {
  return (
    <div className="p-10 rounded-xl w-[598px] h-[252px] bg-white absolute left-3 bottom-3">
      <SlayButton bgColor="bg-[#4B6BFB] text-white" buttonTitle={articleType} />
      <p className="mt-4 mb-6 text-4xl font-semibold">{articleTitle}</p>
      <Date date={publishedDate} />
    </div>
  );
};
export default TextCard;
