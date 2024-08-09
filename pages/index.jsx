import LatestPost from "@/components/latesPost/latestPost";
import SlayCard from "@/components/slayCard/slayCard";
import TrendingPost from "@/components/trendingPost";
import { useEffect, useState, useContext, createContext } from "react";
import { MyContext } from "@/context/context";

export default function Home() {
  const { searchValue, articles, handleClick, setCount } =
    useContext(MyContext);
  useEffect(() => {
    setCount(9);
  }, []);

  return (
    <section>
      <SlayCard />
      <TrendingPost />
      <LatestPost
        articles={articles}
        searchValue={searchValue}
        handleClick={handleClick}
      />
    </section>
  );
}
