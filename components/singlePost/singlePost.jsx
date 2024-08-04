import Date from "../slayCard/date";
import Avatar from "./avatar";

const SinglePost = ({ title, imgUrl, name }) => {
  return (
    <section>
      <h1 className="text-4xl font-semibold text-[#181A2A]">{title}</h1>
      <div className="flex">
        <Avatar imgUrl={imgUrl} name={name} />
        <Date />
      </div>
      <img src={imgSrc} alt="" />
    </section>
  );
};
export default SinglePost;
