import React from "react";
import Head from "next/head";

import HeroSection from "@/src/Home/HeroSection/HeroSection";
import YourNovels from "@/src/Home/WhereYouLeft/YourNovels";

const index = () => {
  return (
    <>
      <Head></Head>
      <HeroSection />
      <YourNovels />
    </>
  );
};

export default index;
