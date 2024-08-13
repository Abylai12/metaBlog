import SlayButton from "@/components/slayCard/slayButton";
import Link from "next/link";

export default function FoultPage() {
  return (
    <section className="max-w-[1200px] m-auto flex justify-center gap-[60px] items-center">
      <span className="text-[72px] font-normal py-28 ">404</span>
      <span className="text-[72px] text-gray-500 font-thin">|</span>
      <div>
        <p className="text-2xl font-semibold">Page Not Found</p>
        <p
          className="text-lg font-normal py-5 text-[#696A75
]"
        >
          We're sorry. This page is unknown or <br /> does not exist the page
          you are looking for.
        </p>
        <Link href="/">
          <SlayButton
            bgColor="bg-[#4B6BFB] text-white"
            buttonTitle="Back to Home"
          />
        </Link>
      </div>
    </section>
  );
}
