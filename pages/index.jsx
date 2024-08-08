import LatestPost from "@/components/latesPost/latestPost";
import SlayCard from "@/components/slayCard/slayCard";
import TrendingPost from "@/components/trendingPost";
import { useEffect, useState, useContext, createContext } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(9);
  const getArrticles = async () => {
    const res = await fetch(
      `https://dev.to/api/articles?page=1&per_page=${count}`
    );
    const data = await res.json();
    setArticles(data);
  };
  useEffect(() => {
    getArrticles();
  }, [count]);
  const handleClick = () => {
    setCount(count + 3);
    console.log("clicked");
  };

  return (
    <section>
      <SlayCard />
      <TrendingPost />
      <LatestPost articles={articles} handleClick={handleClick} />
    </section>
  );
}
