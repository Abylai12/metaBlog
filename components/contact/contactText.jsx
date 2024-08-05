const ContactText = () => {
  return (
    <div className="px-4 mt-[100px]">
      <h1 className="font-semibold text-4x mb-5">Contact Us</h1>
      <p className="font-normal text-base text-[#696A75]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam
      </p>
      <div className="flex justify-between mt-5 gap-12">
        <div className="p-4 flex-1 border border-[#E8E8EA] rounded-xl">
          <h1 className="font-semibold text-2xl mb-3">Address</h1>
          <p
            className="text-[
#696A75] font-normal text-lg"
          >
            1328 Oak Ridge Drive, Saint <br /> Louis, Missouri
          </p>
        </div>
        <div className=" flex-1 p-4 border border-[#E8E8EA] rounded-xl">
          <h1 className="font-semibold text-2xl mb-3">Contact</h1>
          <p
            className="text-[
#696A75] font-normal text-lg"
          >
            313-332-8662
          </p>
          <p
            className="text-[
#696A75] font-normal text-lg"
          >
            info@email.com
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContactText;
