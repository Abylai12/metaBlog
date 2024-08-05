import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import TextCard from "./textCard";
const SlayCard = () => {
  return (
    <section className="sm:px-[350px] sm:py-8 ">
      <div className="bg-[url('https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p895KkdD7DfcCulv8AGa6shbfkAQ13LytdYV4Wsw0PQ-FL22qhaG4o-eKbtZx7eC5DRPpiBpCGUpjA693ZOyVqMT2J470CF5oPujcq9NlJ3lWfW-JUAgxgQbjWqUjceO~P6LG5zQBnAXLsDlYyLfGZGXpGRAWM~PjK7cuD7ZeIWAB~9B25Ya0Qi6N8hGL5AmXlwT33Lqr3vmpMzULNrBhPpc~DCGFZ0rpAhc~vU7mdu7gEWoRMdWX1LA0jTsS3k~eM1KcmqcWGuHD0rhQ-KTBspRHuS7cVmwTdluAQNY5C0Tf2yC8pqCOm2771pFOW-2NiyECQSKSclX-GQ9714nJw__')] w-full h-[600px] bg-center bg-cover gradient relative rounded-xl">
        <TextCard />
      </div>

      <div className="text-right mt-4">
        <button className="text-4xl mr-2">
          <FaArrowAltCircleLeft />
        </button>
        <button className="text-4xl ">
          <FaArrowAltCircleRight />
        </button>
      </div>
    </section>
  );
};
export default SlayCard;
