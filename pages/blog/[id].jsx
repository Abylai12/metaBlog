import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Date from "@/components/slayCard/date";
import { MyContext } from "@/context/context";

const ArticleDetail = ({ articleDetail }) => {
  // const { query } = useRouter();
  // const [articleDetail, setArticleDetail] = useState(null);

  // const getArticleById = async (id) => {
  //   const res = await fetch(`https://dev.to/api/articles/${id}`);
  //   const data = await res.json();
  //   setArticleDetail(data);
  // };
  // useEffect(() => {
  //   if (query.id) {
  //     getArticleById(query.id);
  //   }
  // }, [query.id]);
  return (
    <div className="max-w-[1220px] m-auto">
      <div className="flex gap-3">
        <img
          className="w-10 h-10 rounded-full"
          src={articleDetail?.user?.profile_image}
          alt="img"
        />
        <div className="">
          <h2>{articleDetail?.user.name}</h2>
          <Date date={articleDetail?.published_at.slice(0, 10)} />
        </div>
      </div>
      <div
        className="blog-detail flex flex-col gap-10 my-4"
        dangerouslySetInnerHTML={{ __html: articleDetail?.body_html }}
      ></div>
    </div>
  );
};
export async function getServerSideProps(context) {
  const res = await fetch(`https://dev.to/api/articles/${context.query.id}`);
  const articleDetail = await res.json();
  console.log("articleDetail", articleDetail);
  return { props: { articleDetail } };
}
export default ArticleDetail;
