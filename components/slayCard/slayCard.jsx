import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import TextCard from "./textCard";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "@/context/context";
const SlayCard = () => {
  const { searchValue } = useContext(MyContext);
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const getLatestArticles = async () => {
    const res = await fetch(`https://dev.to/api/articles?latest&per_page=5`);
    const data = await res.json();
    setArticles(data);
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
