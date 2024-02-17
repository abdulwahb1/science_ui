import {
  Navbar,
  Footer,
  Contact,
  CTA,
  Feature2,
  LatestProject,
  Feature,
  Hero,
  Stats,
} from "@/sections";
import React, { Fragment } from "react";
import Head from "next/head";

interface Props {}

export default function Page({}: Props) {
  return (
    <Fragment>
      <Head>
        <title>Science Reach</title>
      </Head>
      <section className="flex flex-col w-full h-full justify-start items-center">
        <Navbar />
        <Hero />
        <Feature />
        <Feature2 />
        <CTA />
        <LatestProject />
        <Stats />
        <Contact />
        <Footer />
      </section>
    </Fragment>
  );
}
