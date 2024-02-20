import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="relative h-80 w-80 lg:w-screen">
        <div className="absolute inset-0">
          <Image
            src="/footer.png"
            width={332}
            height={324}
            alt="footer image"
            className="block lg:hidden"
          />
          {/* <Image
            src="/footer2xl.png"
            width={1777}
            height={274}
            alt="footerimage"
            className="hidden lg:block w-full px-4"
          /> */}
        </div>

        {/* {Mobile Footer} */}
        <div className="absolute inset-0 flex flex-col items-center justify-evenly mt-10 z-10 lg:hidden">
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
            {/* {Line} */}
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

        {/* {Desktop Footer} */}
        <div className="flex flex-col px-4">
          <div className="absolute inset-x-0 bottom-0 ">
            <Image
              src="/footer2xl.png"
              width={1777}
              height={274}
              alt="footerimage"
              className="hidden lg:block w-full px-4"
            />
          </div>
          <div className="absolute inset-0 lg:flex hidden  mt-10 z-10 px-20 ">
            <div className="flex flex-row items-center justify-between absolute inset-0  mt-10 z-10 mx-52 2xl:mx-64">
              <div>
                <Image
                  src="/footerlogo.png"
                  width={256}
                  height={29}
                  alt="footer logo"
                />
              </div>
              <div className="flex flex-row xl:gap-x-4">
                <div className="flex">
                  <div className="mt-1">
                    <Image
                      src="/Message.png"
                      width={14}
                      height={13}
                      alt="phone"
                      className="lg:w-4 lg:h-4 xl:w-5 xl:h-5"
                    />
                  </div>
                  <p className="text-white text-sm ml-2 xl:text-xl">
                    info@sciencereach.ca
                  </p>
                </div>
                <div className="flex">
                  <div className="mt-1">
                    <Image
                      src="/Location.png"
                      width={14}
                      height={13}
                      alt="loc"
                      className="lg:w-4 lg:h-4 xl:w-5 xl:h-5"
                    />
                  </div>
                  <p className="text-white text-sm ml-2 xl:text-xl">
                    Montréal, Quebec
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col absolute inset-x-0 bottom-[2rem] z-10">
              <div className="flex flex-col justify-center items-center  h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1626"
                  height="3"
                  viewBox="0 0 1626 3"
                  fill="none"
                  className="lg:w-3/4"
                >
                  <path d="M0 1.71533H1626" stroke="#5654C1" strokeWidth="2" />
                </svg>
              </div>
              <div className="flex flex-row justify-between mx-52 2xl:mx-64 mt-5">
                <p className="text-white text-sm ">
                  Copyright © ScienceReach. All Rights Reserved.
                </p>

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
                    <Image
                      src="/twitter.png"
                      width={31}
                      height={31}
                      alt="twitter"
                    />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
