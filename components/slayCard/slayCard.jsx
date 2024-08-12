import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import TextCard from "./textCard";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "@/context/context";
const SlayCard = () => {
  const { searchValue } = useContext(MyContext);
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(1);
  const getLatestArticles = async () => {
    const res = await fetch(
      `https://dev.to/api/articles?latest&per_page=${count}`
    );
    const data = await res.json();
    setArticles(data);
  };
  useEffect(() => {
    getLatestArticles();
  }, [count]);

  return (
    <section
      className={`${!searchValue ? "" : "hidden"} max-w-[1220px] m-auto `}
    >
      <div
        className="w-full h-[600px] bg-center bg-cover gradient relative rounded-xl"
        style={{
          backgroundImage: `url(${articles[0].cover_image})`,
        }}
      >
        <TextCard />
      </div>

      <div className="text-right mt-4">
        <button className="text-4xl mr-2">
          <FaArrowAltCircleLeft />
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="text-4xl "
        >
          <FaArrowAltCircleRight />
        </button>
      </div>
    </section>
  );
};
export default SlayCard;
