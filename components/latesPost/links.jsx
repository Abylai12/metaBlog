const links = [
  { menuId: "01", label: "All", link: "/" },
  { menuId: "02", label: "Design", link: "/" },
  { menuId: "03", label: "Travel", link: "/" },
  { menuId: "04", label: "Fashion", link: "/" },
  { menuId: "05", label: "Technology", link: "/" },
  { menuId: "06", label: "Branding", link: "/" },
];

const Links = ({ style }) => {
  return (
    <div className={` ${style} flex justify-between my-8`}>
      <ul className="flex gap-5 font-bold text-xs text-[#495057]">
        {links.map(({ menuId, label, link }) => (
          <li key={menuId}>
            <a className="hover:text-[#D4A373]" href={link}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <button className="hover:text-[#D4A373]">View All</button>
    </div>
  );
};
export default Links;
