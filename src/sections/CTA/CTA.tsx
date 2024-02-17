import React from "react";
import Image from "next/image";
import { Button } from "@/components";

const CTA = () => {
  return (
    <section className="flex flex-col justify-center items-center my-10 relative">
      <div className="z-0 absolute inset-0">
        <Image
          src="/section_3.png"
          width={379}
          height={334}
          alt="section_3"
          className="w-full p-2"
        />
      </div>

      <div className="z-10 flex flex-col justify-center items-center text-center my-10 p-2">
        <h2 className="text-white text-2xl font-bold">
          Are you a Community-Based Organization (CBO)?
        </h2>
        <p className="text-white text-sm font-normal my-7">
          ScienceReach can help you publish about the pressing challenges in
          your community. Researchers can then use this information to do
          research that truly makes an impact. CBOs are eligible to receive
          regular compensation from ScienceReach based on the usage of their
          publications.
        </p>
        <Button variant="btn_white_mobile">Get Started with SCP</Button>
      </div>
    </section>
  );
};

export default CTA;
