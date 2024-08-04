const Avatar = ({ imgUrl, name }) => {
  return (
    <div className="flex items-center">
      <img className="rounded-full w-7 h-7 " src={imgUrl} alt="img" />
      <span className="text-[#97989F] text-sm font-medium">{name}</span>
    </div>
  );
};
export default Avatar;
