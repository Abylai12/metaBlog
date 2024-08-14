import LatestPost from "@/components/latesPost/latestPost";
import { useEffect, useState, useContext } from "react";
import { MyContext } from "@/context/context";

export default function BlogPost() {
  // const { searchValue, articles, handleClick, setCount } =
  //   useContext(MyContext);
  // useEffect(() => {
  //   setCount(15);
  // }, []);
  return (
    <section>
      <LatestPost
        style="hidden"
        // articles={articles}
        // searchValue={searchValue}
        // handleClick={handleClick}
      />
    </section>
  );
}
