import TrendPostCard from "./tPostCard";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "@/context/context";
import { toast } from "react-toastify";
import Loader from "../loader/loader";

const TrendingPost = () => {
  const { searchValue } = useContext(MyContext);
  const [trendArticle, setTrendArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const trendArticles = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://dev.to/api/articles?top=1&per_page=4");
      const data = await res.json();
      setTrendArticle(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.warning("Интернет холболтоо шалгана уу");
    }
  };
  useEffect(() => {
    trendArticles();
  }, []);
  return (
    <section className="max-w-[1200px] m-auto mb-8">
      <h1 className="font-bold text-2xl mb-8">Trending</h1>
      <div className="flex gap-6 w-full">
        {isLoading ? (
          <Loader />
        ) : (
          trendArticle
            ?.filter((el) => el?.title.toLowerCase().includes(searchValue))
            .map(({ cover_image, title, type_of, id }, idx) => (
              <TrendPostCard
                key={idx}
                imgUrl={cover_image}
                tPostText={title}
                buttonTitle={type_of}
                id={id}
              />
            ))
        )}
      </div>
    </section>
  );
};
export default TrendingPost;
