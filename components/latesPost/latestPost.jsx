import { useEffect, useContext } from "react";
import LatesPostCard from "./LatestPostCard";
import Links from "./links";
import { MyContext } from "@/context/context";
// const articles = [
//   {
//     id: "01",
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPw172JMNS1pXf8fq2rRzKwkvNmPcnVY8mlpDmytQJAoU6U3b0B7fI7cIaLrRgXd5a3KAqMkE2HjM2wsO2xsffI3sUEw9jtpqBv8C3opDDdFWboxrLLBMYu0~nkaPFmnahQEsgI2~yvOJkICbZWbEapg6JQma7ElVV8TaHfgJ5m~bU6lF0MYcNhtCYOFVUxnoZJV56WWt6SferMVfnC2Qrb--oPoVI39qGb7TB~o-PwzNGXXpB1XJYwEniGvRwYuUNVt1bCQC96EIz3K0q4FYB2NA2WRCvrP4YIDfK3RON8VfUDbld1-WHNk-Q6Qd8ydgXPtDebPY27T6XJ1BpXG3w__",
//     title: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//   },
//   {
//     id: "02",
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/7465/4a8f/67369b797c8fb2e96a533fd515fb2939?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T9Dtxxcc06NBsCHKj~HMvE5cmVjfPqtmLPslriW3kHnRMJpnqIxLlFzxkMiZ1te3BzP~XSbL5tBoS-CNzWlVrFzOOkIbE6f2IFXXjcpxWX9b0GPqPhyaOL4uKEF9e5YnG7EuToKJZG~IaQ-XpduLYDyvGAcPKScySkEmC7fMM1yAf8aDdlRuJvshSFucSdqt85fcW2AOSIoHnrGvYSSkQ5h0~D4cfSEQKESvmdRAWcRJ9X8b8z4faJG1a7MFiqYGD0GjdbjeFeSaqeZrgKOHsgKzEJ2bLxrU7~hKN0lRtFiUBFDOCzYdMzmxPtdGD-eyBYBcQ8fniTZu7KcWPw0xcw__",
//     title: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//   },
//   {
//     id: "03",
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/3969/1462/48009e641f454298f62e13de84ac0a09?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2ovyR~-GznK3t6WZenWodkrP4LIbZzGzdFFdqFXua3KqWRmS38YI3-x94A0mIeAmT~dREr67YY47W4KR0rk1fqiCSQC7uEBIZ35H9TseRSvQWcTMlaHuqi28uTewc6nJSqsfmNWDD2y8PsLBQ-T7Oex2zCtufvrtnTzgYGuk4B4wVeO8QLOkew5-wZpxSsJzbNZBinOpZuGpRBfrFHgsz7LZVjK9H9KRQaD66soVJ7wDBtaNZrnt1Cn9BCsJjVrbLnYm2QMdHPYWysVGcjh8zZWUIFSr8r-QkTCbBw007t-lLQnTCzbEJqYOh3-P9ynsizooyuM5R51MLmV69zWPQ__",
//     title: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//   },
//   {
//     id: "04",
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/fd32/a56d/d484b871abb15e732abb0a69f2ccd525?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iz-cHbkJudDkvX3MDoOg2F2-Y7dN-8AVL8cy-iyuXAEckiNs5ttkF8y~8onPgWKFE82QNmvQztAQU2p2b7M15inzHi7JNdlUgmJFflervXMAJkrvZSD9l4r3fy7Fj6rBqEOu1h9Nm-ERu5F33rnGMRMk0gYI7oRrdrvu~FmutQBFTtRZBcqR2PZf9hiS0TvgaHMXb2OgdaTTNhlv079CTHRWAyUbfepplqBLWuEWP6L3IyPwpdh9qkwacziLJntTHve3yQ4tW8I-yEnllcXn1kZiLg1rm~carIR0ig~lv~Myq2mhewduTZpPjQHIPtccMPpWMTkYP76wsgyDlXkOiA__",
//     title: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//   },
//   {
//     id: "05",
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/348e/c9c1/94d6445161ab63109e6e813699b61984?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kfBpEKF2sfeweVnkso1fcZlD27i19KcJx3-pEZFbPqIDjdro42hgT5SU2aAfpztnUW0ZyaP9DXTCY5UyRPgIZaSZBX4QgUFFkaR08jEqY-3P7NdpQfpm7E2uQR9RAbUtsJWz1rr3ZVVyWNc-XIzxGISH39~lVf4sCzZ0XnrTw5jTuWQb3wCr5DqKj4a3RKpYPenpXDKztH7slLhENBtBYtd3WoiyQBFXggYYASsUYyODBW46a8UcpuUoRptGkKaebp1hRuJwJmspB079znJzn3ui3N7WxT9dNKjg3W3GH1NV85R29oXVdEAvQayHKn31uLNWFGVihZh1NQbj5~DfpA__",
//     title: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//   },
//   {
//     id: "06",
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/e4e4/d40b/dc5bf5a2de00232ed3b7e18eadcbe03a?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NiziT8Dikh2KY9U2~w-n0WBx86SQk4o~xQ~2YfG9o7Fm~1WActhnZwiVUd8TMIkGXiNvAHW~-YyiesJQg3y2znk2clGOPC8ZUhbUW9kQXD~jUiKjKOHlJJldL2cJtv-hZr0qt~09y-S5RcUc~4QliYnY9CAFoObk2ET~rrJIXj--~k1nKJyzJ2VzHCvmzVHXmQ9BoGhjUK4hOfZVzzYdBkRcGEtNASCBuxW0UTphgX1izcIRth8PptkA8SZaxyKng2HaIKMnDYWHhZVHwzAWOnHlkT8OvV7YMkxH6qzxDEcFRhhZbphpq7Z5lilGbZ8l2hrybhKSYcM0tmHsWYXcvQ__",
//     title: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//   },
//   {
//     id: "07",
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/3087/05a3/0ba138a3797a763d4510333166532abb?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LL38siHC6DopnGMBjvIqTjUzUK6PLnk7vp~thJULx-WDHhj6mQvF5zpBYtjS1Kp1LeWCsc3S9QwkdStKFAAYzmnDUVKwdhOqGdiL583bxRBGLIoWUD~AiEybzbJ60SNw-iH2D9XcNmX35GatPl4PIkQd4GRZGu0zTpgogpebdHNvcYEnLG5AMKjfo8dzhoJgmA4dabAQ5Z5ph5MV9yM4LKMUMwlB0Ni2tekCIpT2a99hROPTRzptFXjcmClB448KgIAN64zJn2KHJwPCb~0b7am-Z8187Wz1IIU9blmnBDdlcxmjyGNtv4ZdGnRzIB38~KMVXkhIr~vh2v07XE6mBw__",
//     title: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//   },
//   {
//     id: "08",
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/9cba/0115/47643788a57b79a4aa1d6c6db76208a5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KM8ufotR64pdybbACBqiA0ioLymFt-vgD~75xNgxZREHVjCJDhZIA4lz0SFqAkxAUKFrU-eIZKSmcV5~DNwL3m0o5XBDxnYr2f~cu-FtQKP~U~gjCIoiIGcOarC-wiMExA4VVhx3NfWCVdyGbhhFURo1HLqiinzcLjKBc4cGTDkc7ukkOWIyKiuK6b8n6fTeSFUSGADRlDTzEy2AzeUCMBpuq5dWLvJgPC3Re7G-bErSgdU6goM5WO1uUc~FbgNsIlLt7pfN3kux-wQM2uku8peYGvEE1W9WSkFi-aq1z4IOFlh5sDxRoBGjE6h6D5rR3Vc0k~GDVqEGzZKAhNqlPg__",
//     title: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//   },
//   {
//     id: "09",
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/dbae/ead3/16e4297057a78fcd78323914d00b0bf8?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dl-4Sls7VPf80AxE1liK13GEKmXSVnjNI36QAoNKBFlHPZTrVXf~gEpjnS13DB-jsI5Q7nBrjlKxvtN9VBVGKDRsi5Jyx0dohZdBYMI4Qr0lWnt5~bHX5Nzn4rzQZ7S26zbu-l3oDZTzGTdGtjZtu~li5dgnYe0nS1fW9bQKyMYeABFKjv47weHZNsVbuVK6uYoAORJ1z3mLQgu5m60ElxKjrc1SnpO7ZAqsYUu2krnx0AgHilP3dTS7l6~gOsSaxKXpydd88-0HIzzdnETYZoIOVe1Zu~eVFLVHWC8iKNZ-0hKB7LO27QzAvCeRCHSGB4llFGT6CJYoV2O45Nn-ng__",
//     title: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//   },
// ];
const LatestPost = ({ style }) => {
  const { searchValue, articles, handleClick, setCount } =
    useContext(MyContext);
  useEffect(() => {
    setCount(9);
  }, []);
  return (
    <section className="max-w-[1220px] m-auto">
      <h1 className="font-bold text-2xl mb-8">All Blog Post</h1>
      <Links style={style} />
      <div className="flex flex-wrap justify-center gap-5 m-auto">
        {articles
          .filter((el) => el?.title.toLowerCase().includes(searchValue))
          .map(({ type_of, title, cover_image, readable_publish_date, id }) => (
            <LatesPostCard
              key={id}
              imgUrl={cover_image}
              postText={title}
              buttonTitle={type_of}
              date={readable_publish_date}
              id={id}
            />
          ))}
      </div>
      <div className="w-100 text-center my-[112px] ">
        <button
          onClick={handleClick}
          className="border rounded-md py-3 px-5 border-[#E8E8EA] font-medium text-[#696A75]"
        >
          Load More
        </button>
      </div>
    </section>
  );
};
export default LatestPost;
