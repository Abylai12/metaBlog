import LatestPost from "@/components/latesPost/latestPost";
import { useEffect, useState } from "react";

export default function BlogPost() {
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
      <LatestPost
        style="hidden"
        articles={articles}
        handleClick={handleClick}
      />
    </section>
  );
}
