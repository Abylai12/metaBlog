const SlayButton = ({ bgColor, buttonTitle }) => {
  return (
    <button className={` ${bgColor}  rounded-md  px-2 py-1`}>
      {buttonTitle}
    </button>
  );
};
export default SlayButton;
