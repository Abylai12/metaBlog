import Menu from "./menu";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-[#E8E8EA] sm:px-[350px] sm:py-8">
      <div className="grid grid-cols-3">
        <div>
          <span className="font-bold text-lg">About</span>
          <p className="text-gray-500 mt-3 mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Temporibus, aliquid? Provident, expedita qui itaque, exercitationem
          </p>
          <p>
            <span className="font-bold">Email:</span>info@jsteamplate.net
          </p>
          <p>
            <span className="font-bold">Phone:</span>88012345789
          </p>
        </div>
        <Menu className="text-center" />
        <div className="flex gap-7 text-center">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div className="flex mt-6 py-5 justify-between items-center border-t-2 border-[#DCDDDF]">
        <div className="flex gap-2">
          <img src="./images/Union.png" alt="" />
          <div>
            <h1 className="text-xl">
              Meta<span className="font-bold">Blog</span>
            </h1>
            <div className="flex items-center gap-1">
              <FaCopyright />
              <span>All Rights Reserved.</span>
            </div>
          </div>
        </div>
        <ul className="flex gap-2">
          <li>Terms of Use</li>
          <li>|</li>
          <li>Privacy Policy</li>
          <li>|</li>
          <li>Cookies</li>
        </ul>
      </div>
    </section>
  );
};
export default Footer;
