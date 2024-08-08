import { FaSearch } from "react-icons/fa";
import Menu from "./menu";
import { IoMenu } from "react-icons/io5";
import { MyContext } from "@/context/context";
import { useContext } from "react";

const Header = () => {
  const data = useContext(MyContext);
  console.log(data);

  return (
    <section className="flex justify-between items-center  sm:px-[350px] sm:py-8 ">
      <div className="w-[158px] h-9">
        <img src="/images/Logo2.svg" alt="img" className="" />
      </div>
      <Menu className="sm:flex hidden" />
      <div className="sm:flex hidden p-2 relative items-center max-w-[166px]">
        <input
          className=" bg-[#F4F4F5] rounded-md"
          type="text"
          placeholder="  Search"
        />
        <FaSearch className="absolute right-0" />
      </div>
      <button className="sm:hidden">
        <IoMenu />
      </button>
    </section>
  );
};
export default Header;
