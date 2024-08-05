import Date from "../slayCard/date";
import Avatar from "./avatar";

const SinglePostCard = ({
  titlePost,
  imgUrl,
  name,
  imgSrc,
  paragraph_01,
  paragraph_02,
  par_title01,
  par_title02,
  paragraph_03,
  paragraph_04,
  paragraph_05,
  paragraph_06,
}) => {
  return (
    <section className="my-10">
      <div className="max-w-[1200px] m-auto flex flex-col gap-5">
        <h1 className="text-4xl font-semibold text-[#181A2A]">{titlePost}</h1>
        <div className="flex">
          <Avatar imgUrl={imgUrl} name={name} className="w-7 h-7" />
          <Date />
        </div>
        <img src={imgSrc} alt="img" />
        <p>{paragraph_01}</p>
        <p>{paragraph_02}</p>
        <span className="font-semibold text-2xl">{par_title01}</span>
        <p>{paragraph_03}</p>
        <p>{paragraph_04}</p>
        <span className="font-semibold text-2xl">{par_title02}</span>
        <p>{paragraph_05}</p>
        <p>{paragraph_06}</p>
      </div>
    </section>
  );
};
export default SinglePostCard;
