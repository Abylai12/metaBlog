import { IoChevronBack } from "react-icons/io5";
import TrendPostCard from "./tPostCard";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "@/context/context";
// const trendPostList = [
//   {
//     cover_image:
//       "https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UaeMflZthJbLWO4fYsZntkBYw9rNFb8XF0N4QTPygrA3NbQfKmVjyBT43L3NtwomjDqKhDlbJsWPGVzqtTk5s6DxBUnmxS2tPR0TDzyvSgvZ1fkL50fgU6mMH7T5EwrGRw6Dy0QfsT9WBJP4yOTbIJbhTsFYa0BICBUSoyNpC4Pip5ixKd3VSAFGx2lpcXFE7cSIb-jnp0Ll47nkLb-6uL42hJqR6VlnMbXyA-GNs~QJtijBPezcUQgBTP0JHXdvbLy~A-ivgcbi~pyD7fur5BETw0~rwRnhIvSMo1NH0kk1FUuZoq8O-HywzprAItNw-840kN~WPHoGZep-5Kv-Mg__",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     type_of: "technlogoy",
//   },
//   {
//     cover_image:
//       "https://s3-alpha-sig.figma.com/img/8d5b/3c3e/9c1f18bc8db1dc4de14eac308e1e1594?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Up1UjbIb8UkXAq13uy78wMlhPVFbXOBtxkEIfKTniv-9cK9wD1BCKy~u17SvM58CE7s2cyadOzcpJNluFWGYEgL1VhWvSMDEz9zhq1ARs3jNRG6wqT4oUSgeKRUKdcdnNM76EDRc2y3dVarljF6QkndkIyPDXiqo3aJAyP~qkDcQdCwffrMWwkGpnE0T0EFmapOwv0KOyWG97FRZhzeHFp5uoJXKzcTe6-u89TnVacBd84IsyOM6fb~8M8ZKHsnB48WKAlCQe5wKGkjnn-6xo4VrB-waO~rDoDGYcS5TXhVIjGLzKNjeEOQ8tIOFRe8yYwB9HgCyDMrIVsAB~rjztw__",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     buttonTitle: "technlogoy",
//   },
//   {
//     cover_image:
//       "https://s3-alpha-sig.figma.com/img/a7b0/86f2/c97b173ebc05fa8f9660788e8e0971b9?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Njs2WSAzJvjO4l~ReEcgG2yyIX0xnySl5E0ktv6ifS9xscjtDSHD0B~a-BRX5X4v5rXYonNYU46EvBNMMzOl0v1V2hclCr9ziqpR4~x53BKLgf7UU4u1MGBTAiyKeAUdabAad4CGvMtg3in~F22YZlpp~cB9blH149gB~d4LgTY7aspjxVGXOGQhWsrltfC~px154a2REOPEMYIKL3mTHHzWYxHxeqFq-Ld4mKU7XpWHfyOmR0-NppyJ1UrDwpCDOq1NrMGdSyTsFv1DldKhzVP3VLXe6x39EVtGH4FAJ2UewRL3zp7Do4otFexSwLpRKJd-cHC8fe7VX2a9vraj4g__",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     typeof: "technlogoy",
//   },
//   {
//     cover_image:
//       "https://s3-alpha-sig.figma.com/img/21a4/f878/0943144e7126909a96868bd7542caf21?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nu8hSaH2GoGH4o4HLrTwAuuZzx0UGaW8V2p1OmrFZ49mMTUHJvL~P0RQ~XFKxfKhBn9DFf3a1eX6sIHpxjBQy3N2oMxkNQDUK6tFgtO3irT3ITBd5abXnf1yBSCQ6xD8qdIgfDOoGYIjCoZ1~yl81dGmI6O0S4KAUK2QXKC1rdqSt8xx8MT~75LRHrI-LLo6Q3Hx59wU~lqabCADiQqYRdZwRFwoZVdep4mhTdy8yT6b72Mm~j1oUbLBpEPC-2nDVfzrYF-pTkh21ORtlh0o78yjCqLZlGfsoCyZd7or75R3c0NW-SWU~TVJH3tBZ2dqOL8yEuw7sNvmS48h-oCAQQ__",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     typeof: "technlogoy",
//   },
// ];
const TrendingPost = () => {
  const { searchValue } = useContext(MyContext);
  const [trendArticle, setTrendArticle] = useState([]);
  const trendArticles = async () => {
    const res = await fetch("https://dev.to/api/articles?top=1&per_page=4");
    const data = await res.json();
    setTrendArticle(data);
  };
  useEffect(() => {
    trendArticles();
  }, []);
  return (
    <section className="max-w-[1200px] m-auto mb-8">
      <h1 className="font-bold text-2xl mb-8">Trending</h1>
      <div className="flex gap-6 w-full">
        {trendArticle
          ?.filter((el) => el?.title.toLowerCase().includes(searchValue))
          .map(({ cover_image, title, type_of }, idx) => (
            <TrendPostCard
              key={idx}
              imgUrl={cover_image}
              tPostText={title}
              buttonTitle={type_of}
            />
          ))}
      </div>
    </section>
  );
};
export default TrendingPost;
