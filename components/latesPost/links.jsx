import Link from "next/link";
import { useState } from "react";

const links = [
  { menuId: "01", label: "All", link: "/" },
  { menuId: "02", label: "Design", link: "/" },
  { menuId: "03", label: "Travel", link: "/" },
  { menuId: "04", label: "Fashion", link: "/" },
  { menuId: "05", label: "Technology", link: "/" },
  { menuId: "06", label: "Branding", link: "/" },
];

const Links = ({ style }) => {
  const [btn, setBtn] = useState();
  const HandleBtn = () => {
    console.log("clicked");
    setBtn("text-red");
  };
  return (
    <div className={` ${style} flex justify-between my-8`}>
      <ul className="flex gap-5 font-bold text-xs text-[#495057]">
        {links.map(({ menuId, label, link }) => (
          <li key={menuId}>
            <Link className="hover:text-[#D4A373]" href={link}>
              <button onClick={HandleBtn}>{label}</button>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={"/blogs"} className="hover:text-[#D4A373]">
        View All
      </Link>
    </div>
  );
};
export default Links;
