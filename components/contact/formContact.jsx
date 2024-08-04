import SlayButton from "../slayCard/slayButton";

const FormContact = () => {
  return (
    <div className="my-10 py-8 pl-9 pr-[130px] max-w-[643px] max-h-[440px] border bg-[#F6F6F7] rounded-xl">
      <h1>Leave a Message</h1>
      <div className="flex gap-7 my-6">
        <input className="p3" type="text" placeholder="  Your Name" />
        <input className="p-3" type="email" placeholder="  Your Email" />
      </div>
      <div className="flex flex-col">
        <input
          className=" mb-6 w-100 p-3"
          type="text"
          placeholder="  Subject"
        />
        <input
          className="w-100 h-[150px] p-3"
          type="text"
          placeholder="Write a message"
        />
      </div>
      <SlayButton
        bgColor="bg-[#4B6BFB] mt-6 text-white"
        buttonTitle="Send Message"
      />
    </div>
  );
};
export default FormContact;
