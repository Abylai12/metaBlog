const menu = [
  { label: "Home", link: "/" },
  { label: "Blog", link: "/#blog" },
  { label: "Contact", link: "/#contact" },
];

const Menu = ({ className }) => {
  return (
    <ul className={`font-normal ${className} gap-10 text-base text-gray-700`}>
      {menu.map(({ label, link }, idx) => (
        <li key={idx}>
          <a href={link}>{label}</a>
        </li>
      ))}
    </ul>
  );
};
export default Menu;
