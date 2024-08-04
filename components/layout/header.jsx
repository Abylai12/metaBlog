import { FaSearch } from "react-icons/fa";
import Menu from "./menu";

const Header = () => {
  return (
    <section className="flex justify-between items-center  sm:px-[350px] sm:py-8 ">
      <div className="w-[158px] h-9">
        <img src="./images/Logo.png" alt="img" className="" />
      </div>
      <Menu className="flex" />
      <div className="flex p-2 relative items-center max-w-[166px]">
        <input
          className=" bg-[#F4F4F5] rounded-md"
          type="text"
          placeholder="  Search"
        />
        <FaSearch className="absolute right-0" />
      </div>
    </section>
  );
};
export default Header;
