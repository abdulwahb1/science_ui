import Image from "next/image";

type FeatureCard = {
  title: string;
  icon: string;
  description: string;
};

const FeatureCard = ({ title, icon, description }: FeatureCard) => {
  return (
    <div className="flex w-full turn_purple flex-col items-start justify-between bg-custom-grey p-4 border rounded-2xl max-w-[577px]">
      <div className=" p-4 lg:p-7 ">
        <Image src={icon} alt="map" width={55} height={48} className="" />
      </div>
      <h2 className="text-black text-lg font-extrabold mt-5 capitalize">
        {title}
      </h2>
      <p className=" mt-5 text-sm text-black font-medium lg:mt-[30px]">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
