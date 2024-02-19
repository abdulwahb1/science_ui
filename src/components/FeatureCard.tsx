import Image from "next/image";

type FeatureCard = {
  title: string;
  icon: string;
  description: string;
  isActive: boolean;
};

const FeatureCard = ({ title, icon, description, isActive }: FeatureCard) => {
  const cardClass = isActive ? "bg-custom-violet" : "bg-white";
  return (
    <div
      className={`flex w-full flex-col items-start justify-between bg-custom-grey p-4 2xl:p-10 border rounded-2xl max-w-[577px] 2xl:h-[511px] ${cardClass}`}
    >
      <div className=" p-4 md:p-7 ">
        <Image
          src={icon}
          alt="map"
          width={55}
          height={48}
          className="2xl:w-[76px] 2xl:h-[76px]"
        />
      </div>
      <h2 className="text-black text-lg md:text-xl 2xl:text-3xl font-extrabold mt-5 2x:mt-0 capitalize">
        {title}
      </h2>
      <p className=" mt-5 text-sm md:text-md text-black font-medium lg:mt-[30px] max-h-[112px] 2xl:text-xl 2xl:mt-0">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
