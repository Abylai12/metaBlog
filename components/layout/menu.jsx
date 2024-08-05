import Link from "next/link";

const menu = [
  { label: "Home", link: "/" },
  { label: "Blog", link: "/blogs" },
  { label: "Contact", link: "/contact" },
];

const Menu = ({ className }) => {
  return (
    <ul className={`font-normal ${className} gap-10 text-base text-gray-700`}>
      {menu.map(({ label, link }, idx) => (
        <li key={idx}>
          <Link href={link}>{label}</Link>
        </li>
      ))}
    </ul>
  );
};
export default Menu;
