import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="relative h-80 w-80">
        <div className="absolute inset-0">
          <Image
            src="/footer.png"
            width={332}
            height={324}
            alt="footer image"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-evenly mt-10 z-10">
          <Image
            src="/footerlogo.png"
            width={256}
            height={29}
            alt="footer logo"
          />
          <div className="">
            <div className="flex">
              <div className="mt-1">
                <Image src="/Message.png" width={14} height={13} alt="phone" />
              </div>
              <p className="text-white text-sm ml-2">info@sciencereach.ca</p>
            </div>
            <div className="flex">
              <div className="mt-1">
                <Image src="/Location.png" width={14} height={13} alt="loc" />
              </div>
              <p className="text-white text-sm ml-2">Montréal, Quebec</p>
            </div>
          </div>
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="269"
              height="3"
              viewBox="0 0 269 3"
              fill="none"
            >
              <path
                d="M0.675781 1.97852H268.676"
                stroke="#5654C1"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="grid grid-cols-4 gap-4 ">
            <div>
              <Image
                src="/telegram.png"
                width={31}
                height={31}
                alt="telegram"
              />
            </div>
            <div>
              <Image src="/twitter.png" width={31} height={31} alt="twitter" />
            </div>
            <div>
              <Image
                src="/whatsapp.png"
                width={31}
                height={31}
                alt="whatsapp"
              />
            </div>
            <div>
              <Image
                src="/instagram.png"
                width={31}
                height={31}
                alt="instagram"
              />
            </div>
          </div>
          <p className="text-white text-sm ">
            Copyright © ScienceReach. <br />
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
