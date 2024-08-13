import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import TextCard from "./textCard";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "@/context/context";
import Link from "next/link";
import { toast } from "react-toastify";
import Skeleton from "../loader/skeleton";
const SlayCard = () => {
  const { searchValue } = useContext(MyContext);
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const getLatestArticles = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`https://dev.to/api/articles?latest&per_page=5`);
      const data = await res.json();
      setArticles(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.warning("Интернет холболтоо шалгана уу");
    }
  };
  useEffect(() => {
    getLatestArticles();
  }, [currentIndex]);

  const moveRight = () => {
    setCurrentIndex(() =>
      currentIndex < articles.length - 1 ? currentIndex + 1 : 0
    );
  };

  const moveLeft = () => {
    setCurrentIndex(() =>
      currentIndex > 0 ? currentIndex - 1 : articles.length - 1
    );
  };
  return (
    <section
      className={`${!searchValue ? "" : "hidden"} max-w-[1220px] m-auto `}
    >
      <Link href={"/blog/" + articles[currentIndex]?.id}>
        {isLoading ? (
          <Skeleton />
        ) : (
          <div
            className="w-full h-[600px] bg-center bg-cover gradient relative rounded-xl"
            style={{
              backgroundImage: `url(${articles[currentIndex]?.cover_image})`,
            }}
          >
            <TextCard
              articleTitle={articles[currentIndex]?.title}
              publishedDate={articles[currentIndex]?.readable_publish_date}
              articleType={articles[currentIndex]?.type_of}
            />
          </div>
        )}
      </Link>
      <div className="text-right mt-4">
        <button onClick={moveLeft} className="text-4xl mr-2">
          <FaArrowAltCircleLeft />
        </button>
        <button onClick={moveRight} className="text-4xl ">
          <FaArrowAltCircleRight />
        </button>
      </div>
    </section>
  );
};
export default SlayCard;
