import React from "react";
import Head from "next/head";

import HeroSection from "@/src/Home/components/HeroSection/HeroSection";
import YourNovels from "@/src/Home/components/YourNovels";
import TrendingNovels from "@/src/Home/components/TrendingNovels";
import PopularGenre from "@/src/Home/components/PopularGenre";

const index = () => {
  return (
    <>
      <Head></Head>
      <HeroSection />
      <YourNovels />
      <TrendingNovels />
      <PopularGenre />
    </>
  );
};

export default index;
