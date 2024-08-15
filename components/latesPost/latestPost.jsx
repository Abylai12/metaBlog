import { useEffect, useContext } from "react";
import LatesPostCard from "./LatestPostCard";
import Links from "./links";
import { MyContext } from "@/context/context";
import Loader from "../loader/loader";

const LatestPost = ({ style }) => {
  const { searchValue, isLoading, articles, handleClick, setCount } =
    useContext(MyContext);
  useEffect(() => {
    setCount(9);
  }, []);

  return (
    <section className="max-w-[1250px] m-auto">
      <h1 className="font-bold text-2xl mb-8">All Blog Post</h1>
      <Links style={style} />
      <div className="flex flex-wrap justify-center gap-6 m-auto">
        {articles
          .filter((el) => el?.title.toLowerCase().includes(searchValue))
          .map(({ type_of, title, cover_image, readable_publish_date, id }) => (
            <LatesPostCard
              key={id}
              imgUrl={cover_image}
              postText={title}
              buttonTitle={type_of}
              date={readable_publish_date}
              id={id}
            />
          ))}
        {isLoading && <Loader />}
      </div>
      <div className="w-100 text-center my-[112px] ">
        <button
          onClick={handleClick}
          className="border rounded-md py-3 px-5 border-[#E8E8EA] font-medium text-[#696A75]"
        >
          Load More
        </button>
      </div>
    </section>
  );
};
export default LatestPost;
